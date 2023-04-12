import React from "react";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MovieApp</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
