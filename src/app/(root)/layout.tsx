import Footer from "@/components/custom/Footer";
import ScrollToTop from "@/components/custom/ScrollToTop";
import ThemeComponent from "@/components/custom/Theme";
import Background3D from "@/components/ui/3d-background";

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
        <Background3D />
        {children}
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
