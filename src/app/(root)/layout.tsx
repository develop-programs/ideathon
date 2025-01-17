import React from "react";

export default function Mainlayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return <main className="h-screen">{children}</main>;
}
