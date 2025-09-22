import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";

// Primary font (Headings)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Secondary font (Body, buttons, inputs)
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Optional tertiary (emphasis text / accents)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ApplyList",
  description: "Track and manage your job applications easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
