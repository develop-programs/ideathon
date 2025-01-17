import ThemeComponent from "@/components/custom/Theme";

import React from "react";

export default function Mainlayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <main className="h-screen">
      
      <ThemeComponent />
      {children}
    </main>
  );
}
