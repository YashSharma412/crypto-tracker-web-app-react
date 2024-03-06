import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = (props)=>{
    // const [theme, setTheme] = useState("light");
    const [isChecked, setIsChecked] = useState(()=>{
        if(localStorage.getItem("theme")){
            if(localStorage.getItem("theme") === "light"){
                setTheme("light");
                return false;
            } else {
                setTheme("dark");
                return true;
            }
        } else if(window.matchMedia) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark");
                return true;
            } else {
                setTheme("light");
                return false;
            }
        } else {
            setTheme("dark");
            return true;
        }
    })

    function toggleTheme(event){
        setIsChecked(event.target.checked);
        if(event.target.checked){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    function setTheme(mode){
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute("data-theme", mode);
    }
    return (
        <ThemeContext.Provider value={{toggleTheme, isChecked, setIsChecked}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

//determines if the user has a set theme
// function detectColorScheme(){
//     var theme="light";    //default to light

//     //!local storage is used to override OS theme settings
//     if(localStorage.getItem("theme")){
//         if(localStorage.getItem("theme") == "dark"){
//             var theme = "dark";
//         }
//     } else if(!window.matchMedia) {
//      //!matchMedia method not supported
//         return false;
//     } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
//      //!OS theme setting detected as dark
//         var theme = "dark";
//     }

//      //!dark theme preferred, set document with a `data-theme` attribute
//     if (theme=="dark") {
//          document.documentElement.setAttribute("data-theme", "dark");
//     }
// }
// detectColorScheme();