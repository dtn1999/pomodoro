import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { ThemeExchanger } from "../context/ThemeExchangerContext";
import { loadUserAppConfig } from "../storage/storageUtils";

const baseTheme = extendTheme({
  shadows: {
    timer: "-88px -36px 105px 52px rgba(40,48,89,0.35)",
  },
  colors: {
    bgColor: "#1F2440",
    primary: "#F26D6D",
    inputBgColor: "",
    text: "#D0D9F2",
    dark: "#111426",
    darkText: "#737896",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(baseTheme);

  const handlePrimaryColorChange = React.useCallback((newPrimaryColor) => {
    setTheme({
      ...theme,
      colors: {
        ...theme.colors,
        primary: newPrimaryColor,
      },
    });
  }, []);

  // load user color preference
  React.useEffect(() => {
    const userConfig = loadUserAppConfig();
    handlePrimaryColorChange(userConfig.color);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ThemeExchanger.Provider value={{ handlePrimaryColorChange }}>
        <Component {...pageProps} />
      </ThemeExchanger.Provider>
    </ChakraProvider>
  );
}
export default MyApp;
