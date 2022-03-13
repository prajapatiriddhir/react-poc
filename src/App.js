import { createMuiTheme, ThemeProvider } from "@mui/material";
import { Root } from "./pages";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    primary: {
      main: "rgb(16,255,141)",
    },
    success: {
      main: "rgb(16,255,141)",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
        notchedOutline: {
          borderColor: "rgb(16,255,141) !important",
          borderWidth: 2,
        },
        input: {
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          ":disabled": {
            backgroundColor: "rgb(16,255,141)",
            color: "black",
            opacity: 0.5,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
          color: "white",
          borderRadius: 20,
          "&.Mui-selected": {
            backgroundColor: "rgb(16,255,141)",
            color: "black",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
          borderRadius: 20,
        },
        indicator: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
