import { SecondNav } from "@/components/secondNav";
import React from "react";

interface PacientesLayoutProps {
  children?: React.ReactNode;
}

export default function PacientesLayout({ children }: PacientesLayoutProps) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
