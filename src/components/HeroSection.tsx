"use client";

import { Button } from "@heroui/react";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiJest,
} from "react-icons/si";
import { MdAutoAwesome } from "react-icons/md";

const skills = [
  { icon: <FaReact />, label: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#FFFFFF" },
  { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8" },
  { icon: <SiRedux />, label: "Redux", color: "#764ABC" },
  { icon: <MdAutoAwesome />, label: "AI Tools", color: "#10A37F" },
  { icon: <SiJest />, label: "Jest", color: "#C21325" },
];

const stats = [
  { value: "+3", label: "سال تجربه" },
  { value: "+10", label: "پروژه موفق" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/zoodfekr" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ramin-zoodfekr-08b16b233/" },
  { icon: <FaTelegram />, href: "https://t.me/" },
];

const handleScroll = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center px-4 sm:px-6 md:px-8 pt-24 md:pt-10  pb-10 md:pb-12"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-40"
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

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-7 lg:col-span-7">
          <div
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 mb-4 md:mb-6 rounded-full border border-white/[0.08] bg-[rgba(124,92,255,0.08)]"
            style={{ animation: "fadeUp .6s ease both" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.25)]" />
            <span className="text-sm text-[#94A0B8]">آماده برای همکاری</span>
          </div>

          <h3
            className="text-[#6D788D] font-extrabold leading-tight mb-2 text-[1.7rem] sm:text-[2.1rem] md:text-[2.5rem]"
            style={{ animation: "fadeUp .6s ease .05s both" }}
          >
            سلام، من{" "}
            <span className="gradient-text">رامین زودفکر</span> هستم
          </h3>

          <h4
            className="font-bold mb-4 text-[1.35rem] sm:text-[1.6rem] md:text-[1.8rem]"
            style={{
              animation: "fadeUp .6s ease .1s both",
              background: "linear-gradient(135deg, #A78BFA 0%, #7CA9FF 50%, #67E8F9 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 12px rgba(124,92,255,0.35))",
              display: "inline-block",
            }}
          >
            توسعه‌دهنده فرانت‌اند
          </h4>

          <p
            className="text-[#94A0B8] font-normal max-w-[620px] leading-[2] mb-6 md:mb-8 text-base sm:text-lg"
            style={{ animation: "fadeUp .6s ease .15s both" }}
          >
            متخصص در طراحی و پیاده‌سازی رابط‌های کاربری مدرن، واکنش‌گرا و
            کاربرمحور با تمرکز بر کیفیت، عملکرد و تجربه کاربری.
          </p>

          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-wrap mb-6 md:mb-8"
            style={{ animation: "fadeUp .6s ease .2s both" }}
          >
            <Button
              color="primary"
              size="lg"
              className="bg-gradient-to-r from-[#7C5CFF] via-[#5B8CFF] to-[#22D3EE] shadow-[0_10px_24px_rgba(124,92,255,0.35)] text-white font-semibold px-8 py-6 text-base"
              onPress={() => handleScroll("#works")}
            >
              مشاهده نمونه‌کارها
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="border-white/[0.08] text-[#E8ECF4] hover:border-[#7C5CFF] hover:bg-[rgba(124,92,255,0.08)] font-semibold px-8 py-6 text-base"
              onPress={() => handleScroll("#contact")}
            >
              ارتباط با من
            </Button>

            <div className="flex items-center justify-center sm:justify-start gap-2 px-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full text-[#94A0B8] border border-white/[0.08] text-xl transition-all duration-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#7C5CFF] hover:to-[#22D3EE] hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div
            className="flex gap-4 sm:gap-8 flex-wrap mb-8"
            style={{ animation: "fadeUp .6s ease .25s both" }}
          >
            {stats.map((s, i) => (
              <div key={i} className="min-w-[90px]">
                <div className="gradient-text text-3xl md:text-4xl font-extrabold leading-none">
                  {s.value}
                </div>
                <div className="text-sm text-[#94A0B8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div
            className="flex gap-3 flex-wrap"
            style={{ animation: "fadeUp .6s ease .3s both" }}
          >
            {skills.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFF] hover:shadow-[0_10px_24px_rgba(124,92,255,0.18)]"
              >
                <span className="text-xl" style={{ color: t.color }}>
                  {t.icon}
                </span>
                <span className="text-sm font-semibold text-[#E8ECF4]">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hidden md:flex md:col-span-5 lg:col-span-5 justify-center"
          style={{ animation: "fadeIn .8s ease .2s both" }}
        >
          <div className="relative w-[340px] h-[340px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.08]" style={{ animation: "spinSlow 22s linear infinite" }} />
            <div className="absolute inset-7 rounded-full border border-white/[0.08]" style={{ animation: "spinSlow 30s linear infinite reverse" }} />

            <div
              className="relative w-[180px] h-[180px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#7C5CFF] via-[#5B8CFF] to-[#22D3EE] shadow-[0_0_60px_rgba(124,92,255,0.45),inset_0_0_30px_rgba(255,255,255,0.15)]"
              style={{ animation: "pulse 4s ease-in-out infinite" }}
            >
              <img
                src="/images/ramin2.jpg"
                alt="رامین زودفکر"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {skills.map((t, i) => {
              const angle = (i / skills.length) * Math.PI * 2 - Math.PI / 2;
              const r = 150;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    marginLeft: "-26px",
                    marginTop: "-26px",
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div
                    className="w-[52px] h-[52px] flex items-center justify-center rounded-[14px] text-[26px] border border-white/[0.08] bg-white/[0.04] backdrop-blur-[10px] shadow-[0_12px_30px_rgba(3,6,20,0.4)]"
                    style={{
                      color: t.color,
                      animation: `float 6s ease-in-out ${i * 0.6}s infinite`,
                    }}
                  >
                    {t.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
