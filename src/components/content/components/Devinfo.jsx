import { Box, Typography } from "@mui/material";

const Devinfo = ({ label, value }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1.2,
                px: 2,
                borderRadius: 2,
                backgroundColor: "rgba(124,92,255,0.05)",
                border: "1px solid",
                borderColor: "divider",
            }}
        >
            <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                {label}
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: 15 }} color="text.primary">
                {value}
            </Typography>
        </Box>
    );
};
export default Devinfo;
