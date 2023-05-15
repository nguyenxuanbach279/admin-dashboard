import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();

  // console.log("theme", theme)
  // console.log("colorMode", colorMode)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
