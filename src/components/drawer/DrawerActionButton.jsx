import { Box, Fab } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import Appcontext from "../../context/Context";
import { GRADIENT } from "../../container/theme";

const DrawerActionButton = () => {
    const { setdrawershow, drawershow } = useContext(Appcontext);

    return (
        <Box
            sx={{
                position: "fixed",
                top: { xs: "calc(12px + env(safe-area-inset-top))", md: 16 },
                insetInlineEnd: { xs: "calc(12px + env(safe-area-inset-right))", md: 16 },
                zIndex: 1300,
                display: { xs: "block", sm: "block", md: "none" },
            }}
        >
            <Fab
                aria-label="menu"
                size="medium"
                onClick={() => setdrawershow(!drawershow)}
                sx={{
                    color: "#fff",
                    background: GRADIENT,
                    boxShadow: "0 10px 24px rgba(124,92,255,0.4)",
                    "&:hover": { filter: "brightness(1.08)", background: GRADIENT },
                }}
            >
                <AiOutlineMenu />
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;
