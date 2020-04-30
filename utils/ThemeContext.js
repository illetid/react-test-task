import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme.js";

const defaultContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeMounted: false,
  });
  React.useEffect(() => {
    const lsItem = localStorage.getItem("dark");
    const lsDark = lsItem === "true";
    const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log("is os dark");
    const isDark = !lsItem ? osDark : lsDark;
    setThemeState({
      ...themeState,
      dark: isDark,
      hasThemeMounted: true,
    });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
