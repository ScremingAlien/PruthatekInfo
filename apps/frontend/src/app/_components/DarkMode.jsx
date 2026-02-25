

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export default function DarkMode() {

     const [theme, setTheme] = useState("light");

     // On initial render, apply the saved theme
     useEffect(() => {
          const savedTheme = localStorage.getItem("theme") || "light";
          setTheme(savedTheme);
          document.documentElement.classList.toggle("dark", savedTheme === "dark");
     }, []);

     // Toggle theme and save to localStorage
     const toggleDarkMode = () => {
          const newTheme = theme === "dark" ? "light" : "dark";
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
          document.documentElement.classList.toggle("dark", newTheme === "dark");
     };



     return (
          <>
               {
                    theme == "light" ? <Moon  className=" cursor-pointer size-[22px]  md:size-[26px]" onClick={toggleDarkMode}  absoluteStrokeWidth  strokeWidth={1.5}/> :
                         <Sun strokeWidth={1.5} className=" cursor-pointer size-[22px]  md:size-[26px]" onClick={toggleDarkMode}  absoluteStrokeWidth />
               }

          </>
     )
}
 