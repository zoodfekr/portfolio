import { Drawer } from '@mui/material'
import SidebarContent from '../sidebar/SidebarContent';
import { useContext } from 'react';
import Appcontext from '../../context/Context';
const SidebarDrawer = () => {

    const { setdrawershow, drawershow } = useContext(Appcontext);

    return (
        <Drawer
            onClose={() => setdrawershow(false)}
            variant="temporary"
            open={drawershow}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '82vw', sm: 320 },
                    maxWidth: 340,
                    boxSizing: 'border-box',
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}
        >
            <SidebarContent></SidebarContent>
        </Drawer>
    )
};

export default SidebarDrawer;