import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { darkTheme } from "./ui/theme.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
  // </StrictMode>,
);
