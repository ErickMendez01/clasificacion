"use client";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainNav } from "@/components/navbar";
import { dashboardConfig } from "@/config/dashboard";
import { usePathname } from "next/navigation";
import { SecondNav } from "@/components/secondNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
       
        {(pathname === "/" ||
          pathname === "/login" ||
          pathname === "/register") && (
          <MainNav items={dashboardConfig.mainNav} />
        )}
        {pathname !== "/" &&
          pathname !== "/login" &&
          pathname !== "/register" && <SecondNav />}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
