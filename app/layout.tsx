import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";
import { Raleway } from "next/font/google";
import Footer from "@/components/FooterComponent";


const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // pilih sesuai kebutuhan
});

export const metadata: Metadata = {
  title: "Family Gathering Invitation",
  description: "Created by Coders Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${raleway}`}
      >
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
