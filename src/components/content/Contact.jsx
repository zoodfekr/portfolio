import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { GRADIENT } from "../../container/theme";
import PageHeader from "../common/PageHeader";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaTelegram,
    FaSkype,
} from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";

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

const Contact = (props) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setChecked(true), 150);
        return () => {
            clearTimeout(t);
            setChecked(false);
        };
    }, []);

    return (
        <Box
            className="mesh-bg scroll-touch"
            sx={{
                width: "100%",
                minHeight: { xs: "100dvh", md: "auto" },
                height: { md: "100vh" },
                overflowY: { md: "auto" },
                overflowX: "hidden",
                px: { xs: 2.5, sm: 4, md: 6 },
                pt: { xs: "calc(5rem + env(safe-area-inset-top))", md: 5 },
                pb: { xs: 6, md: 5 },
                position: "relative",
            }}
        >
            <Helmet>
                <title>{props.helmet} | رامین زودفکر</title>
            </Helmet>

            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.35,
                    pointerEvents: "none",
                    backgroundImage:
                        "linear-gradient(rgba(124,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />

            <Box sx={{ position: "relative", zIndex: 1, maxWidth: 1100, mx: "auto" }}>
                <PageHeader
                    icon={<BsChatDots />}
                    subtitle="در دسترس برای همکاری"
                    title="ارتباط با من"
                />

                <Grid container spacing={3} alignItems="stretch">
                    {/* ---------- Left: intro / CTA ---------- */}
                    <Grid xs={12} md={5}>
                        <Card
                            sx={{
                                p: { xs: 3, md: 4 },
                                borderRadius: 4,
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                animation: "fadeUp .6s ease .1s both",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 56,
                                    height: 56,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "16px",
                                    fontSize: 28,
                                    color: "#fff",
                                    background: GRADIENT,
                                    boxShadow:
                                        "0 14px 30px rgba(124,92,255,0.4)",
                                    mb: 2.5,
                                }}
                            >
                                <BsChatDots />
                            </Box>

                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 800, mb: 1.5 }}
                            >
                                بیایید گفتگو کنیم
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ lineHeight: 2, mb: 3 }}
                            >
                                برای همکاری، پروژه یا هر سوال دیگری از طریق
                                راه‌های ارتباطی زیر با من در تماس باشید. معمولاً
                                در کمتر از ۲۴ ساعت پاسخ می‌دهم.
                            </Typography>

                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 2,
                                    py: 0.8,
                                    borderRadius: 50,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    backgroundColor: "rgba(52,211,153,0.08)",
                                    alignSelf: "flex-start",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: "#34D399",
                                        boxShadow:
                                            "0 0 0 4px rgba(52,211,153,0.25)",
                                    }}
                                />
                                <Typography variant="body2" color="text.secondary">
                                    آماده برای همکاری
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>

                    {/* ---------- Right: contact cards ---------- */}
                    <Grid xs={12} md={7}>
                        <Grid container spacing={2}>
                            {contactInfo.map((info, i) => {
                                const inner = (
                                    <Card
                                        className={info.href ? "scale" : ""}
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.75,
                                            height: "100%",
                                            opacity: checked ? 1 : 0,
                                            transform: checked
                                                ? "none"
                                                : "translateY(20px)",
                                            transition: `all .5s ease ${i * 80}ms`,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 46,
                                                height: 46,
                                                flexShrink: 0,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "12px",
                                                color: "#fff",
                                                fontSize: 18,
                                                background: `linear-gradient(135deg, ${info.color}, ${info.color}99)`,
                                                boxShadow: `0 8px 18px ${info.color}33`,
                                            }}
                                        >
                                            {info.icon}
                                        </Box>
                                        <Box sx={{ minWidth: 0 }}>
                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {info.label}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    wordBreak: "break-word",
                                                }}
                                            >
                                                {info.value}
                                            </Typography>
                                        </Box>
                                    </Card>
                                );

                                return (
                                    <Grid key={i} xs={12} sm={6}>
                                        {info.href ? (
                                            <Box
                                                component="a"
                                                href={info.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    display: "block",
                                                    height: "100%",
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                }}
                                            >
                                                {inner}
                                            </Box>
                                        ) : (
                                            inner
                                        )}
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Contact;
