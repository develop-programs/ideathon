import Footer from "@/components/custom/Footer";
import ThemeComponent from "@/components/custom/Theme";

import React from "react";

export default function Mainlayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <>
      <main>
        <ThemeComponent />
        {children}
        <Footer />
      </main>
    </>
  );
}
