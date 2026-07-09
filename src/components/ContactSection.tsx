"use client";

import PagesHeader from "@/common/PagesHeader";
import { Card, CardBody } from "@heroui/react";
import { BsChatDots } from "react-icons/bs";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTelegram,
  FaSkype,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "ایمیل",
    value: "Zoodfekr.r@gmail.com",
    href: "mailto:Zoodfekr.r@gmail.com",
    color: "#7C5CFF",
  },
  {
    icon: <FaTelegram />,
    label: "تلگرام",
    value: "@ramin",
    href: "https://t.me/",
    color: "#22D3EE",
  },
  {
    icon: <FaLinkedinIn />,
    label: "لینکدین",
    value: "ramin-zoodfekr",
    href: "https://www.linkedin.com/in/ramin-zoodfekr-08b16b233/",
    color: "#5B8CFF",
  },
  {
    icon: <FaGithub />,
    label: "گیتهاب",
    value: "zoodfekr",
    href: "https://github.com/zoodfekr",
    color: "#A78BFA",
  },
  {
    icon: <FaSkype />,
    label: "اسکایپ",
    value: "ramin-zoodfekr",
    href: "https://join.skype.com/invite/MdJneJzpoQ6i",
    color: "#34D399",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "موقعیت",
    value: "تهران، ایران",
    href: null,
    color: "#FBBF24",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
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


        <PagesHeader title="ارتباط با من " />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
          <div className="md:col-span-5">
            <Card
              className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-[14px] shadow-[0_18px_40px_rgba(3,6,20,0.45)] p-5 md:p-6 rounded-2xl h-full"
              shadow="none"
              style={{ animation: "fadeUp .6s ease .1s both" }}
            >
              <CardBody className="justify-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl text-white text-[28px] bg-gradient-to-br from-[#7C5CFF] via-[#5B8CFF] to-[#22D3EE] shadow-[0_14px_30px_rgba(124,92,255,0.4)]">
                  <BsChatDots />
                </div>

                <h3 className="text-xl font-extrabold text-[#E8ECF4]">
                  بیایید گفتگو کنیم
                </h3>
                <p className="text-sm text-[#94A0B8] leading-[2]">
                  برای همکاری، پروژه یا هر سوال دیگری از طریق راه‌های ارتباطی
                  زیر با من در تماس باشید. معمولاً در کمتر از ۲۴ ساعت پاسخ
                  می‌دهم.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[rgba(52,211,153,0.08)] self-start">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.25)]" />
                  <span className="text-sm text-[#94A0B8]">آماده برای همکاری</span>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((info, i) => {
                const card = (
                  <Card
                    key={i}
                    className="scale bg-white/[0.03] border border-white/[0.08] backdrop-blur-[14px] shadow-[0_18px_40px_rgba(3,6,20,0.45)] p-3 rounded-xl"
                    shadow="none"
                    style={{ animation: `fadeUp .5s ease ${i * 0.08}s both` }}
                  >
                    <CardBody className="flex flex-row items-center gap-4 p-0">
                      <div
                        className="w-[46px] h-[46px] flex-shrink-0 flex items-center justify-center rounded-xl text-white text-lg"
                        style={{
                          background: `linear-gradient(135deg, ${info.color}, ${info.color}99)`,
                          boxShadow: `0 8px 18px ${info.color}33`,
                        }}
                      >
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[#94A0B8]">{info.label}</p>
                        <p className="font-semibold text-sm text-[#E8ECF4] break-words">
                          {info.value}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                );

                return info.href ? (
                  <a
                    key={i}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={i}>{card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
