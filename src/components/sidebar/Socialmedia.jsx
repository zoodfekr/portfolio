import { Box, IconButton } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaSkype, FaTelegram } from "react-icons/fa";

const Socialmedia = () => {
    const socialmedia_data = [
        { aria_label: "Github", href: "https://github.com/zoodfekr", icon: <FaGithub /> },
        { aria_label: "linkedin", href: "https://www.linkedin.com/in/ramin-zoodfekr-08b16b233/", icon: <FaLinkedinIn /> },
        { aria_label: "skype", href: "https://join.skype.com/invite/MdJneJzpoQ6i", icon: <FaSkype /> },
        { aria_label: "telegram", href: "https://t.me/", icon: <FaTelegram /> },
    ];

    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
            {socialmedia_data.map((data, index) => (
                <IconButton
                    key={index}
                    aria-label={data.aria_label}
                    component="a"
                    href={data.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scale"
                    sx={{
                        color: "text.secondary",
                        border: "1px solid",
                        borderColor: "divider",
                        p: 1.1,
                        fontSize: 17,
                        backgroundColor: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(8px)",
                        transition: "all .25s ease",
                        "&:hover": {
                            color: "#fff",
                            borderColor: "transparent",
                            background:
                                "linear-gradient(135deg, #7C5CFF, #22D3EE)",
                            boxShadow: "0 8px 18px rgba(124,92,255,0.35)",
                        },
                    }}
                >
                    {data.icon}
                </IconButton>
            ))}
        </Box>
    );
};

export default Socialmedia;
