import { Container, Typography, Link} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Copyright = () => {
    return (
        <Typography>
        {"Thien Tran © "}{new Date().getFullYear()}{" : "}<Link color="secondary" href="/">thienwebdesign.netlify.app</Link>
        </Typography>
    )
}

const Footer = () => {
    const theme= useTheme();
    
    return(
        <Container 
        disableGutters 
        maxWidth="false"
        component="footer"
        sx={{
            height: 100,
            display:"flex", 
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: theme.palette.mode === "dark" ? "#191919" : "#fff" 
        }}>
            <Copyright/>
        </Container>
    )
}

export default Footer