import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./clientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foxcolab — Private. Fast. Secure Chat for Everyone.",
  description: "Experience truly private communication with Foxcolab. Enjoy encrypted chats, HD audio and video calls, media sharing, and group conversations — all in one secure mobile app that puts privacy first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClientLayout>{children}</ClientLayout>
  );
}
