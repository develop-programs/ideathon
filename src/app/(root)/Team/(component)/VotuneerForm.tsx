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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MultipleSelector from "@/components/ui/MultiSelector";
import { Textarea } from "@/components/ui/textarea";

const roles = [
  { value: "management", label: "Management" },
  { value: "social", label: "Social Media" },
  { value: "design", label: "Designing" },
  { value: "documentation", label: "Documentation" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "technical", label: "Technical" },
  { value: "communication", label: "Communication" },
  { value: "other", label: "Other Volunteers" },
];

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  contactNumber: z.string().min(10).max(15),
  email: z.string().email(),
  college: z.string().min(2).max(50),
  departmentAndYear: z.string().min(2).max(50),
  roles: z.array(z.string()).min(1),
  interest: z.string().min(2).max(100),
  experience: z.string().min(2).max(100),
  skills: z.string().min(2).max(100),
  availability: z.enum(["yes", "no"]),
  availableDates: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export default function VotuneerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      college: "",
      departmentAndYear: "",
      roles: [],
      interest: "",
      experience: "",
      skills: "",
      availability: "yes",
      availableDates: "",
      additionalInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-2"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input placeholder="1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="college"
          render={({ field }) => (
            <FormItem>
              <FormLabel>College</FormLabel>
              <FormControl>
                <Input placeholder="ABC University" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="departmentAndYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department and Year</FormLabel>
              <FormControl>
                <Input placeholder="Computer Science, 3rd Year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roles</FormLabel>
              <FormControl>
                <MultipleSelector
                  commandProps={{
                    label: "Select roles",
                  }}
                  defaultOptions={roles}
                  placeholder="Select roles"
                  hideClearAllButton
                  hidePlaceholderWhenSelected
                  emptyIndicator={
                    <p className="text-center text-sm">No results found</p>
                  }
                  {...field}
                  value={field.value.map(
                    (val) =>
                      roles.find((role) => role.value === val) || {
                        value: val,
                        label: val,
                      }
                  )}
                  onChange={(selected) =>
                    field.onChange(selected.map((option) => option.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why are you interested in this role?</FormLabel>
              <FormControl>
                <Input placeholder="Your interests" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Availability</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Experience</FormLabel>
              <FormControl>
                <Textarea placeholder="Your experience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <Textarea placeholder="Your skills" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availableDates"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>If no, mention your available dates/times</FormLabel>
              <FormControl>
                <Textarea placeholder="Available dates/times" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>
                Any other suggestions or questions regarding the event?
              </FormLabel>
              <FormControl>
                <Textarea placeholder="Additional information" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">
          By submitting this form, I confirm that the information provided is
          accurate and that I am committed to contributing to the success of the
          event.
        </div>
        <Button type="submit" size="lg" className="col-span-2">
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
