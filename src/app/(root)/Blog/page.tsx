import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import moment from "moment";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    content:
      "React is a powerful library for building user interfaces. It allows developers to create reusable UI components that manage their own state, resulting in complex UIs being built from simple building blocks.",
    category: "Technology",
    created_at: "2024-01-12T10:00:00Z",
    author: "John Doe",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    content:
      "As we look towards the future of web development, several trends are emerging. From AI-powered development tools to WebAssembly, the landscape of web development continues to evolve rapidly.",
    category: "Technology",
    created_at: "2024-01-11T15:30:00Z",
    author: "Jane Smith",
  },
];

export default function page() {
  return (
    <div className="min-h-screen space-y-4">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        <h2 className="text-4xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-2 gap-4">
          {BlogsData.map((blog) => (
            <Card key={blog.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{blog.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      By {blog.author} •{" "}
                      {moment(blog.created_at).format("MMMM DD, YYYY")}
                    </div>
                  </div>
                  <Badge>{blog.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose text-sm">{blog.content}</div>
              </CardContent>
              <CardFooter>
                <Button size="sm" effect="shineHover">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
