import { Avatar, Box, Typography } from "@mui/material";
import raminImg from "../../assets/ramin2.jpg";
import { GRADIENT } from "../../container/theme";

const SidebarHeader = () => {
    return (
        <Box sx={{ textAlign: "center" }}>
            <Box
                sx={{
                    position: "relative",
                    width: 132,
                    height: 132,
                    margin: "0 auto",
                    borderRadius: "50%",
                    p: "3px",
                    background: GRADIENT,
                    boxShadow: "0 14px 34px rgba(124,92,255,0.4)",
                }}
            >
                <Avatar
                    src={raminImg}
                    sx={{
                        width: "100%",
                        height: "100%",
                        border: "3px solid rgba(11,16,32,0.9)",
                        borderRadius: "50%",
                    }}
                />
            </Box>

            <Typography
                variant="h5"
                sx={{
                    mt: 2,
                    lineHeight: 1.4,
                    fontWeight: 800,
                    fontSize: "1.35rem",
                }}
                className="gradient-text"
            >
                رامین زودفکر
            </Typography>
            <Typography
                color="text.secondary"
                sx={{ fontSize: 13, mt: 0.5 }}
            >
                توسعه‌دهنده فرانت‌اند
            </Typography>

            {/* status pill — matches homepage */}
            <Box
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    mt: 1.5,
                    px: 1.5,
                    py: 0.4,
                    borderRadius: 50,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "rgba(52,211,153,0.08)",
                }}
            >
                <Box
                    sx={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#34D399",
                        boxShadow: "0 0 0 3px rgba(52,211,153,0.25)",
                    }}
                />
                <Typography variant="caption" color="text.secondary">
                    آماده برای همکاری
                </Typography>
            </Box>
        </Box>
    );
};
export default SidebarHeader;
