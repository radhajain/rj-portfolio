"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    label: "Experience",
    route: "/experience",
  },
  {
    label: "Writing",
    route: "/writing",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className=" h-50 xs:flex-row sticky top-0 flex w-full flex-col justify-between pb-2 pt-2 text-lg font-semibold backdrop-blur">
      <Link
        href="/"
        className={pathname === "/" ? "text-secondary" : "hover:text-secondary"}
      >
        Radha Jain
      </Link>
      <ul className="flex flex-row gap-5">
        {routes.map(({ label, route }) => (
          <li key={route}>
            <Link
              className={
                pathname.includes(route)
                  ? "text-secondary"
                  : "hover:text-secondary"
              }
              href={route}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
