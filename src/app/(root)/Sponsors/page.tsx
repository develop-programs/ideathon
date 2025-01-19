"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import SponsersForm from "./(components)/SponsersForm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SponsersCard from "./(components)/SponsersCard";

export default function Page() {
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/api/Sponsors`);
      return response.data.sponsors;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen flex flex-col justify-around items-center py-12">
      <section>
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent">
            Our Valued Sponsors
          </h1>
          <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Meet the innovative organizations supporting our mission and making
            our events possible.
          </p>
          <div className="space-x-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:scale-105 transform bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent transition-transform duration-300"
                >
                  Become a Sponsor
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogTitle>Sponsorship Application</DialogTitle>
                <SponsersForm />
              </DialogContent>
            </Dialog>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 hover:bg-Caccent transform transition-transform duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <SponsersCard title="title" data={data} />
          <SponsersCard title="gold" data={data} />
          <SponsersCard title="silver" data={data} />
          <SponsersCard title="bronze" data={data} />
          <SponsersCard title="other" data={data} />
        </div>
      </section>
      <section>
        <div className="text-center flex flex-col gap-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent bg-clip-text text-transparent">
            Become a Sponsor
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Join our community of innovative sponsors and help shape the future
            of entrepreneurship. Partner with us to make a lasting impact.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transform bg-gradient-to-r from-Cprimary via-Csecondary to-Caccent transition-transform duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
