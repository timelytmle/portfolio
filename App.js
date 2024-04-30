import {useMemo, useState} from 'react';
//import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./config/Layout";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "./config/color-context";
import { getDesignTokens } from "./theme";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  //const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = useState("dark");

  /*React.useEffect(() => {
    setMode( prefersLightMode ? "light" : "dark" );
  }, [prefersLightMode]);*/
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (colourMode) => {
        setMode(colourMode);
      }
    }),
    []
  );

  let theme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout changeMode={colorMode.toggleColorMode} colourMode={theme.palette.mode}/>}>
              <Route index  element={<Home changeMode={colorMode.toggleColorMode} colourMode={theme.palette.mode}/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
