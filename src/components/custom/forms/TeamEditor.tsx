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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  username: z.string().min(2, "Username is required").max(50),
  role: z.enum([
    "Core-Leader",
    "Tech-Lead",
    "Social-Media-Lead",
    "Management-Lead",
    "Core-Member",
    "Tech-Member",
    "Social-Media-Member",
    "Management-Member",
    "Design-Lead",
    "Design-Member",
    "Marketing-Lead",
    "Marketing-Member",
  ]),
  image: z.string().url().optional(),
  linkedIn: z.string().url().optional(),
  github: z.string().url().optional(),
  instagram: z.string().url().optional(),
});

export default function TeamEditor() {
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const response = await axios.get(`${window.location.origin}/api/Team`);
      return response.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (newMember: z.infer<typeof formSchema>) => {
      await axios.post(`${window.location.origin}/api/Team`, {
        name: newMember.username,
        role: newMember.role,
        image: newMember.image,
        linkedIn: newMember.linkedIn,
        github: newMember.github,
        instagram: newMember.instagram,
      });
    },
    onSuccess: () => {
      toast.success("Team member added successfully");
      form.reset();
      refetch();
    },
    onError: (error) => {
      toast.error("Failed to add team member");
      console.log(error);
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({
      id,
      updatedMember,
    }: {
      id: string;
      updatedMember: z.infer<typeof formSchema>;
    }) => {
      await axios.patch(`${window.location.origin}/api/Team?id=${id}`, {
        name: updatedMember.username,
        role: updatedMember.role,
        image: updatedMember.image,
        linkedIn: updatedMember.linkedIn,
        github: updatedMember.github,
        instagram: updatedMember.instagram,
      });
    },
    onSuccess: () => {
      toast.success("Team member updated successfully");
      form.reset();
      setEditingIndex(null);
      refetch();
    },
    onError: () => {
      toast.error("Failed to update team member");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`${window.location.origin}/api/Team`, {
        data: { id },
      });
    },
    onSuccess: () => {
      toast.success("Team member deleted successfully");
      refetch();
    },
    onError: () => {
      toast.error("Failed to delete team member");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      role: "Core-Member",
      image: "",
      linkedIn: "",
      github: "",
      instagram: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (editingIndex !== null) {
      const teamMember = data.teams[editingIndex];
      editMutation.mutate({ id: teamMember.id, updatedMember: values });
    } else {
      addMutation.mutate(values);
    }
  }

  function handleEdit(index: number) {
    const teamMember = data.teams[index];
    form.setValue("username", teamMember.name);
    form.setValue("role", teamMember.role);
    form.setValue("image", teamMember.image || "");
    form.setValue("linkedIn", teamMember.linkedIn || "");
    form.setValue("github", teamMember.github || "");
    form.setValue("instagram", teamMember.instagram || "");
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
                  name="username"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          onOpenChange={(isOpen) => {
                            if (!isOpen) {
                              form.trigger("role");
                            }
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Roles</SelectLabel>
                              {formSchema.shape.role._def.values.map((role) => (
                                <SelectItem key={role} value={role}>
                                  {role}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="lg:col-span-3">
                      <FormLabel>Profile picture</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="linkedIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn URL</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram URL</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="github"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Github URL</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
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
                  {editingIndex !== null ? "Update" : "Add"} Team Member
                </Button>
              </form>
            </Form>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.total > 0 ? (
              data?.teams.map(
                (
                  team: { id: string; name: string; role: string },
                  index: number
                ) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">{team.name}</h2>
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
                                    onClick={() => handleDelete(team.id)}
                                  >
                                    Continue
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <Badge>{team.role}</Badge>
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
