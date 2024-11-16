"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface SecondNavProps {
  children?: React.ReactNode;
}

export function SecondNav({ children }: SecondNavProps) {
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      classNames={{
        item: ["data-[active=true]:text-blue"],
      }}
    >
      <NavbarBrand>
        <Link className="font-semibold flex" href="/">
          Clinica Mental
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href="/pacientes">Pacientes</Link>
        </NavbarItem>
      </NavbarContent>
      {children}
    </Navbar>
  );
}
