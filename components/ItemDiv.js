import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const ItemDiv = styled(Paper)(
    ({ theme, darkhex="#1A2027", lighthex="#FFF" }) => (
        {
            backgroundColor: theme.palette.mode === "dark" ? darkhex : lighthex,
            boxShadow: theme.palette.mode === "light" ? "0px 3px 5px 3px #EEE" : "none",
        }
    )
);

export default ItemDiv