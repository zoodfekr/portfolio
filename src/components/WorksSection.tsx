"use client";

import PagesHeader from "@/common/PagesHeader";
import { Card, CardBody } from "@heroui/react";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  MdDevices,
  MdOutlineDashboard,
  MdOutlineApi,
  MdPhoneIphone,
  MdSearch,
  MdLockOutline,
  MdAutoAwesome,
} from "react-icons/md";

const capabilities = [
  {
    icon: <MdOutlineDashboard />,
    title: "داشبورد و پنل ادمین",
    text: "طراحی و پیاده‌سازی پنل‌های مدیریتی پیچیده با جدول‌ها، نمودارها و فیلترهای پیشرفته.",
    color: "#7C5CFF",
  },
  {
    icon: <MdDevices />,
    title: "رابط واکنش‌گرا",
    text: "ساخت رابط‌های کاربری که در همه‌ی دستگاه‌ها (موبایل، تبلت، دسکتاپ) بی‌نقص کار می‌کنند.",
    color: "#22D3EE",
  },
  {
    icon: <MdPhoneIphone />,
    title: "PWA و وب‌اپ",
    text: "تبدیل وب‌سایت به اپلیکیشن‌های پیشرونده با قابلیت نصب و کار آفلاین.",
    color: "#34D399",
  },
  {
    icon: <MdOutlineApi />,
    title: "اتصال به API",
    text: "یکپارچه‌سازی با REST، WebSocket و SSE برای جریان داده‌ی لحظه‌ای و پایدار.",
    color: "#F472B6",
  },
  {
    icon: <MdLockOutline />,
    title: "احراز هویت و امنیت",
    text: "پیاده‌سازی احراز هویت، مدیریت دسترسی، JWT و حفاظت از مسیرها.",
    color: "#A78BFA",
  },
  {
    icon: <MdSearch />,
    title: "بهینه‌سازی SEO",
    text: "پیاده‌سازی SSR/SSG/ISR و بهینه‌سازی برای موتورهای جستجو و سرعت بارگذاری.",
    color: "#60A5FA",
  },
  {
    icon: <MdAutoAwesome />,
    title: "تجربه کاربری مدرن",
    text: "انیمیشن‌های روان، میکرواینترکشن‌ها و دیزاین تمیز با تمرکز بر کاربر.",
    color: "#FBBF24",
  },
];

export default function WorksSection() {
  return (
    <section
      id="works"
      className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-35 pointer-events-none"
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

<PagesHeader title="نمونه کارها"  />

        <p className="text-[#94A0B8] text-center max-w-[620px] mx-auto mb-8 md:mb-10 leading-[2] text-base">
          بیشتر پروژه‌هایی که روی آن‌ها کار کرده‌ام مربوط به شرکت‌ها هستند و
          به‌دلیل محرمانگی قابل نمایش عمومی نیستند. در ادامه حوزه‌هایی را که
          در آن‌ها تجربه و تخصص دارم را می‌بینید.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((c, index) => (
            <Card
              key={index}
              className="scale bg-white/[0.03] border border-white/[0.08] backdrop-blur-[14px] shadow-[0_18px_40px_rgba(3,6,20,0.45)] p-5 rounded-2xl h-full transition-all duration-300"
              shadow="none"
              style={{ animation: `fadeUp .6s ease ${index * 0.08}s both` }}
            >
              <CardBody className="gap-3 flex flex-col">
                <div className="flex items-center gap-3">
                  <div
                    className="w-[52px] h-[52px] flex items-center justify-center rounded-[14px] text-[26px]"
                    style={{
                      color: c.color,
                      backgroundColor: `${c.color}1a`,
                      border: `1px solid ${c.color}33`,
                      boxShadow: `0 10px 24px ${c.color}1f`,
                    }}
                  >
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#E8ECF4]">{c.title}</h3>
                </div>
                <p className="text-sm text-[#94A0B8] leading-[1.9]">{c.text}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
