import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainNav } from "@/components/navbar";
import { dashboardConfig } from "@/config/dashboard";
export const metadata: Metadata = {
  title: "Clinica digital",
  description: "Administra la informacion de tus pacientes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto ">
        <MainNav items={dashboardConfig.mainNav} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
