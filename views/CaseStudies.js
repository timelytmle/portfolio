import {useRef, useEffect} from 'react';
import { Container, Stack, Box, Typography, Button, useTheme } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Divider from "../components/Divider.js";

gsap.registerPlugin(ScrollTrigger);

const flexStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    pt: {md: 4, sm: 9, xs: 9}
}

const gradientButtonStyle = {
    backgroundColor: "#FFF",
    backgroundImage: "linear-gradient(0.33turn, #82d0ff, #ffa2ff, #d6b7ff, #ff97cc)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1300px 38px",
    backgroundPositionX: 0,
    mr: 1,
    "&:hover": {
        textDecoration: "underline",
        textDecorationColor: "#FFF"
    }
}

const caseStudyContent = [
    {
        id: "case1",
        heading: "Web Design Portfolio",
        content: "This site was created using React with the Material UI design framework. The GSAP animation library was used for the animated components. View the Figma file and Github for this site below.",
        image: "/images/caseDesignShowcaseOpt.svg",
        imageAlt: "Web design portfolio cover image",
        buttonText: "View Figma",
        url: "https://www.figma.com/design/22JyfSQOrWN2nFuKzxlfOQ/Portfolio?node-id=0%3A1&t=bnTjMBHxIKHhv3nQ-1"
    },
    {
        id: "case2",
        heading: "Ryght AI",
        content: "Ryght AI is a tech company specializing in generative AI for the biopharmaceutical industry. Working with the company's in-house designer, I was tasked with implementing the front end for their web page.",
        image: "/images/Ryght.webp",
        imageAlt: "Ryght AI cover image",
        buttonText: "View Project",
        url: "https://www.ryght.ai/"
    },
    {
        id: "case3",
        heading: "Vocablyfy",
        content: "Vocablyfy is a Japanese flashcard generator I created after identifying functionality that didn't exist within the domain. The key differentiating features are the ability to filter by word type and the multi-level flashcards. The flashcards are based on existng Japanese textbooks or the vocabulary of the JLPT, with the aim of drawing from the demographic of students using these utilities in their studies.",
        image: "/images/vocablyfy.webp",
        imageAlt: "Vocablyfy cover image",
        buttonText: "View Project",
        url: "https://www.vocablyfy.com/"
    },
    /*{
        id: "case4",
        heading: "Graphic Design Showcase",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "/images/caseDesignShowcaseOpt.svg",
        imageAlt: "test",
        buttonText: "View Project",
        url: "https://thien-tran-design-portfolio.netlify.app/"
    }*/
]

const CaseStudies = () => {

    const caseStudiesRef = useRef(null);
    const tl1 = useRef(null);
    const tl2 = useRef(null);
    const tl3 = useRef(null);
    const tl4 = useRef(null);
    const theme = useTheme();

    const boxImageRight = {
        flexBasis: 330,
        minHeight: 330,
        pr: 2,
        pt: { md: 0, sm: 2, xs: 2 },
        pb: { md: 2, sm: 0, xs: 0 },
        borderWidth: "3px",
        borderTopStyle: { md:"none", sm:"solid", xs:"solid" },
        borderBottomStyle: { md:"solid", sm:"none", xs:"none" },
        borderRightStyle: "solid",
        borderRadius: { md:"0px 0px 15px 0px", sm:"0px 15px 0px 0px", xs:"0px 15px 0px 0px" },
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"
    }

    const boxImageLeft = {
        flexBasis: 330,
        minHeight: 330,
        pl: 2,
        pt: { md: 0, sm: 2, xs: 2 },
        pb: { md: 2, sm: 0, xs: 0 },
        borderWidth: "3px",
        borderTopStyle: { md:"none", sm:"solid", xs:"solid" },
        borderBottomStyle: { md:"solid", sm:"none", xs:"none" },
        borderLeftStyle: "solid",
        borderRadius: { md:"0px 0px 0px 15px", sm:"15px 0px 0px 0px", xs:"15px 0px 0px 0px" },
        textAlign: "right",
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"
    }

    const boxTextRight = {
        flexBasis: 330,
        flexGrow: { md:"1", sm:"0", xs:"0" },
        pl: { md: 4, sm: 0, xs: 0 },
        pr: 2,
        pt: 2,
        order: { md:"0", sm:"1", xs:"1" },
        borderWidth: "3px",
        borderTopStyle: { md:"solid", sm:"none", xs:"none" },
        borderRightStyle: "solid",
        borderRadius: { md:"0px 15px 0px 0px", sm:"none", xs:"none" },
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"
    }

    const boxTextLeft = {
        flexBasis: 330, 
        flexGrow: { md:"1", sm:"0", xs:"0" },
        pl: { md: 4, sm: 2, xs: 2 },
        pr: 2,
        pt: 2,
        order: { md:"0", sm:"1", xs:"1" },
        borderWidth: "3px",
        borderTopStyle: { md:"solid", sm:"none", xs:"none" },
        borderLeftStyle: "solid",
        borderRadius: { md:"15px 0px 0px 0px", sm:"none", xs:"none" },
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"
    }

    const outlinedButton = {
        color: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
        "&:hover": {
            borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
            textDecoration: "underline"
        }
    }

    const imgLeft = {
        display:"block", 
        borderRadius: "inherit"
    }

    const imgRight = {
        display:"block", 
        borderRadius: "inherit"
    }

    useEffect(() => {
        
        let ctx = gsap.context(() => {
            
            tl1.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#case1",
                    toggleActions: "restart none none none"
                }
            })

            tl1.current.from("#case1 .case-img", {opacity: 0, x: "-30px", duration: 2, delay: 0.4})
            tl1.current.from("#case1 .case-heading", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl1.current.from("#case1 .case-content", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl1.current.from("#case1 .case-button", {opacity: 0, y: "30px", duration: 2, delay: -1.7})

            tl2.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#case2",
                    toggleActions: "restart none none none"
                }
            })

            tl2.current.from("#case2 .case-img", {opacity: 0, x: "30px", duration: 2, delay: 0.4})
            tl2.current.from("#case2 .case-heading", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl2.current.from("#case2 .case-content", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl2.current.from("#case2 .case-button", {opacity: 0, y: "30px", duration: 2, delay: -1.7})

            tl3.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#case3",
                    toggleActions: "restart none none none"
                }
            })

            tl3.current.from("#case3 .case-img", {opacity: 0, x: "-30px", duration: 2, delay: 0.4})
            tl3.current.from("#case3 .case-heading", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl3.current.from("#case3 .case-content", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl3.current.from("#case3 .case-button", {opacity: 0, y: "30px", duration: 2, delay: -1.7})

            tl4.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#case4",
                    toggleActions: "restart none none none"
                }
            })

            tl4.current.from("#case4 .case-img", {opacity: 0, x: "30px", duration: 2, delay: 0.4})
            tl4.current.from("#case4 .case-heading", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl4.current.from("#case4 .case-content", {opacity: 0, y: "30px", duration: 2, delay: -1.7})
            tl4.current.from("#case4 .case-button", {opacity: 0, y: "30px", duration: 2, delay: -1.7})

            gsap.to(".case-button", {backgroundPositionX: "-1000px", duration: 12}).repeat(-1).yoyo(true)
        
        }, caseStudiesRef)
        
        return () => ctx.revert();

    }, []);

    return (
        <Container component="section" ref={caseStudiesRef} sx={{pt:{md:30,sm:25, xs:20}}} maxWidth="md" fixed>
            <Stack direction="column" alignItems="center">
                <Typography variant="h3" component="h4" align="center" sx={{pb:6}}>Featured Projects</Typography>
                <Divider/>
                {caseStudyContent.map((items, index) => {
                    if (index % 2 === 0) {
                        return (
                            <Box key={items.id} id={items.id} sx={flexStyle}>
                                <Box sx={boxImageRight}>
                                    <img className="case-img" loading="lazy" src={items.image} alt={items.imageAlt} width="100%" height="100%" style={imgRight}/>
                                </Box>
                                <Box sx={boxTextRight}>
                                    <Typography className="case-heading" variant="h5" component="h5" sx={{my:2}}>{items.heading}</Typography>
                                    <Typography className="case-content" variant="body2" sx={{mb:2}}>{items.content}</Typography>
                                    <Button className="case-button" variant="contained" href={items.url} sx={gradientButtonStyle} target="_blank">
                                        <Typography color="white" variant="button" sx={{fontWeight: "600"}}>{items.buttonText}</Typography>
                                    </Button>
                                    {items.id === "case1" &&
                                        <Button className="case-button" variant="outlined" sx={outlinedButton} href={items.url} target="_blank">
                                            <Typography variant="button" sx={{fontWeight: "400"}}> View Github</Typography>
                                        </Button>
                                    }
                                </Box>
                            </Box>
                        )
                    }
                    else {
                        return (
                            <Box key={items.id} id={items.id} sx={flexStyle}>
                                <Box sx={boxTextLeft}>
                                    <Typography className="case-heading" variant="h5" component="h5" sx={{my:2}}>{items.heading}</Typography>
                                    <Typography className="case-content" variant="body2" sx={{mb:2}}>{items.content}</Typography>
                                    <Button className="case-button" variant="contained" href={items.url} sx={gradientButtonStyle} target="_blank">
                                        <Typography color="white" variant="button" sx={{fontWeight: "600"}}>{items.buttonText}</Typography>
                                    </Button>
                                </Box>
                                <Box sx={boxImageLeft}>
                                    <img className="case-img" loading="lazy" src={items.image} alt={items.imageAlt} width="100%" height="100%" style={imgLeft}/>
                                </Box>
                            </Box>
                        )
                    }
                })}
            </Stack>
        </Container>
    )
}

export default CaseStudies