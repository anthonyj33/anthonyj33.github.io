import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "./component/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Anthony Jenanian",
  description: "My personal website",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
