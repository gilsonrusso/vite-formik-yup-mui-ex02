import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Azul padrão
    },
    secondary: {
      main: "#9c27b0", // Roxo
    },
    background: {
      default: "#f5f5f5", // Cinza muito claro
      paper: "#ffffff", // Branco
    },
    text: {
      primary: "#333333", // Cinza escuro
      secondary: "#757575", // Cinza médio
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
    },
    // Outras personalizações de tipografia
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    // Outras personalizações de componentes
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Azul claro
    },
    secondary: {
      main: "#f48fb1", // Rosa claro
    },
    background: {
      default: "#121212", // Cinza escuro
      paper: "#1e1e1e", // Cinza mais claro para cartões, etc.
    },
    text: {
      primary: "#ffffff", // Branco
      secondary: "#b3b3b3", // Cinza claro
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
    // Outras personalizações de tipografia
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    // Outras personalizações de componentes
  },
});
