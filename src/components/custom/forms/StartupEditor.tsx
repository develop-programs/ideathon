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
  addStartup,
  updateStartup,
  removeStartup,
} from "@/store/providers/Startups";
import React from "react";
import { Card } from "../ui/card";
import { TagsInput } from "../ui/TagInput";
import { Edit, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

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
  const data = useSelector((state: any) => state.startup.data);
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

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
    const newStartup = {
      name: values.name,
      slug: values.slug,
      description: values.description,
      image: values.image,
      category: values.category,
      longdescription: values.longdescription,
      founded: values.founded,
      team: values.team,
      contact: values.contact,
    };

    if (editingIndex !== null) {
      toast({
        title: "Success",
        description: "Startup updated successfully",
      });
    } else {
      toast({
        title: "Success",
        description: "Startup added successfully",
      });
    }

    form.reset();
    setEditingIndex(null);
  }

  const handleEdit = (index: number) => {
    const startup = data[index];
    form.setValue("name", startup.name);
    form.setValue("slug", startup.slug);
    form.setValue("description", startup.description);
    form.setValue("image", startup.image);
    form.setValue("category", startup.category);
    form.setValue("longdescription", startup.longdescription);
    form.setValue("founded", startup.founded);
    form.setValue("team", startup.team);
    form.setValue("contact", startup.contact);
    setEditingIndex(index);
  };

  const handleDelete = (slug: string) => {
    dispatch(removeStartup(slug));
    toast({
      title: "Success",
      description: "Startup deleted successfully",
    });
  };

  return (
    <div className="space-y-4">
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

            <Button type="submit">
              {editingIndex !== null ? "Update" : "Add"} Startup
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
