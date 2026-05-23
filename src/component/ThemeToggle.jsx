"use client";
import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
//   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`h-[32px] w-[56px] rounded-full transition-all duration-300 ${
              isSelected 
                ? "bg-gradient-to-r from-amber-400 to-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.35)]" 
                : "bg-gradient-to-r from-slate-300 to-slate-400 shadow-sm"
            }`}
          >
            <Switch.Thumb
              className={`size-[28px] bg-white rounded-full shadow-md transition-all duration-300 ${isSelected ? "ms-[24px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 text-amber-500 drop-shadow-sm" />
                ) : (
                  <Moon className="size-4 text-slate-600 drop-shadow-sm" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
};

export default ThemeToggle;
