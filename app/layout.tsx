import "./globals.scss";

import clsx from "clsx";
import { Overpass } from "next/font/google";

const overpass = Overpass({
  display: "swap",
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-overpass",
  weight: ["400", "700"],
});

export const metadata = {
  description: "Frontend Mentor | Interactive rating component",
  icons: {
    icon: {
      type: "image/png",
      url: "/favicon-32x32.png",
    },
    shortcut: { type: "image/png", url: "/favicon-32x32.png" },
  },
  title: "Frontend Mentor | Interactive rating component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={clsx(overpass.variable)} lang="en">
      <body className={clsx("relative min-h-screen bg-very-dark-blue ")}>
        {children}
      </body>
    </html>
  );
}
