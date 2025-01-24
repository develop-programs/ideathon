"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOut() {
  return (
    <div>
      <Button
        size="sm"
        variant="destructive"
        onClick={() => {
          signOut({ redirect: true, callbackUrl: "/" });
        }}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}
