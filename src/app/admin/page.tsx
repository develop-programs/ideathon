import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import TeamEditor from "@/components/custom/forms/TeamEditor";
import StartupEditor from "@/components/custom/forms/StartupEditor";
import { SponsorEditor } from "@/components/custom/forms/SponsorEditor";
import BlogEditor from "@/components/custom/forms/BlogEditor";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page",
};

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    if (session.user.role === "admin") {
      return (
        <div className="h-screen max-w-6xl mx-auto space-y-6 py-12">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Tabs defaultValue="StartUps">
            <TabsList>
              <TabsTrigger value="StartUps">StartUps</TabsTrigger>
              <TabsTrigger value="Teams">Teams</TabsTrigger>
              <TabsTrigger value="Sponsers">Sponsers</TabsTrigger>
              <TabsTrigger value="Blog">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="StartUps" className="max-w-6xl">
              <StartupEditor />
            </TabsContent>
            <TabsContent value="Teams" className="max-w-6xl">
              <TeamEditor />
            </TabsContent>
            <TabsContent value="Sponsers" className="max-w-6xl">
              <SponsorEditor />
            </TabsContent>
            <TabsContent value="Blog" className="max-w-6xl">
              <BlogEditor />
            </TabsContent>
          </Tabs>
        </div>
      );
    }
  }
}
