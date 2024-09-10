"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "600px", overflowY: "auto" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const CustomTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "yellow",
    borderRadius: 4,
    borderColor: "yellow"
  },
  "&.Mui-focusVisible": {
    outline: "none"
  }
}));

export default function MainNav_Comp() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            md: "column-reverse",
            lg: "column"
          }
        }}
      >
        <div className="flex justify-end">
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-evenly",
                md: "space-evenly",
                lg: "flex-end"
              },
              alignItems: {
                xs: "center",
                md: "top",
                lg: "top"
              },
              position: {
                xs: "fixed",
                md: "fixed",
                lg: "relative"
              },
              bottom: {
                xs: 0,
                md: 0,
                lg: "auto"
              },
              left: {
                xs: 0,
                md: 0,
                lg: "auto"
              },
              width: {
                xs: "100%",
                md: "100%",
                lg: "auto"
              },
              borderBottom: { xs: 0, lg: 2 },
              borderLeft: { xs: 0, lg: 2 },
              borderTop: { xs: 2, lg: 0 },
              borderRight: { xs: 0, lg: 0 },
              borderRadius: {
                xs: "0.5rem 0.5rem 0 0",
                lg: "0 0 0rem 1.5rem"
              },
              zIndex: 1000,
              backgroundColor: "transparent"
            }}
            className="w-full lg:w-fit"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-flexContainer": {},
                "& .MuiTab-root": {
                  outline: "none",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.7rem",
                    md: "0.8rem"
                  },
                  padding: {
                    xs: "6px 6px",
                    sm: "8px 12px",
                    md: "10px 16px"
                  }
                }
              }}
            >
              <CustomTab label="About Me" {...a11yProps(0)} />
              <CustomTab label="Resume" {...a11yProps(1)} />
              <CustomTab label="Portfolio" {...a11yProps(2)} />
              <CustomTab label="Papers" {...a11yProps(3)} />
              <CustomTab label="Contact" {...a11yProps(4)} />
            </Tabs>
          </Box>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <CustomTabPanel value={value} index={0}>
            <About />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Resume/>
    

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Contact/>
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}
