import * as React from "react";
import TabPanel from "./TabPanel";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import Appcontext from "../context/Context";

import Homepage from "../components/content/Homepage";
import Aboutpage from "../components/content/Aboutpage";
import Works from "../components/content/Works";
import Contact from "../components/content/Contact";

function Contents() {
    const { pagenumber } = useContext(Appcontext);

    return (
        <Grid
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{
                backgroundColor: "background.default",
            }}
        >
            <TabPanel value={pagenumber} index={0}>
                <Homepage />
            </TabPanel>

            <TabPanel value={pagenumber} index={1}>
                <Aboutpage />
            </TabPanel>

            <TabPanel value={pagenumber} index={2}>
                <Works helmet={"نمونه‌کارها"} />
            </TabPanel>

            <TabPanel value={pagenumber} index={3}>
                <Contact helmet={"ارتباط با من"} />
            </TabPanel>
        </Grid>
    );
}

export default Contents;
