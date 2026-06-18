import Grid from "@mui/material/Unstable_Grid2";
import SidebarContent from "../components/sidebar/SidebarContent";


const Sidebar = () => {
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={2}
            xl={2}
            sx={{ display: { xs: "none", md: "block" } }}
        >
            <SidebarContent />
        </Grid>
    )
}
export default Sidebar;