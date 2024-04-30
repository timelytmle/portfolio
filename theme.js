export const getDesignTokens = (mode) => ({
  
  palette: {
    
    whiteColor: {
      main: '#FFF',
      light: '#FFF',
      dark: '#FFF',
      contrastText: '#000',
    },

    mode, ...(mode === 'light' && {
      background: {
        default: "#FFF",
      }
    })
  },

  typography: {
    fontFamily: "'Open Sans','trebuchet ms', Tahoma, Roboto",
    fontWeight: "300",
    h1: { fontFamily: "Oswald, Tahoma", fontWeight: "700" },
    h2: { fontFamily: "Oswald, Tahoma", fontWeight: "700" },
    h3: { fontFamily: "Oswald, Tahoma", fontWeight: "500" },
    h4: { fontFamily: "Oswald, Tahoma", fontWeight: "500" },
    h5: { fontFamily: "Oswald, Tahoma", fontWeight: "500" },
    h6: { fontFamily: "Oswald, Tahoma", fontWeight: "500" }
  }

});