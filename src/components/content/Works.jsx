import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { GRADIENT } from "../../container/theme";
import PageHeader from "../common/PageHeader";
import {
    MdDevices,
    MdOutlineDashboard,
    MdOutlineApi,
    MdPhoneIphone,
    MdSearch,
    MdLockOutline,
    MdAutoAwesome,
} from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

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

const Works = (props) => {
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
                    icon={<BsPersonWorkspace />}
                    subtitle="چه می‌سازم"
                    title="نمونه‌کارها"
                />

                <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ maxWidth: 620, mx: "auto", mb: 5, lineHeight: 2 }}
                >
                    بیشتر پروژه‌هایی که روی آن‌ها کار کرده‌ام مربوط به شرکت‌ها هستند
                    و به‌دلیل محرمانگی قابل نمایش عمومی نیستند. در ادامه حوزه‌هایی
                    را که در آن‌ها تجربه و تخصص دارم را می‌بینید.
                </Typography>

                <Grid container spacing={2.5}>
                    {capabilities.map((c, index) => (
                        <Grid key={index} xs={12} sm={6} md={4}>
                            <Card
                                className="scale"
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1.5,
                                    opacity: checked ? 1 : 0,
                                    transform: checked
                                        ? "none"
                                        : "translateY(24px)",
                                    transition: `all .5s ease ${index * 90}ms`,
                                    "&:hover": {
                                        borderColor: `${c.color}66`,
                                    },
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
                                        color: c.color,
                                        backgroundColor: `${c.color}1a`,
                                        border: `1px solid ${c.color}33`,
                                        boxShadow: `0 10px 24px ${c.color}1f`,
                                    }}
                                >
                                    {c.icon}
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mt: 0.5 }}
                                >
                                    {c.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.9 }}
                                >
                                    {c.text}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
export default Works;
