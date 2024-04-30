import { useRef, useEffect } from 'react';
import { Container, Grid, Typography, Stack, Box} from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ItemDiv from "../components/ItemDiv.js";
import Divider from "../components/Divider.js";

gsap.registerPlugin(ScrollTrigger);

const clientStyles = {
    height: {md:110, sm: 120, xs: 100},
    width: {md:165, sm: 180, xs: 250},
    mt:{md:1, sm: 1, xs: 1},
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Clients = () => {
    
    const clientRef = useRef(null);
    const tl = useRef(null);
    
    useEffect(() => {
        
        let ctx = gsap.context(() => {

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".firstClients",
                    toggleActions: "restart none none none"
                }
            })
            
            tl.current.from(".firstClients", {opacity: 0, duration: 2.5, delay: 0.3})
            tl.current.from(".secondClients", {opacity: 0, duration: 2.5, delay: -2})
            tl.current.from(".thirdClients", {opacity: 0, duration: 2.5, delay: -2})

        }, clientRef);

        return () => ctx.revert();

    }, []);

    return (
        <Container component="section" ref={clientRef} sx={{pt:{md:30,sm:25, xs:20}}} maxWidth={"md"} fixed>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h4" align="center" sx={{pb:3}}>Work Delivered For</Typography>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center" item xs={12}>
                    <Divider/>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={{md:1, sm: 1, xs: 1}}>
                        <Box className="thirdClients" sx={{display: {md:"inline", sm: "none", xs: "none"}}}>
                            <a href="https://gaminglabs.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/GLI.webp" alt="GLI Logo" width="auto" height="60"/>
                                </ItemDiv>
                            </a>
                        </Box>

                        <Box className="secondClients" sx={{display: {md:"inline", sm: "inline", xs: "none"}}}>
                            <a href="https://neontreehouse.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/NTH.webp" alt="Neon Treehouse Logo" width="auto" height="80"/>
                                </ItemDiv>
                            </a>
                            <a href="https://blindtigergin.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/BTG.webp" alt="Blind Tiger Gin Logo" width="auto" height="80"/>
                                </ItemDiv>
                            </a>
                        </Box>

                        <Box className="firstClients">
                            <a href="https://link4.co/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/LK4.webp" alt="Link4 Logo" width="auto" height="60"/>
                                </ItemDiv>
                            </a>
                            <a href="https://www.360railservices.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/360rail.webp" alt="360 Rail Logo" width="auto" height="40"/>
                                </ItemDiv>
                                </a>
                            <a href="https://aflmax.com.au/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/AFL.webp" alt="AFL Max Logo" width="auto" height="70"/>
                                </ItemDiv>
                            </a>
                            <a href="https://directcareshifts.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={{...clientStyles, display:{md:"none", sm:"none", xs:"flex"}}}>
                                    <img loading="lazy" src="/images/directcare.png" alt="Direct Care Shifts Logo" width="auto" height="50"/>
                                </ItemDiv>
                            </a>
                            <a href="https://blindtigergin.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={{...clientStyles, display:{md:"none", sm:"none", xs:"flex"}}}>
                                    <img loading="lazy" src="/images/BTG.webp" alt="Blind Tiger Gin Logo" width="auto" height="80"/>
                                </ItemDiv>
                            </a>
                        </Box>

                        <Box className="secondClients" sx={{display: {md:"inline", sm: "inline", xs: "none"}}}>
                            <a href="https://directcareshifts.com/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/directcare.png" alt="Direct Care Shifts Logo" width="auto" height="35"/>
                                </ItemDiv>
                            </a>
                            <a href="https://gdaymeat.com.au/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/GDM.webp" alt="GDay Meats Logo" width="auto" height="70"/>
                                </ItemDiv>
                            </a>
                        </Box>
                        
                        <Box className="thirdClients" sx={{display: {md:"inline", sm: "none", xs: "none"}}}>
                            <a href="https://wbglegal.com.au/" rel="noreferrer" target="_blank" >
                                <ItemDiv className="clientHover" sx={clientStyles}>
                                    <img loading="lazy" src="/images/WBG.webp" alt="WBG Legal Logo" width="auto" height="80"/>
                                </ItemDiv>
                            </a>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Clients