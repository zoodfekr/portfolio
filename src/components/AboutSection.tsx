"use client";

import { Card, CardBody } from "@heroui/react";
import { BsInfoCircleFill, BsCheckCircleFill, BsPersonFill, BsEnvelopeFill, BsBookFill, BsGeoAltFill, BsCodeSlash } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi2";
import Image from "next/image";
import PagesHeader from "@/common/PagesHeader";

const devInfo = [
  { label: "نام", value: "رامین", icon: BsPersonFill },
  { label: "نام خانوادگی", value: "زودفکر", icon: BsPersonFill },
  { label: "ایمیل", value: "Zoodfekr.r@gmail.com", icon: BsEnvelopeFill },
  { label: "تحصیلات", value: "کارشناسی مخابرات", icon: BsBookFill },
  { label: "شهر", value: "تهران", icon: BsGeoAltFill },
  { label: "تخصص", value: "فرانت‌اند", icon: BsCodeSlash },
];

const experiences = [
  "بیش از ۳ سال تجربه در توسعه وب‌سایت‌ها و Web Applicationها با استفاده از React.js، Next.js و TypeScript",
  "تجربه توسعه پروژه‌ها با استفاده از App Router و قابلیت‌های مدرن Next.js",
  "تجربه پیاده‌سازی روش‌های مختلف رندرینگ شامل CSR، SSG و ISR با توجه به نیازهای عملکردی و SEO پروژه",
  "تجربه مدیریت وضعیت برنامه با Redux Toolkit و RTK Query و پیاده‌سازی کشینگ هوشمند داده‌ها",
  "تجربه طراحی و توسعه رابط کاربری با استفاده از MUI (Material UI)، HeroUI و ApexCharts",
  "تجربه کار با RESTful API و JWT برای تبادل امن اطلاعات بین Front-End و Back-End",
  "تجربه پیاده‌سازی سیستم‌های Authentication و Authorization شامل مدیریت توکن‌ها با HttpOnly Cookie و محافظت از مسیرها (Route Protection)",
  "تجربه پیاده‌سازی ارتباطات Real-Time با استفاده از WebSocket",
  "تجربه اعتبارسنجی فرم‌ها با استفاده از Yup",
  "آشنایی با Git و مفاهیم کنترل نسخه",
  "تسلط بر اصول Responsive Design و پیاده‌سازی رابط‌های کاربری سازگار با انواع دستگاه‌ها",
  "آشنایی با ملاحظات SEO در پروژه‌های Next.js",
];

const certificates = [
  { img: "/cert/html.jpg", name: "HTML" },
  { img: "/cert/sass.jpg", name: "SASS" },
  { img: "/cert/bootstrap.jpg", name: "Bootstrap" },
  { img: "/cert/js.jpg", name: "JavaScript" },
  { img: "/cert/es.jpg", name: "ECMAScript" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full px-4 sm:px-6 md:px-8 pt-16 md:pt-20 pb-12 md:pb-16"
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


        <PagesHeader title="درباره من " />

        <Card
          className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-[14px] shadow-[0_18px_40px_rgba(3,6,20,0.45)] p-4 md:p-6 rounded-2xl mb-8"
          style={{ animation: "fadeUp .6s ease .1s both" }}
          shadow="none"
        >
          <CardBody className="gap-4">
            <p className="text-[#E8ECF4] leading-[2.2] text-base">
              من رامین زودفکر هستم، یک توسعه‌دهنده فرانت‌اند با علاقه‌مندی به
              ساخت رابط‌های کاربری مدرن، سریع و کاربرپسند. تجربه‌ام شامل کار با
              React، TypeScript و ابزارهای مدرن طراحی است و همیشه دنبال یادگیری
              چیزهای جدید و بهبود کیفیت محصولم هستم.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {devInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[rgba(124,92,255,0.05)] border border-white/[0.08] text-right"
                >
                  <info.icon className="text-[#7C5CFF] text-lg flex-shrink-0" />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-sm text-[#94A0B8] w-24">{info.label}</span>
                    <span className="text-[15px] font-semibold text-[#E8ECF4] w-full">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <div className="mb-8">

          <PagesHeader title="تجربیات حرفه ای" />

          <Card
            className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-[14px] shadow-[0_18px_40px_rgba(3,6,20,0.45)] p-4 md:p-6 rounded-2xl"
            style={{ animation: "fadeUp .6s ease .15s both" }}
            shadow="none"
          >
            <CardBody className="gap-3">
              <ul className="grid grid-cols-1 gap-3">
                {experiences.map((exp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-3 px-4 rounded-xl bg-[rgba(124,92,255,0.05)] border border-white/[0.08] transition-all duration-300 hover:border-[rgba(124,92,255,0.3)] hover:bg-[rgba(124,92,255,0.08)]"
                  >
                    <BsCheckCircleFill className="text-[#7C5CFF] text-lg mt-0.5 flex-shrink-0" />
                    <span className="text-[#E8ECF4] text-sm leading-[2]">{exp}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>

        <div className="mb-8">


        <PagesHeader title=" دوره های طی شده " />


          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {certificates.map((cert, i) => (
              <Card
                key={i}
                className="scale bg-white/[0.03] border border-white/[0.08] backdrop-blur-[14px] shadow-[0_18px_40px_rgba(3,6,20,0.45)] p-3 rounded-xl overflow-hidden"
                shadow="none"
              >
                <CardBody className="p-0">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    width={200}
                    height={200}
                    className="w-full h-auto max-h-[200px] object-contain rounded-lg"
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
