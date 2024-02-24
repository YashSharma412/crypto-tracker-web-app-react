import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { createTheme, ThemeProvider } from "@mui/material";
import GridCoinBox from "../GridCoinBox";
import ListCoinRow from "../ListCoinRow";
import "./styles.css"
export default function TabsComponent({coins}) {
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
    // sx={{ width: '100%', typography: 'body1' }}
    <ThemeProvider theme={Theme}>
      <TabContext selectionFollowsFocus value={value}>
        {/* sx={{ borderBottom: 1, borderColor: 'divider' }} */}
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
          <div className="grid__container">
            {/* Grid view render here */}
            {
              coins.map((coin, idx)=>(
                <GridCoinBox coin={coin} coinId={coin.id} key={idx}/>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="listCoins__table">
            {
              coins.map((coin, idx)=>(
                <ListCoinRow key={idx} coin={coin} coinId={coin.id} />
              ))
            }
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
