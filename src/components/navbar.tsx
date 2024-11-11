"use client";

import Link from "next/link"
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"
import { MainNavItem } from "@/types"
import { usePathname } from "next/navigation"

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items = [], children }: MainNavProps) {
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
        {items.map((item, index) => (
          <NavbarItem
            isActive={pathname === item.href}
            className={`font-medium ${
              pathname === item.href ? "text-blue" : ""
            }`}
            key={index}
          >
            <Link
              href={item.href}
              className={pathname === item.href ? "text-blue" : ""}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
        as={Link}
          className="bg-white font-bold border-black"
          variant="faded"
          radius="lg"
          href="/login"
        >
          Sign in
        </Button>
        <Button
          as={Link}
          className="text-white font-bold bg-black"
          variant="flat"
          radius="lg"
          href="/register"
        >
          Sign Up
        </Button>
      </NavbarContent>
      {children}
    </Navbar>
  );
}
