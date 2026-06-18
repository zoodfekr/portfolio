import { Box } from "@mui/material";
import Sidebartabs from "./Sidebartabs";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SIdebarFooter";
import { useContext } from "react";
import Appcontext from "../../context/Context";

const SidebarContent = () => {
    const { theme } = useContext(Appcontext);
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            className="mesh-bg"
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                overflow: "hidden",
                px: { xs: 2, sm: 2.5 },
                py: { xs: 2, sm: 3 },
                borderLeft: isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(15,23,42,0.06)",
                background: isDark
                    ? "linear-gradient(180deg, rgba(18,26,46,0.85), rgba(11,16,32,0.92))"
                    : "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(244,246,252,0.9))",
                backdropFilter: "blur(12px)",
            }}
        >
            {/* subtle grid overlay (matches pages) */}
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.4,
                    pointerEvents: "none",
                    backgroundImage:
                        "linear-gradient(rgba(124,92,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 78%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 78%)",
                }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
                <SidebarHeader />
            </Box>

            {/* gradient divider */}


            <Box
                className="scroll-touch mt-3"
                sx={{
                    flex: 1,
                    position: "relative",
                    zIndex: 1,
                    overflowY: "auto",
                    overflowX: "hidden",
                }}
            >
                <Sidebartabs />
            </Box>

            <Box sx={{ position: "relative", zIndex: 1 }}>
                <SidebarFooter />
            </Box>
        </Box>
    );
};

export default SidebarContent;
