"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/collections", label: "Collections" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/atelier", label: "Atelier" },
    { href: "/archive", label: "Archive" },
  ];

  return (
    <div className="flex items-center justify-center">
      <ul className="flex items-center gap-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative text-sm font-medium tracking-widest uppercase transition-colors
                  ${
                    isActive
                      ? "text-black after:w-full"
                      : "text-gray-500 hover:text-black"
                  }

                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:w-0 after:bg-(--primary-color)
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
