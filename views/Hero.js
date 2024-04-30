import {useState} from 'react';
import { Container, Typography, Box, Fade, Button } from '@mui/material';

import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';


const heroStyle= {
    minWidth: 340,
    minHeight: 824,
    pt: 20,
    pb: 8,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    color: "white"
}

const textContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2
}

const dlButtonStyle = {
    width: 250,
    mt: 3
}

const imgStyle = {
    maxWidth: 600,
    minWidth: 300
}

const Hero = ({changeMode, colourMode}) => {

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

    return (
        <Container component="header" sx={heroStyle} maxWidth="false" className="hero-bg">
            <Box sx={textContent} >
                <Box>
                    <Fade in={true} timeout={4000}><Typography variant="h6" component="h1">Thien Tran</Typography></Fade>
                    <Fade in={true} timeout={1500}><Typography variant="h2" component="h2">Web Design</Typography></Fade>
                    <Fade in={true} timeout={4000}><Typography variant="h6" component="h3" align="right">Portfolio</Typography></Fade>
                </Box>
                <Fade in={true} timeout={6000}><ScreenshotMonitorOutlinedIcon sx={{fontSize:100}}/></Fade>
                <Fade in={true} timeout={6000}>
                    <Button 
                    sx={dlButtonStyle}
                    onClick={handleLDMode}
                    variant="outlined" 
                    color="whiteColor"
                    aria-label="color mode toggle button"
                    >
                        {LDMode === 'dark' ? "LIGHT MODE" : "DARK MODE"}
                    </Button>
                </Fade>
            </Box>
            <img src="/images/UI-UX-1.svg" alt="hero banner art" style={imgStyle} />
        </Container>
    )
}

export default Hero