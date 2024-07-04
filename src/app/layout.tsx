import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alyvazen",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    {
      name: "Certificates",
      url: "/",
    },
    {
      name: "Projects",
      url: "/",
    },
    {
      name: "Contact",
      url: "/",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar items={items} />
        {children}
      </body>
    </html>
  );
}
