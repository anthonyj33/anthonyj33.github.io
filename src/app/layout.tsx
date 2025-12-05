import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "./component/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Anthony Jenanian",
  description: "My personal website",
  icons: "/favicon.ico",
  other: {
    "darkreader-lock": "true",
  },
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
