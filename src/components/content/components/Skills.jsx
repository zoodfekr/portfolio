import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiPostman,
    SiSwagger,
    SiRedux,
    SiJsonwebtokens,
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

import html from "../../../assets/icons/html5-original.svg";
import css from "../../../assets/icons/css3-original.svg";
import js from "../../../assets/icons/javascript-original.svg";
import react from "../../../assets/icons/react-original.svg";
import gitimg from "../../../assets/icons/git-original.svg";
import mui from "../../../assets/icons/mui.svg";

const CORE_SKILLS = [
    { name: "React.js", color: "#61DAFB", image: react },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#C8CDD9" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", color: "#F7DF1E", image: js },
    { name: "HTML5", color: "#E44D26", image: html },
    { name: "CSS3", color: "#1572B6", image: css },
    // { name: "App Router", icon: <MdAccountTree />, color: "#7C5CFF" },
];

const UI_LIBS = [
    { name: "Material UI", color: "#007FFF", image: mui },
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
    { name: "Git", color: "#F05032", image: gitimg },
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

function SkillTile({ item, animate, index }) {
    const Icon = ({ item }) =>
        item.image ? (
            <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                    width: 16,
                    height: 16,
                    transition: "transform .3s ease",
                }}
            />
        ) : (
            <Box
                sx={{
                    display: "flex",
                    fontSize: 16,
                    color: item.color,
                    transition: "color .3s ease, transform .3s ease",
                }}
            >
                {item.icon}
            </Box>
        );

    return (
            <Paper
            elevation={0}
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0.75,
                py: 1.25,
                px: 1.25,
                borderRadius: 2.5,
                height: "100%",
                overflow: "hidden",
                cursor: "default",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `transform .35s cubic-bezier(.22,.61,.36,1) ${index * 55}ms, box-shadow .35s ease, border-color .35s ease`,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    background: `radial-gradient(120px 80px at 50% 0%, ${item.color}33, transparent 70%)`,
                    transition: "opacity .35s ease",
                },
                "&:hover": {
                    transform: animate ? "translateY(-6px)" : "translateY(20px)",
                    borderColor: `${item.color}66`,
                    boxShadow: `0 16px 34px ${item.color}22`,
                    "&::before": { opacity: 1 },
                    "& .skill-icon": { transform: "scale(1.12)" },
                    "& .skill-icon-img": { transform: "scale(1.12)" },
                },
            }}
        >
            <Box
                className={item.image ? "skill-icon-img" : "skill-icon"}
                sx={{
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}0d)`,
                    border: `1px solid ${item.color}33`,
                    transition: "transform .3s ease",
                    zIndex: 1,
                }}
            >
                <Icon item={item} />
            </Box>

            <Typography
                sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: "right",
                    color: "text.primary",
                    lineHeight: 1.4,
                    zIndex: 1,
                }}
            >
                {item.name}
            </Typography>
        </Paper>
    );
}

function SectionPanel({ section, animate }) {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5,
                    flexDirection: "row",
                }}
            >
                <Box
                    sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 15,
                        background: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
                        boxShadow: "0 8px 20px rgba(124,92,255,0.30)",
                        flexShrink: 0,
                    }}
                >
                    {section.icon}
                </Box>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: 14, md: 15 },
                        position: "relative",
                    }}
                >
                    {section.title}
                </Typography>
                <Box
                    sx={{
                        flex: 1,
                        height: 1,
                        background:
                            "linear-gradient(90deg, rgba(124,92,255,0.35), transparent)",
                        borderRadius: 1,
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(4, 1fr)",
                        md: "repeat(8, 1fr)",
                    },
                    gap: { xs: 0.75, sm: 1 },
                }}
            >
                {section.items.map((item, index) => (
                    <SkillTile
                        key={item.name}
                        item={item}
                        animate={animate}
                        index={index}
                    />
                ))}
            </Box>
        </Box>
    );
}

const Skills = () => {
    const [animate, setAnimate] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 120);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3, pb: 4 }}>
            {SECTIONS.map((section) => (
                <SectionPanel
                    key={section.title}
                    section={section}
                    animate={animate}
                />
            ))}
        </Box>
    );
};

export default Skills;
