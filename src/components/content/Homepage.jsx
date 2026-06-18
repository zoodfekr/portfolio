import { Box, Button, Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import Appcontext from "../../context/Context";
import { FaReact } from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiOpenai,
    SiRedux,
} from "react-icons/si";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { GRADIENT } from "../../container/theme";

const skills = [
    { icon: <FaReact />, label: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs />, label: "Next.js", color: "#FFFFFF" },
    { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8" },
    { icon: <SiRedux />, label: "Redux", color: "#764ABC" },
    { icon: <SiOpenai />, label: "AI Tools", color: "#10A37F" },
];

const stats = [
    { value: "+3", label: "سال تجربه" },
    { value: "+10", label: "پروژه موفق" },
];

const socials = [
    { icon: <BsGithub />, href: "https://github.com/" },
    { icon: <BsLinkedin />, href: "https://linkedin.com/" },
    { icon: <BsTelegram />, href: "https://telegram.org/" },
];

const Homepage = () => {
    const { setpagenumber } = useContext(Appcontext);

    return (
        <Box
            className="mesh-bg"
            sx={{
                minHeight: { xs: "100dvh", md: "100vh" },
                width: "100%",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                px: { xs: 2, sm: 3, md: 8 },
                pt: { xs: "calc(5rem + env(safe-area-inset-top))", md: 6 },
                pb: { xs: 5, md: 6 },
            }}
        >
            <Helmet>
                <title> صفحه اصلی | رامین زودفکر </title>
            </Helmet>

            {/* subtle grid overlay */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.4,
                    backgroundImage:
                        "linear-gradient(rgba(124,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />

            <Grid
                container
                spacing={1}
                alignItems="center"
                sx={{ position: "relative", zIndex: 1, maxWidth: 1200, mx: "auto" }}
            >
                {/* ---------- Right text column ---------- */}
                <Grid item xs={12} md={7} lg={7}>
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: { xs: 1.5, md: 2 },
                            py: 0.8,
                            mb: { xs: 2, md: 3 },
                            borderRadius: 50,
                            border: "1px solid",
                            borderColor: "divider",
                            backgroundColor: "rgba(124,92,255,0.08)",
                            animation: "fadeUp .6s ease both",
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#34D399",
                                boxShadow: "0 0 0 4px rgba(52,211,153,0.25)",
                            }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            آماده برای همکاری
                        </Typography>
                    </Box>

                    <Typography
                        variant="h3"
                        sx={{
                            color:"#6D788D",
                            fontWeight: 800,
                            lineHeight: 1.2,
                            mb: 1,
                            fontSize: { xs: "1.7rem", sm: "2.1rem", md: undefined },
                            animation: "fadeUp .6s ease .05s both",
                        }}
                    >
                        سلام، من{" "}
                        <Box component="span" className="gradient-text">
                            رامین زودفکر
                        </Box>{" "}
                        هستم
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: "1.35rem", sm: "1.6rem", md: undefined },
                            animation: "fadeUp .6s ease .1s both",
                            background:
                                "linear-gradient(135deg, #A78BFA 0%, #7CA9FF 50%, #67E8F9 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter:
                                "drop-shadow(0 2px 12px rgba(124,92,255,0.35))",
                            display: "inline-block",
                        }}
                    >
                        توسعه‌دهنده فرانت‌اند
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            fontWeight: 400,
                            maxWidth: 620,
                            lineHeight: 2,
                            mb: 4,
                            animation: "fadeUp .6s ease .15s both",
                        }}
                    >
                        متخصص در طراحی و پیاده‌سازی رابط‌های کاربری مدرن،
                        واکنش‌گرا و کاربرمحور با تمرکز بر کیفیت، عملکرد و تجربه
                        کاربری.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: { xs: "stretch", sm: "center" },
                            gap: { xs: 1.5, sm: 2 },
                            flexWrap: "wrap",
                            mb: { xs: 4, md: 5 },
                            animation: "fadeUp .6s ease .2s both",
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => setpagenumber(2)}
                            sx={{ px: 4, py: 1.4, fontSize: 16 }}
                        >
                            مشاهده نمونه‌کارها
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => setpagenumber(3)}
                            sx={{
                                px: 4,
                                py: 1.4,
                                fontSize: 16,
                                borderColor: "divider",
                                color: "text.primary",
                                "&:hover": {
                                    borderColor: "primary.main",
                                    background: "rgba(124,92,255,0.08)",
                                },
                            }}
                        >
                            ارتباط با من
                        </Button>

                        {/* socials */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: { xs: "center", sm: "flex-start" },
                                gap: 1,
                                px: 1.5,
                            }}
                        >
                            {socials.map((s, i) => (
                                <Box
                                    key={i}
                                    component="a"
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        color: "text.secondary",
                                        border: "1px solid",
                                        borderColor: "divider",
                                        fontSize: 20,
                                        transition: "all .25s ease",
                                        "&:hover": {
                                            color: "#fff",
                                            borderColor: "transparent",
                                            background: GRADIENT,
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    {s.icon}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* stats */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: { xs: 2, sm: 4 },
                            flexWrap: "wrap",
                            mb: 5,
                            animation: "fadeUp .6s ease .25s both",
                        }}
                    >
                        {stats.map((s, i) => (
                            <Box key={i} sx={{ minWidth: 90 }}>
                                <Typography
                                    variant="h4"
                                    className="gradient-text"
                                    sx={{ fontWeight: 800, lineHeight: 1 }}
                                >
                                    {s.value}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mt: 0.5 }}
                                >
                                    {s.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* skill chips */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1.5,
                            flexWrap: "wrap",
                            animation: "fadeUp .6s ease .3s both",
                        }}
                    >
                        {skills.map((t, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 1.6,
                                    py: 1,
                                    borderRadius: 3,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    backgroundColor: "rgba(255,255,255,0.02)",
                                    backdropFilter: "blur(8px)",
                                    transition: "all .25s ease",
                                    "&:hover": {
                                        transform: "translateY(-3px)",
                                        borderColor: "primary.main",
                                        boxShadow:
                                            "0 10px 24px rgba(124,92,255,0.18)",
                                    },
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{ fontSize: 20, color: t.color }}
                                >
                                    {t.icon}
                                </Box>
                                <Typography variant="body2" fontWeight={600}>
                                    {t.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>

                {/* ---------- Left visual column ---------- */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    lg={5}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        animation: "fadeIn .8s ease .2s both",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: 340,
                            height: 340,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* rotating ring */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                border: "1px dashed",
                                borderColor: "divider",
                                animation: "spinSlow 22s linear infinite",
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 28,
                                borderRadius: "50%",
                                border: "1px solid",
                                borderColor: "divider",
                                animation: "spinSlow 30s linear infinite reverse",
                            }}
                        />

                        {/* glowing core */}
                        <Box
                            sx={{
                                position: "relative",
                                width: 180,
                                height: 180,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: GRADIENT,
                                boxShadow:
                                    "0 0 60px rgba(124,92,255,0.45), inset 0 0 30px rgba(255,255,255,0.15)",
                                animation: "pulse 4s ease-in-out infinite",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 40,
                                    fontWeight: 800,
                                    color: "#fff",
                                    textShadow: "0 6px 20px rgba(0,0,0,0.3)",
                                }}
                            >
                                {`<dev/>`}
                            </Typography>
                        </Box>

                        {/* floating tech icons */}
                        {skills.map((t, i) => {
                            const angle =
                                (i / skills.length) * Math.PI * 2 - Math.PI / 2;
                            const r = 150;
                            const x = Math.cos(angle) * r;
                            const y = Math.sin(angle) * r;
                            return (
                                <Box
                                    key={i}
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        ml: "-26px",
                                        mt: "-26px",
                                        transform: `translate(${x}px, ${y}px)`,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 52,
                                            height: 52,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "14px",
                                            fontSize: 26,
                                            color: t.color,
                                            backgroundColor:
                                                "rgba(255,255,255,0.04)",
                                            border: "1px solid",
                                            borderColor: "divider",
                                            backdropFilter: "blur(10px)",
                                            boxShadow:
                                                "0 12px 30px rgba(3,6,20,0.4)",
                                            animation: `float 6s ease-in-out ${i * 0.6}s infinite`,
                                        }}
                                    >
                                        {t.icon}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Homepage;
