import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleApiProvider from "./providers/GoogleApiProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Tour Guide",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} flex justify-center items-start`}
      >
        <div
          className="flex flex-col justify-between bg-gray-900 
                        h-screen w-screen 
                        md:h-[652px] md:w-[393px] lg:mx-auto"
        >
          <GoogleApiProvider>
          {children}
          </GoogleApiProvider>
        </div>
      </body>
    </html>
  );
}
