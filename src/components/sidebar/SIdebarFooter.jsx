import { Box, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import Socialmedia from "./Socialmedia";
import Appcontext from "../../context/Context";
import { useContext } from "react";

const SidebarFooter = () => {
    const { theme } = useContext(Appcontext);

    return (
        <Box sx={{ pt: 2 }}>
            <Socialmedia />

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        fontSize: 12,
                    }}
                >
                    <FaReact
                        className="R-rotate"
                        style={{ color: theme.palette.secondary.main, fontSize: 16 }}
                    />
                    ساخته‌شده با React
                </Typography>
            </Box>

            <Typography
                align="center"
                color="text.secondary"
                sx={{ fontSize: 11, mt: 0.5, opacity: 0.7 }}
            >
                © {new Date().getFullYear()} رامین زودفکر
            </Typography>
        </Box>
    );
};

export default SidebarFooter;
