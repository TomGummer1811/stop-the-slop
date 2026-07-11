"use client";

import { Poppins, Space_Grotesk } from "next/font/google";
import { IntlProvider } from "@/components/providers/IntlProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <IntlProvider>{children}</IntlProvider>
      </body>
    </html>
  );
}
