import Footer from "@/components/custom/Footer";
import ScrollToTop from "@/components/custom/ScrollToTop";
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
        <ScrollToTop />
      </main>
    </>
  );
}
