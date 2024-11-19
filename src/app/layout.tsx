"use client";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainNav } from "@/components/navbar";
import { dashboardConfig } from "@/config/dashboard";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <MainNav items={dashboardConfig.mainNav} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
