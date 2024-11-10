import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainNav } from "@/components/navbar";
import { DashboardConfig } from "@/types";
import { dashboardConfig } from "@/config/dashboard";
export const metadata: Metadata = {
  title: "To do list",
  description: "Maneja tu dia ahora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainNav items={dashboardConfig.mainNav}/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
