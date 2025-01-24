"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(50),
  tier: z.enum(["title", "gold", "silver", "bronze", "other"]),
  logo: z.string().url().optional(),
  website: z.string().url().optional(),
});

export const SponsorEditor = () => {
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const response = await axios.get(
        `${window.location.origin}/api/Sponsors`
      );
      return response.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newSponsor: z.infer<typeof formSchema>) => {
      await axios.post(`${window.location.origin}/api/Sponsors`, {
        name: newSponsor.name,
        tier: newSponsor.tier,
        logo: newSponsor.logo,
        website: newSponsor.website,
      });
    },
    onSuccess: () => {
      toast.success("Sponsor added successfully");
      form.reset();
      refetch();
    },
    onError: (error) => {
      toast.error("Failed to add sponsor");
      console.log(error);
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({
      id,
      updatedSponsor,
    }: {
      id: string;
      updatedSponsor: z.infer<typeof formSchema>;
    }) => {
      await axios.patch(`${window.location.origin}/api/Sponsors?id=${id}`, {
        name: updatedSponsor.name,
        tier: updatedSponsor.tier,
        logo: updatedSponsor.logo,
        website: updatedSponsor.website,
      });
    },
    onSuccess: () => {
      toast.success("Sponsor updated successfully");
      form.reset();
      setEditingIndex(null);
      refetch();
    },
    onError: () => {
      toast.error("Failed to update sponsor");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${window.location.origin}/api/Sponsors`, {
        data: { id },
      });
    },
    onSuccess: () => {
      toast.success("Sponsor deleted successfully");
      refetch();
    },
    onError: () => {
      toast.error("Failed to delete sponsor");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      tier: "other",
      logo: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (editingIndex !== null) {
      const sponsor = data.sponsors[editingIndex];
      editMutation.mutate({ id: sponsor.id, updatedSponsor: values });
    } else {
      addMutation.mutate(values);
    }
  }

  function handleEdit(index: number) {
    const sponsor = data.sponsors[index];
    form.setValue("name", sponsor.name);
    form.setValue("tier", sponsor.tier);
    form.setValue("logo", sponsor.logo || "");
    form.setValue("website", sponsor.website || "");
    setEditingIndex(index);
  }

  function handleDelete(id: string) {
    deleteMutation.mutate(id);
  }

  return (
    <div className="space-y-4">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {!isLoading && !isError && (
        <>
          <Card className="p-4 space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Sponsor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Sponsor Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tier"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Tier</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          onOpenChange={(isOpen) => {
                            if (!isOpen) {
                              form.trigger("tier");
                            }
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a tier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="title">Title</SelectItem>
                            <SelectItem value="gold">Gold</SelectItem>
                            <SelectItem value="silver">Silver</SelectItem>
                            <SelectItem value="bronze">Bronze</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Logo URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Logo URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Website URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={
                    addMutation.status === "pending" ||
                    editMutation.status === "pending"
                  }
                >
                  {editingIndex !== null ? "Update" : "Add"} Sponsor
                </Button>
              </form>
            </Form>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.total > 0 ? (
              data.sponsors.map(
                (
                  sponsor: { id: string; name: string; tier: string },
                  index: number
                ) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">
                          {sponsor.name}
                        </h2>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <EllipsisVertical />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            align="start"
                            side="left"
                            className="grid gap-1 w-32 p-1"
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEdit(index)}
                              className="justify-start"
                            >
                              <Edit />
                              Edit
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="justify-start"
                                >
                                  <Trash2 />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Are you absolutely sure?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(sponsor.id)}
                                  >
                                    Continue
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Badge>{sponsor.tier}</Badge>
                    </CardContent>
                  </Card>
                )
              )
            ) : (
              <p className="text-xl font-semibold">No data found ...</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
