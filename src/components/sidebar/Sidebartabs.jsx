import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SiHomeadvisor } from "react-icons/si";
import { TbMessages } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillPersonBadgeFill, BsPersonWorkspace, BsPersonBoundingBox } from "react-icons/bs";



import { grey } from "@mui/material/colors";
import { useContext } from 'react';
import Appcontext from '../../context/Context';


function Sidebartabs() {

  const { pagenumber, handleChange, setdrawershow, theme } = useContext(Appcontext);

  const iconstyle = { fontSize: "25px" };
  const tabclass = ' d-flex justify-content-start mx-2 px-3';

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,

    };
  };

  const tabsdata = [
    { label: "صفحه اصلی", icon: < SiHomeadvisor style={iconstyle} ></SiHomeadvisor>, ...tabProps(0) },
    { label: "درباره من ", icon: < BsFillPersonBadgeFill style={iconstyle} ></BsFillPersonBadgeFill>, ...tabProps(1) },
    { label: "نمونه کارها ", icon: < BsPersonWorkspace style={iconstyle} ></BsPersonWorkspace>, ...tabProps(2) },
    // { label: " گواهینامه ها ", icon: < TbMessages style={iconstyle} ></TbMessages>, ...tabProps(3) },
    { label: "  ارتباط با من ", icon: < FaChalkboardTeacher style={iconstyle} ></FaChalkboardTeacher>, ...tabProps(4) },
  ]

  return (
    <Box >
      <Tabs
        className='ramintest'
        onClick={() => setdrawershow(false)}
        orientation="vertical"
        variant="scrollable"
        value={pagenumber}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "red",
            border: "3px solid red",
            borderRadius: "40px",
          }

        }}
      >
        {tabsdata.map((data => (
          <Tab
            onClick={() => setdrawershow(false)}
            sx={{
              "&.MuiTab-root": {
                backgroundColor: theme.palette.tabs.main,
                borderRadius: 2,
                my: 0.25,
                mx: 0,
                minHeight: 0,
                px:0,
                fontFamily:"vazir"

              },
              "&.Mui-selected": {
                color: "red",
              }
            }}
            className={tabclass}
            label={data.label}
            icon={data.icon}
            iconPosition='start'
            {...tabsdata}
          >
          </Tab>
        )))}
      </Tabs>

    </Box >
  );
}

export default Sidebartabs;


{/* <div id="one" class="corner"></div>
<div id="two" class="corner"></div> */}