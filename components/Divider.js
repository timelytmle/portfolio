import { Box, useTheme } from '@mui/material';

import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';

const Divider = () => {
    const theme = useTheme();

    const containerDiv = { 
        backgroundColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
        mb: 3
    };
    
    const boxStyle = {
        backgroundColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
        height: 30,
        width: 30,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    };
    
    const iconStyle = {
        color: theme.palette.mode === "dark" ? "#121212" : "#FFF",
        fontSize:20
    };

    return (
        <Box 
        height={3}
        width={250}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={containerDiv}
        >
            <Box sx={boxStyle}><ScreenshotMonitorOutlinedIcon sx={iconStyle}/></Box>
        </Box>
    )

}

export default Divider