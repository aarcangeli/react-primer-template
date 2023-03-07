import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BaseStyles, themeGet, ThemeProvider, useTheme } from "@primer/react";
import { createGlobalStyle } from "styled-components";

/**
 * Applies the color-scheme property to the root element (which is not performed by the BaseStyles)
 *
 * https://github.com/primer/react/blob/693ce68c9e47c37fb36a334f7f524e688d31bccd/src/BaseStyles.tsx#L10
 */
function ApplyGlobalStyle() {
  const { colorScheme } = useTheme();
  console.log("Rendered with color scheme: ", colorScheme);

  return <GlobalStyle colorScheme={colorScheme?.includes("dark") ? "dark" : "light"} />;
}
const GlobalStyle = createGlobalStyle<{ colorScheme?: "light" | "dark" }>`
  :root  {
    background-color: ${themeGet("colors.canvas.default")};
    color-scheme: ${(props) => props.colorScheme};
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider colorMode="auto">
      <BaseStyles>
        <ApplyGlobalStyle />
        <App />
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
