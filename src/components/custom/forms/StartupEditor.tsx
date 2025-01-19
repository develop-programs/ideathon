"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TagsInput } from "@/components/ui/TagInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
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
  slug: z.string().min(2, "Slug is required").max(50),
  description: z.string().min(10, "Description is required").max(500),
  image: z.string().url().optional(),
  category: z.enum(["Tech", "Health", "Finance", "Education"]),
  longdescription: z.string().min(10, "Long description is required").max(1000),
  founded: z.string().min(4, "Founded year is required").max(4),
  team: z.array(z.string()).min(1, "Team members are required"),
  contact: z.string().email("Invalid email address"),
});

export default function StartupEditor() {
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["startups"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/api/startups`);
      return response.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newStartup: z.infer<typeof formSchema>) => {
      await axios.post(`http://localhost:3000/api/Startups`, newStartup);
    },
    onSuccess: () => {
      toast.success("Startup added successfully");
      form.reset();
      refetch();
    },
    onError: (error) => {
      toast.error("Failed to add startup");
      console.log(error);
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({
      id,
      updatedStartup,
    }: {
      id: string;
      updatedStartup: z.infer<typeof formSchema>;
    }) => {
      await axios.patch(`http://localhost:3000/api/Startups?id=${id}`, updatedStartup);
    },
    onSuccess: () => {
      toast.success("Startup updated successfully");
      form.reset();
      setEditingIndex(null);
      refetch();
    },
    onError: () => {
      toast.error("Failed to update startup");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`http://localhost:3000/api/Startups`, {
        data: { id },
      });
    },
    onSuccess: () => {
      toast.success("Startup deleted successfully");
      refetch();
    },
    onError: () => {
      toast.error("Failed to delete startup");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      image: "",
      category: "Tech",
      longdescription: "",
      founded: "",
      team: [],
      contact: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (editingIndex !== null) {
      const startup = data.startups[editingIndex];
      editMutation.mutate({ id: startup.id, updatedStartup: values });
    } else {
      addMutation.mutate(values);
    }
  }

  function handleEdit(index: number) {
    const startup = data.startups[index];
    form.setValue("name", startup.name);
    form.setValue("slug", startup.slug);
    form.setValue("description", startup.description);
    form.setValue("image", startup.image || "");
    form.setValue("category", startup.category);
    form.setValue("longdescription", startup.longdescription);
    form.setValue("founded", startup.founded);
    form.setValue("team", startup.team);
    form.setValue("contact", startup.contact);
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
                className="grid grid-cols-1 lg:grid-cols-4 gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Startup name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2">
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="Startup slug" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2">
                      <FormLabel>Image URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2">
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Tech">Tech</SelectItem>
                            <SelectItem value="Health">Health</SelectItem>
                            <SelectItem value="Finance">Finance</SelectItem>
                            <SelectItem value="Education">Education</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="founded"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2">
                      <FormLabel>Founded Year</FormLabel>
                      <FormControl>
                        <Input placeholder="Founded Year" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="team"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-2">
                      <FormLabel>Team Members</FormLabel>
                      <FormControl>
                        <TagsInput
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Enter anything"
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-4">
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-4">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Startup description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="longdescription"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-4">
                      <FormLabel>Long Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Long Description" {...field} />
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
                  {editingIndex !== null ? "Update" : "Add"} Startup
                </Button>
              </form>
            </Form>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pb-12">
            {data?.total > 0 ? (
              data.startups.map(
                (
                  startup: { id: string; name: string; category: string },
                  index: number
                ) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">
                          {startup.name}
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
                                    onClick={() => handleDelete(startup.id)}
                                  >
                                    Continue
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Badge>{startup.category}</Badge>
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
}
