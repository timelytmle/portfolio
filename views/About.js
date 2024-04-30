import {useRef, useEffect} from 'react';
import { Container, Stack, Box, Typography, useTheme } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ItemDiv from "../components/ItemDiv.js";
import Divider from "../components/Divider.js";

const profile = {
    imgSource: "/images/ani-profile-opt.svg",
    imgAlt: "Profile Picture",
    title: "Thien Tran",
    body: "I enjoy travelling and love immersing myself in different cultures. I am able to speak conversational Japanese and recently came back from living in Japan. In my free time, I like to stay active by playing sports. I am also a fervent board game enthusiast and have an extensive collection."
}

const imgScroll = [
    {
        id: "img1",
        url: "/images/img1.webp",
        alt: "Okinawa"
    },
    {
        id: "img2",
        url: "/images/img2.webp",
        alt: "Kumamoto"
    },
    {
        id: "img3",
        url: "/images/img3.webp",
        alt: "Team Labs Tokyo"
    },
    {
        id: "img4",
        url: "/images/img4.webp",
        alt: "Mount Aso"
    },
    {
        id: "img5",
        url: "/images/img5.webp",
        alt: "Hokkaido"
    },
    {
        id: "img6",
        url: "/images/img6.webp",
        alt: "Kyoto"
    },
    {
        id: "img8",
        url: "/images/img8.webp",
        alt: "Nagano"
    },
    {
        id: "img9",
        url: "/images/img9.webp",
        alt: "Osaka"
    },
    {
        id: "img11",
        url: "/images/img11.webp",
        alt: "Nara"
    },
    {
        id: "img12",
        url: "/images/img12.webp",
        alt: "Seoul"
    }
]

const gridBox = {
    display: "grid",
    gridTemplateColumns: "1fr",
}

const profileStyle = {
    padding: 3,
    mt: 5,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "spaceEvenly",
    width: 330,
    zIndex: 20,
    gridColumn: "1/2",
    gridRow: "1/2",
    justifySelf: "center"
}

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const theme = useTheme();
    const moreAboutRef = useRef(null);
    const tl = useRef(null);

    const scrollContainer = {
        maxWidth: "96vw",
        display: {sm:"block", xs:"none"},
        borderTopStyle: "solid",
        borderBottomStyle: "solid",
        paddingBottom: 2.5,
        paddingTop: 2.5,
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
        gridColumn: "1/2",
        gridRow: "1/2",
        justifySelf: "center",
        alignSelf: "center",
    }
    
    useEffect(() => {
        
        let ctx = gsap.context(() => {

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".profile",
                    toggleActions: "restart none none none"
                }
            })

            tl.current.from(".profile", { opacity: 0, y: 70, duration: 2, delay: 0.4 });
            tl.current.from(".about-image", { scale: .5, duration: 1.5, delay: -1.2, ease: "elastic.out(1,0.3)" });
        
        }, moreAboutRef)
        
        return () => ctx.revert();

    }, []);

    return (
        <Container component="section" ref={moreAboutRef} sx={{pt:{md:30,sm:25, xs:20}, pb:10}} fixed>
            <Stack direction="column" alignItems="center">
                
                <Typography variant="h3" component="h4" align="center" sx={{pb:6}}>More About Me</Typography>

                <Divider/>
                <Box sx={gridBox}>
                    <Box className="scroller" sx={scrollContainer} data-direction="right" data-speed="slow">
                        <Box className="scroll-list scroller-inner">
                            {imgScroll.map((items) => {
                                return (
                                    <img key={items.id} className="scroll-images" loading="lazy" src={items.url} alt={items.alt} height="350" width="auto" />
                                )
                            })}
                        </Box>
                    </Box>
                    
                    <ItemDiv sx={profileStyle} className="profile">
                        <img className="about-image" loading="lazy" src={profile.imgSource} alt={profile.imgAlt} width={250} height={250} style={{borderRadius:"100%"}}/>
                        <Box sx={{padding:3}}>
                            <Typography variant="h6" component="h5" gutterBottom>{profile.title}</Typography>
                            <Typography variant="body2" gutterBottom>{profile.body}</Typography>
                        </Box>
                    </ItemDiv>
                </Box>
            </Stack>
        </Container>
    )
}

export default About