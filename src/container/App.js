import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./Sidebar";
import DrawerActionButton from "../components/drawer/DrawerActionButton";
import SidebarDrawer from "../components/drawer/SidebarDrawer";
import { darktheme } from "./theme";
import { useState } from "react";
import Contents from "./Contents";
import Appcontext from "../context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const theme = darktheme;

function App() {
    const [pagenumber, setpagenumber] = useState(0);
    const [drawershow, setdrawershow] = useState(false);

    const handleChange = (event, newValue) => {
        setpagenumber(newValue);
    };

    return (
        <Appcontext.Provider
            value={{
                pagenumber,
                setpagenumber,
                handleChange,
                drawershow,
                setdrawershow,
                theme,
            }}
        >
            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <Grid container sx={{ minHeight: "100vh" }}>
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                                newestOnTop
                                rtl
                                theme="colored"
                            />
                            <Sidebar />
                            <Contents />
                        </Grid>

                        {/* mobile controls — outside the grid so layout isn't disturbed */}
                        <DrawerActionButton />
                        <SidebarDrawer />
                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>
        </Appcontext.Provider>
    );
}

export default App;
