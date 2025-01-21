"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Card className="p-4 space-y-4">
      <div className="space-y-2">
        <Input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <Button>Submit</Button>
      </div>
    </Card>
  );
}
