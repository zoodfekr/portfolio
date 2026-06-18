import { Box, Chip, Divider, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GRADIENT } from "../../container/theme";

const CustomDivider = ({
    children,
    icon,
    textAlign,
    gradient,
}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setChecked(true), 150);
        return () => {
            clearTimeout(t);
            setChecked(false);
        };
    }, []);

    return (
        <Slide direction="down" in={checked}>
            <Divider
                textAlign={textAlign ? textAlign : "center"}
                variant="middle"
                sx={{
                    my: 2,
                    "&.MuiDivider-root::before,&.MuiDivider-root::after": {
                        borderColor: "divider",
                    },
                }}
            >
                <Chip
                    sx={{
                        background: gradient ? GRADIENT : "rgba(124,92,255,0.12)",
                        color: gradient ? "#fff" : "primary.main",
                        px: 1,
                        py: 2.5,
                        borderRadius: 50,
                        boxShadow: gradient
                            ? "0 8px 20px rgba(124,92,255,0.30)"
                            : "none",
                    }}
                    label={
                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                fontWeight: 600,
                                fontSize: 16,
                                px: 1,
                            }}
                        >
                            {icon ? (
                                <Box
                                    component="span"
                                    sx={{ display: "flex", fontSize: 18 }}
                                >
                                    {icon}
                                </Box>
                            ) : null}
                            {children}
                        </Typography>
                    }
                />
            </Divider>
        </Slide>
    );
};
export default CustomDivider;
