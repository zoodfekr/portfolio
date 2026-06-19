import { Box } from "@mui/material";

const TabPanel = (props) => {
    const { children, value, index, ...others } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}
        >
            {value === index && (
                <Box
                    className="scroll-touch"
                    sx={{
                        minHeight: { xs: "100dvh", md: "100vh" },
                        height: { xs: "auto", md: "100vh" },
                    }}
                >
                  {children}
                </Box>
            )}
        </div>
    );
};

export default TabPanel;