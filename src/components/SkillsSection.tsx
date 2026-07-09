"use client";

import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiSwagger,
  SiRedux,
  SiJsonwebtokens,
  SiJest,
} from "react-icons/si";
import {
  MdSyncAlt,
  MdOutlineBarChart,
  MdTableChart,
  MdOutlineChecklist,
  MdOutlineWidgets,
  MdOutlineApi,
  MdAutoAwesome,
  MdCode,
  MdArchitecture,
  MdSync,
  MdSecurity,
  MdShield,
  MdLockOutline,
  MdDevices,
  MdTravelExplore,
  MdCookie,
} from "react-icons/md";
import { TbForms, TbPlugConnected } from "react-icons/tb";

const CORE_SKILLS = [
  { name: "React.js", color: "#61DAFB", image: "/icons/react-original.svg" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#C8CDD9" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E", image: "/icons/javascript-original.svg" },
  { name: "HTML5", color: "#E44D26", image: "/icons/html5-original.svg" },
  { name: "CSS3", color: "#1572B6", image: "/icons/css3-original.svg" },
];

const UI_LIBS = [
  { name: "Material UI", color: "#007FFF", image: "/icons/mui.svg" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "HeroUI", icon: <MdOutlineWidgets />, color: "#FF6B6B" },
  { name: "Formik", icon: <TbForms />, color: "#61DAFB" },
  { name: "Yup", icon: <MdOutlineChecklist />, color: "#34D399" },
  { name: "ApexCharts", icon: <MdOutlineBarChart />, color: "#F59E0B" },
  { name: "Tabulator", icon: <MdTableChart />, color: "#A78BFA" },
];

const STATE_COMM = [
  { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
  { name: "RTK Query", icon: <MdSync />, color: "#764ABC" },
  { name: "REST API", icon: <MdOutlineApi />, color: "#F472B6" },
  { name: "WebSocket", icon: <TbPlugConnected />, color: "#22D3EE" },
  { name: "SSE", icon: <MdSyncAlt />, color: "#60A5FA" },
];

const ARCH_TOOLS = [
  { name: "Authentication", icon: <MdSecurity />, color: "#FF6B6B" },
  { name: "Authorization", icon: <MdShield />, color: "#A78BFA" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#D63AFF" },
  { name: "HttpOnly Cookie", icon: <MdCookie />, color: "#F0A03A" },
  { name: "Route Protection", icon: <MdLockOutline />, color: "#A78BFA" },
  { name: "CSR / SSG / ISR", icon: <MdSync />, color: "#22D3EE" },
  { name: "Responsive Design", icon: <MdDevices />, color: "#61DAFB" },
  { name: "SEO", icon: <MdTravelExplore />, color: "#34D399" },
  { name: "Testing (Jest)", icon: <SiJest />, color: "#99425B" },
  { name: "Git", color: "#F05032", image: "/icons/git-original.svg" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Swagger", icon: <SiSwagger />, color: "#85EA2D" },
  { name: "AI Tools", icon: <MdAutoAwesome />, color: "#7C5CFF" },
];

const SECTIONS = [
  { title: "تکنولوژی‌های اصلی", icon: <MdCode />, items: CORE_SKILLS },
  { title: "کتابخانه‌های رابط کاربری", icon: <MdOutlineWidgets />, items: UI_LIBS },
  { title: "مدیریت وضعیت و ارتباطات", icon: <MdSync />, items: STATE_COMM },
  { title: "معماری و ابزارها", icon: <MdArchitecture />, items: ARCH_TOOLS },
];

interface SkillItem {
  name: string;
  color: string;
  image?: string;
  icon?: React.ReactNode;
}

function SkillTile({ item }: { item: SkillItem }) {
  return (
    <Card
      className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:-translate-y-1.5 hover:border-[var(--skill-color)] hover:shadow-[0_16px_34px_var(--skill-shadow)] transition-all duration-300 cursor-default rounded-xl overflow-hidden"
      shadow="none"
      style={{
        "--skill-color": `${item.color}66`,
        "--skill-shadow": `${item.color}22`,
      } as React.CSSProperties}
    >
      <CardBody className="flex flex-row items-center gap-2 py-3 px-3">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full text-base border transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${item.color}22, ${item.color}0d)`,
            border: `1px solid ${item.color}33`,
            color: item.color,
          }}
        >
          {item.image ? (
            <Image src={item.image} alt={item.name} width={16} height={16} className="w-4 h-4" />
          ) : (
            <span className="text-base">{item.icon}</span>
          )}
        </div>
        <span className="text-xs font-semibold text-[#E8ECF4] text-right leading-tight">
          {item.name}
        </span>
      </CardBody>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full px-4 sm:px-6 md:px-8 py-16 md:py-20"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-6">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[15px] bg-gradient-to-br from-[#7C5CFF] to-[#22D3EE] shadow-[0_8px_20px_rgba(124,92,255,0.30)] flex-shrink-0">
                  {section.icon}
                </div>
                <h3 className="font-extrabold text-sm md:text-[15px] text-[#E8ECF4]">
                  {section.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(124,92,255,0.35)] rounded" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                {section.items.map((item) => (
                  <SkillTile key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
