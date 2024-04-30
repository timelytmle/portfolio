import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Tabs, Tab, IconButton } from '@mui/material';


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const tabBoxStyle = {
    width: "100%",
    position: "absolute",
    pt: 1.4,
    pl: 3,
    zIndex: 10,
    height: 90,
    backgroundColor: 'secondary.contrastText',
    opacity: 0.7,
}

const modeButtonStyle = {
    position: "fixed",
    right: 15,
    top: 18,
    zIndex: 99,
}

const tabStyle = {
    fontSize: "1.1rem",
}

const NavMenu = ({changeMode, colourMode}) => {

    const [LDMode, setLDMODE] = useState(colourMode);

    const handleLDMode = () => {

        if (LDMode === "light") {
            setLDMODE("dark");
            changeMode("dark");
        }
        else {
            setLDMODE("light");
            changeMode("light");
        }
    };

    const navigate = useNavigate();
  
    return(
    <>
        <Box component="nav" sx={tabBoxStyle}>
            <Tabs
                value={"0"}
                aria-label="top navigation tab"
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab value="0" label="Web Portfolio" sx={tabStyle} onClick={() => navigate("/")}/>
            </Tabs>
        </Box>

        <IconButton 
        sx={{...modeButtonStyle, color: LDMode === "dark" ? "#AE7EAA" : "#ff97cc"}}
        onClick={handleLDMode}
        variant="contained" 
        aria-label="color mode toggle button"
        >
            {LDMode === 'dark' ? <Brightness7Icon fontSize="large"/> : <Brightness4Icon fontSize="large"/>}
        </IconButton>   
    </>
    )
}

export default NavMenu