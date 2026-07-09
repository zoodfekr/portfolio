"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import {
  MdHome,
  MdPerson,
  MdCode,
  MdWork,
  MdContactMail,
} from "react-icons/md";

const navItems = [
  { label: "صفحه اصلی", href: "#hero", icon: <MdHome /> },
  { label: "درباره من", href: "#about", icon: <MdPerson /> },
  { label: "مهارت‌ها", href: "#skills", icon: <MdCode /> },
  { label: "نمونه‌کارها", href: "#works", icon: <MdWork /> },
  { label: "ارتباط با من", href: "#contact", icon: <MdContactMail /> },
];

export default function Navbar() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroUINavbar
      isBordered
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B1020]/80 backdrop-blur-xl border-b border-white/[0.06]"
      maxWidth="xl"
      classNames={{
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarContent className="gap-1" justify="center">
        {navItems.map((item, index) => (
          <NavbarItem key={index}>
            <button
              onClick={() => handleNavClick(item.href)}
              className="text-[#94A0B8] hover:text-[#E8ECF4] transition-colors px-3 py-2 text-sm font-medium flex items-center gap-2"
            >
              <span className="text-base ">{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarBrand>
          {/* <span className="gradient-text font-bold text-lg">{"<dev/>"}</span> */}
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
}
