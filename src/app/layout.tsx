import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>MovieApp</title>
      </head>
      <body>
        <Header />
        <Tabs />
        {children}
      </body>
    </html>
  );
}
