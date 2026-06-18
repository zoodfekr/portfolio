import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import Devinfo from "./components/Devinfo";
import Skills from "./components/Skills";
import { BsInfoCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { slider_image } from "../constants/appdata";
import PageHeader from "../common/PageHeader";

const Aboutpage = () => {
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
                <title> درباره من | رامین زودفکر </title>
            </Helmet>

            {/* subtle grid overlay (matches homepage) */}
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
                    icon={<BsInfoCircleFill />}
                    subtitle="معرفی کوتاه"
                    title="درباره من"
                />

                {/* ---------- Bio ---------- */}
                <Card
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 4,
                        mb: 6,
                        animation: "fadeUp .6s ease .1s both",
                    }}
                >
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 2.2 }}>
                        من رامین زودفکر هستم، یک توسعه‌دهنده فرانت‌اند با علاقه‌مندی
                        به ساخت رابط‌های کاربری مدرن، سریع و کاربرپسند. تجربه‌ام شامل
                        کار با React، TypeScript و ابزارهای مدرن طراحی است و همیشه
                        دنبال یادگیری چیزهای جدید و بهبود کیفیت محصولم هستم.
                    </Typography>

                    <Grid container spacing={1.5}>
                        <Grid xs={12} sm={6}>
                            <Devinfo label="نام" value="رامین" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Devinfo label="نام خانوادگی" value="زودفکر" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Devinfo label="ایمیل" value="Zoodfekr.r@gmail.com" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Devinfo label="تحصیلات" value="کارشناسی مخابرات" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Devinfo label="شهر" value="تهران" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Devinfo label="تخصص" value="فرانت‌اند" />
                        </Grid>
                    </Grid>
                </Card>

                {/* ---------- Skills ---------- */}
                <Box sx={{ mb: 6, animation: "fadeUp .6s ease .15s both" }}>
                    <Skills />
                </Box>

                {/* ---------- Certificates ---------- */}
                <Box sx={{ mb: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: "1.2rem", md: "1.5rem" },
                                className: "gradient-text",
                            }}
                        >
                            دوره‌های طی‌شده
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

                    <Grid container spacing={2}>
                        {slider_image.map((value, index) => (
                            <Grid key={index} xs={12} sm={6} md={4}>
                                <Card
                                    className="scale"
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        opacity: checked ? 1 : 0,
                                        transform: checked
                                            ? "none"
                                            : "translateY(24px)",
                                        transition: `all .5s ease ${index * 120}ms`,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={value.img}
                                        sx={{
                                            width: "100%",
                                            maxHeight: 200,
                                            objectFit: "contain",
                                            borderRadius: 2,
                                        }}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Aboutpage;
