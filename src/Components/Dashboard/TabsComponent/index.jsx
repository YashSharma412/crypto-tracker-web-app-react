import React, { useState } from "react";
import "./styles.css";
import { AnimatePresence } from "framer-motion";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { createTheme, ThemeProvider } from "@mui/material";
import GridCoinBox from "../GridCoinBox";
import ListCoinRow from "../ListCoinRow";
import Loader from "../../Common/Loader";
export default function TabsComponent({loading , coins}) {
  const [value, setValue] = useState("grid");
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const btnStyle = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "var(--fs-medium)",
    fontWeight: "600",
    fontFamily: "var(--font-heading)",
    textTransform: "capitalize",
    paddingBlock: "0.5rem",
    minHeight: "2rem",
    alignItems: "center",
  };

  const Theme = createTheme({
    palette: {
      primary: {
        main: "rgba(130,95,233,1)",
      },
    },
  });
  return (
    <ThemeProvider theme={Theme}>
      <TabContext selectionFollowsFocus value={value}>
        <TabList
          onChange={handleChange}
          aria-label="crypto display type"
          variant="fullWidth"
        >
          <Tab
            icon={<GridViewIcon />}
            iconPosition="start"
            label="Grid View"
            value="grid"
            sx={btnStyle}
            className="myTabButton"
          />
          <Tab
            icon={<FormatListBulletedIcon />}
            iconPosition="start"
            label="List View"
            value="list"
            sx={btnStyle}
            className="myTabButton"
          />
        </TabList>
        <TabPanel value="grid">
            {
              loading ? <Loader /> : 
                <div className="grid__container">
                  {
                    coins && coins.length > 0 ? 
                      <AnimatePresence>
                        {
                          coins.map((coin, idx)=>(
                            <GridCoinBox coin={coin} coinId={coin.id} idx={idx} key={idx}/>
                          ))
                        }
                      </AnimatePresence> : <center><h2> No coin matches the search </h2></center>
                  }
                </div>
            }
        </TabPanel>
        <TabPanel value="list">
          {
            loading ? <Loader /> : 
              <table className="listCoins__table">
                {
                  coins && coins.length > 0 ? 
                    <tbody>
                      <AnimatePresence>
                        {
                          coins.map((coin, idx)=>(
                            <ListCoinRow key={idx} coin={coin} idx={idx} coinId={coin.id} />
                            ))
                          }
                      </AnimatePresence>
                    </tbody> : <center><h2> No coin matches the search </h2></center>
                }
              </table>
          }
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
