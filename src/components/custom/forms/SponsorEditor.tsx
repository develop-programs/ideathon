import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { SponsorsData } from "@/json/Sponsers";
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
import { useSelector } from "react-redux";
import { Edit, Trash2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(50),
  tier: z.enum(["title", "gold", "silver", "bronze", "others"]),
  logo: z.string().url().optional(),
  website: z.string().url().optional(),
});

export const SponsorEditor = () => {
  const { toast } = useToast();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const data = useSelector((state: any) => state.sponsor.data);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      tier: "others",
      logo: "",
      website: "",
    },
  });

  const handleSave = (values: z.infer<typeof formSchema>) => {
    try {
      const newSponsor = {
        name: values.name,
        tier: values.tier,
        logo: values.logo,
        website: values.website,
      };

      if (editingIndex !== null) {
        SponsorsData[editingIndex] = newSponsor;
      } else {
        SponsorsData.push(newSponsor);
      }

      toast({
        title: "Success",
        description: "Sponsor saved successfully",
      });

      form.reset();
      setEditingIndex(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save sponsor",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (index: number) => {
    const sponsor = SponsorsData[index];
    form.setValue("name", sponsor.name);
    form.setValue("tier", sponsor.tier);
    form.setValue("logo", sponsor.logo);
    form.setValue("website", sponsor.website);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    SponsorsData.splice(index, 1);
    toast({
      title: "Success",
      description: "Sponsor deleted successfully",
    });
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
                  <FormLabel>Tier</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Tier" />
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
                <FormItem>
                  <FormLabel>Logo URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Logo URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {editingIndex !== null ? "Update" : "Add"} Sponsor
            </Button>
          </form>
        </Form>
      </Card>
      <div className="w-full grid grid-cols-4 gap-4">
        {data.map((sponsor: any, index: number) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{sponsor.name}</h3>
                <p className="text-sm text-muted-foreground">{sponsor.tier}</p>
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
                  onClick={() => handleDelete(sponsor.name)}
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
};
