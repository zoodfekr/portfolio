"use client";

import { FaReact, FaGithub, FaLinkedinIn, FaSkype, FaTelegram } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

const socialLinks = [
  { label: "Github", href: "https://github.com/zoodfekr", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ramin-zoodfekr-08b16b233/", icon: <FaLinkedinIn /> },
  { label: "Skype", href: "https://join.skype.com/invite/MdJneJzpoQ6i", icon: <FaSkype /> },
  { label: "Telegram", href: "https://t.me/", icon: <FaTelegram /> },
];

const navLinks = [
  { label: "خانه", href: "#hero" },
  { label: "درباره من", href: "#about" },
  { label: "نمونه‌کارها", href: "#works" },
  { label: "تماس", href: "#contact" },
];

const handleScroll = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative w-full px-4 sm:px-6 md:px-8 pt-12 pb-8">
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.05) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7C5CFF]/30 to-transparent mb-10" />

        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => handleScroll(link.href)}
                className="text-sm text-[#94A0B8] transition-all duration-300 hover:text-white relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="scale inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#94A0B8] border border-white/[0.08] text-[17px] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#7C5CFF] hover:to-[#22D3EE] hover:shadow-[0_8px_24px_rgba(124,92,255,0.4)] hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5">
              <FaReact className="R-rotate text-[#22D3EE] text-base" />
              <span className="text-sm text-[#94A0B8]">ساخته‌شده با NextJs</span>
            </div>

            <p className="text-xs text-[#94A0B8]/70">
              © {new Date().getFullYear()} رامین زودفکر — تمامی حقوق محفوظ است
            </p>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 w-11 h-11 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-[#94A0B8] transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#7C5CFF] hover:to-[#22D3EE] hover:shadow-[0_8px_24px_rgba(124,92,255,0.4)] hover:-translate-y-1"
          aria-label="بازگشت به بالا"
        >
          <HiOutlineArrowUp className="text-lg" />
        </button>
      </div>
    </footer>
  );
}
