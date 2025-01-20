import ContactForm from "@/components/custom/forms/Contact-Form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-12 pt-16">
      <section className="max-w-3xl flex flex-col gap-6 text-center">
        <h1 className="text-5xl  bg-gradient-to-r from-Csecondary to-Caccent bg-clip-text text-transparent font-bold">
          Contact Us
        </h1>
        <span className="text-lg text-gray-600 dark:text-gray-300">
          Have questions? We&apos;d love to hear from you. Send us a message and
          we&apos;ll respond as soon as possible.
        </span>
      </section>
      <section className="max-w-5xl w-full flex justify-between items-start gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Reach out to us through any of these means
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <p className="text-sm">contact@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-sm">
                123 Innovation Street, Tech City, TC 12345
              </p>
            </div>
          </CardContent>
        </Card>

        <ContactForm />
      </section>
    </div>
  );
}
