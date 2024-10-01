"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import { useColor } from "@/app/ColorContext";

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
        <Box sx={{ p: 3, height: "600px", overflowY: "scroll" }}>
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

const CustomTab = styled(Tab)(({}) => ({
  width: "120px",

  "&.Mui-selected": {
    color: "white",
    borderRadius: 4,
    fontWeight: 900,
    borderColor: "transparent"
  },
  "&.Mui-focusVisible": {
    outline: "none"
  },
  "&.Mui-focusVisible.Mui-selected": {
    borderBottom: "none",
    border: "0px solid transparent"
  }
}));

export default function MainNav_Comp() {
  const [value, setValue] = React.useState<number>(() => {
    // Check if window is defined to avoid SSR issues
    if (typeof window === 'undefined') return 0; // Default value if SSR

    const savedPage = localStorage.getItem("savedPage");
    return savedPage && parseInt(savedPage) >= 0 ? parseInt(savedPage) : 0;
  });

  React.useEffect(() => {
    // Ensure localStorage is accessed only in the browser
    if (typeof window !== 'undefined') {
      localStorage.setItem("savedPage", value.toString());
    }
  }, [value]);
  const { theme } = useColor();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "90vh"
      }}
    >
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
        <div className="flex justify-end ">
          <Box
            sx={{
              display: "flex",
              color: "white",
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
                xs: "0",
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
                lg: "0 1.5rem 0rem 1.5rem"
              },
              zIndex: 1000,
              backgroundColor: theme.mainNav
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
                "& .MuiTabs-indicator": {
                  display: "none"
                },
                "& .MuiTabs-flexContainer": {},
                "& .MuiTab-root": {
                  outline: "none",
                  fontWeight: "bold",
                  backgroundColor: "",
                  color: "white",
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.7rem",
                    md: "0.8rem"
                  },
                  padding: {
                    xs: "6px 6px",
                    sm: "8px 12px",
                    md: "10px 16px"
                  },
                  "&:focus": {
                    fontWeight: 900,
                    outline: "none"
                  }
                }
              }}
            >
              <CustomTab label="About Me" {...a11yProps(0)} />
              <CustomTab label="Resume" {...a11yProps(1)} />
              <CustomTab label="Portfolio" {...a11yProps(2)} />
              <CustomTab label="Contact" {...a11yProps(3)} />
              {/* <CustomTab label="Papers" {...a11yProps(3)} /> */}
            </Tabs>
          </Box>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <CustomTabPanel value={value} index={0}>
            <About />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Resume />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Portfolio />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Contact />
          </CustomTabPanel>
          {/* <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel> */}
        </Box>
      </Box>
    </Box>
  );
}
