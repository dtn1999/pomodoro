import React from "react";

export const ThemeExchangerProvider = React.createContext({
  handlePrimaryColorChange: (c: string) => {},
});
