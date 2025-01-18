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
import { useToast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  addTeamMember,
  updateTeamMember,
  removeTeamMember,
} from "@/store/providers/Teams";
import { Trash2, Edit } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
  const data = useSelector((state: any) => state.team.data);
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

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
    const newMember = {
      name: values.username,
      role: values.role,
      image: values.image,
      linkedIn: values.linkedIn,
      github: values.github,
      instagram: values.instagram,
    };

    if (editingIndex !== null) {
      dispatch(
        updateTeamMember({
          oldName: data[editingIndex].name,
          member: newMember,
        })
      );
      toast({
        title: "Success",
        description: "Team member updated successfully",
      });
    } else {
      dispatch(addTeamMember(newMember));
      toast({
        title: "Success",
        description: "Team member added successfully",
      });
    }

    form.reset();
    setEditingIndex(null);
  }

  const handleEdit = (index: number) => {
    const member = data[index];
    form.setValue("username", member.name);
    form.setValue("role", member.role);
    form.setValue("image", member.image);
    form.setValue("linkedIn", member.linkedIn);
    form.setValue("instagram", member.instagram);
    form.setValue("github", member.github);
    setEditingIndex(index);
  };

  const handleDelete = (name: string) => {
    dispatch(removeTeamMember(name));
    toast({
      title: "Success",
      description: "Team member deleted successfully",
    });
  };

  return (
    <div className="space-y-4">
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
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Roles</SelectLabel>
                          {
                            // @ts-ignore
                            formSchema.shape.role._def.values.map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))
                          }
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
            <Button type="submit">
              {editingIndex !== null ? "Update" : "Add"} Team Member
            </Button>
          </form>
        </Form>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((member, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleEdit(index)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(member.name)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
