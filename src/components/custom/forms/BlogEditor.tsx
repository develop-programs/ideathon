"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import JoditEditor from "jodit-pro-react";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      <div className="bg-white dark:bg-gray-800">
        <RichTextEditor
          value={content}
          onChange={(content: string) => setContent(content)}
        />
      </div>
      <div className="flex justify-end">
        <Button>Submit</Button>
      </div>
    </Card>
  );
}

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const editor = React.useRef(null);

  const config = {
    readonly: false, // All functionalities enabled (edit mode)
    toolbarSticky: true,
    minHeight: 300,
    maxHeight: 600,
    height: 450,
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "align",
      "outdent",
      "indent",
      "|",
      "ul",
      "ol",
      "|",
      "font",
      "fontsize",
      "brush",
      "|",
      "link",
      "image",
      "table",
      "|",
      "undo",
      "redo",
      "copy",
      "cut",
      "paste",
    ],
    uploader: {
      url: "https://xdsoft.net/jodit/connector/index.php",
      // Your server endpoint for file uploads
      format: "json",
      filesVariableName: "files",
    },
    filebrowser: {
      ajax: {
        url: "https://xdsoft.net/jodit/finder/?action=fileUpload", // Your server endpoint for browsing files
      },
      isAjax: true,
    },
    theme: "dark",
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => {
        if (editor.current) {
          onChange(newContent);
        }
      }} // Handle the updated content
    />
  );
};
