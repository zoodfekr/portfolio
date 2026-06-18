import { Box, Typography } from "@mui/material";

const PageHeader = ({ icon, title, subtitle }) => {
    return (
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
            <Box
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 0.8,
                    mb: 2,
                    borderRadius: 50,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "rgba(124,92,255,0.08)",
                    animation: "fadeUp .6s ease both",
                }}
            >
                <Box
                    sx={{
                        width: 26,
                        height: 26,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 15,
                        borderRadius: "50%",
                        background:
                            "linear-gradient(135deg, #7C5CFF, #22D3EE)",
                        boxShadow: "0 6px 16px rgba(124,92,255,0.35)",
                    }}
                >
                    {icon}
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            </Box>

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 800,
                    lineHeight: 1.2,
                    fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.4rem" },
                    animation: "fadeUp .6s ease .05s both",
                    background:
                        "linear-gradient(135deg, #A78BFA 0%, #7CA9FF 50%, #67E8F9 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 12px rgba(124,92,255,0.35))",
                    display: "inline-block",
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default PageHeader;
