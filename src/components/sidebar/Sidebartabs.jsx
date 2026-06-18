import { Box, Typography } from "@mui/material";
import { SiHomeadvisor } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPersonBadgeFill, BsPersonWorkspace } from "react-icons/bs";
import { useContext } from "react";
import Appcontext from "../../context/Context";
import { GRADIENT } from "../../container/theme";

function Sidebartabs() {
    const { pagenumber, setpagenumber, setdrawershow } = useContext(Appcontext);

    const tabsdata = [
        { label: "صفحه اصلی", icon: <SiHomeadvisor /> },
        { label: "درباره من", icon: <BsFillPersonBadgeFill /> },
        { label: "نمونه کارها", icon: <BsPersonWorkspace /> },
        { label: "ارتباط با من", icon: <FaChalkboardTeacher /> },
    ];

    const handleClick = (index) => {
        setpagenumber(index);
        setdrawershow(false);
    };

    return (
        <Box
            component="nav"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                width: "100%",
            }}
        >
            {tabsdata.map((data, index) => {
                const active = pagenumber === index;
                return (
                    <Box
                        key={index}
                        component="button"
                        type="button"
                        onClick={() => handleClick(index)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.25,
                            width: "100%",
                            minHeight: 48,
                            px: 1.75,
                            py: 1.25,
                            borderRadius: 2,
                            cursor: "pointer",
                            border: "1px solid",
                            borderColor: active ? "transparent" : "rgba(255,255,255,0.12)",
                            color: active ? "#fff" : "text.primary",
                            background: active
                                ? GRADIENT
                                : "rgba(255,255,255,0.05)",
                            backdropFilter: active ? "none" : "blur(8px)",
                            boxShadow: active
                                ? "0 10px 24px rgba(124,92,255,0.35)"
                                : "none",
                            fontFamily: "vazir",
                            fontWeight: 600,
                            fontSize: 14,
                            textAlign: "right",
                            transition: "all .25s ease",
                            "&:hover": {
                                color: "#fff",
                                background: active
                                    ? GRADIENT
                                    : "rgba(124,92,255,0.18)",
                                borderColor: active
                                    ? "transparent"
                                    : "primary.main",
                                transform: "translateY(-2px)",
                            },
                            "& svg": { fontSize: 20 },
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: "inline-flex",
                                color: active ? "#fff" : "primary.light",
                            }}
                        >
                            {data.icon}
                        </Box>
                        <Typography
                            component="span"
                            sx={{ fontWeight: 600, fontSize: 14 }}
                        >
                            {data.label}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
}

export default Sidebartabs;
