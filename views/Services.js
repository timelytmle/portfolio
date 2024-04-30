import {useRef, useEffect} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Divider from "../components/Divider.js";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const serviceItems = [
        {
            id: 0,
            heading: "UI/UX",
            body: "Heuristic Analysis, User Flow, HF Prototypes, CRO",
            className: "uix",
            path: "M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z",
            clipID: "idUix",
            clipCommand: "url(#idUix)"
        },
        {
            id: 1,
            heading: "Development",
            body: "CMS, HTML, JS, CSS, Responsive Sites",
            className: "dev",
            path: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
            clipID: "idDev",
            clipCommand: "url(#idDev)"
        },
        {
            id: 2,
            heading: "Design",
            body: "Figma Design, Icon Sets, Illustrations",
            className: "ill",
            path: "m18.85 10.39 1.06-1.06c.78-.78.78-2.05 0-2.83L18.5 5.09c-.78-.78-2.05-.78-2.83 0l-1.06 1.06 4.24 4.24zm-5.66-2.83L4 16.76V21h4.24l9.19-9.19-4.24-4.25zM19 17.5c0 2.19-2.54 3.5-5 3.5-.55 0-1-.45-1-1s.45-1 1-1c1.54 0 3-.73 3-1.5 0-.47-.48-.87-1.23-1.2l1.48-1.48c1.07.63 1.75 1.47 1.75 2.68zM4.58 13.35C3.61 12.79 3 12.06 3 11c0-1.8 1.89-2.63 3.56-3.36C7.59 7.18 9 6.56 9 6c0-.41-.78-1-2-1-1.26 0-1.8.61-1.83.64-.35.41-.98.46-1.4.12-.41-.34-.49-.95-.15-1.38C3.73 4.24 4.76 3 7 3s4 1.32 4 3c0 1.87-1.93 2.72-3.64 3.47C6.42 9.88 5 10.5 5 11c0 .31.43.6 1.07.86l-1.49 1.49z",
            clipID: "idIll",
            clipCommand: "url(#idIll)"
        },
        {
            id: 3,
            heading: "SEO",
            body: "Gap Analysis, Analytics, Content Strategy",
            className: "ana",
            path: "m15 3-0.91992 2.0703-2.0801 0.92969 2.0801 0.92969 0.91992 2.0703 0.93945-2.0703 2.0605-0.92969-2.0605-0.92969-0.93945-2.0703zm-11.5 3-0.5 2-2 0.5 2 0.5 0.5 2 0.5-2 2-0.5-2-0.5-0.5-2zm17.5 2c-1.45 0-2.2597 1.4398-1.9297 2.5098l-3.5508 3.5605c-0.3-0.089999-0.73906-0.089999-1.0391 0l-2.5508-2.5508c0.34-1.07-0.46969-2.5195-1.9297-2.5195-1.45 0-2.2697 1.4395-1.9297 2.5195l-4.5605 4.5508c-1.07-0.33-2.5098 0.47969-2.5098 1.9297 0 1.1 0.9 2 2 2 1.45 0 2.2597-1.4398 1.9297-2.5098l4.5508-4.5605c0.3 0.089999 0.73906 0.089999 1.0391 0l2.5508 2.5508c-0.34 1.07 0.46969 2.5195 1.9297 2.5195 1.45 0 2.2697-1.4395 1.9297-2.5195l3.5605-3.5508c1.07 0.33 2.5098-0.47969 2.5098-1.9297 0-1.1-0.9-2-2-2z",
            clipID: "idAna",
            clipCommand: "url(#idAna)"
        },
        {
            id: 4,
            heading: "Animation",
            body: "GSAP, Scroll Triggered Effects, SVG Animation",
            className: "ani",
            path: "M15 2c-2.71 0-5.05 1.54-6.22 3.78-1.28.67-2.34 1.72-3 3C3.54 9.95 2 12.29 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78 1.28-.67 2.34-1.72 3-3C20.46 14.05 22 11.71 22 9c0-3.87-3.13-7-7-7zM9 20c-2.76 0-5-2.24-5-5 0-1.12.37-2.16 1-3 0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3c-2.76 0-5-2.24-5-5 0-1.12.37-2.16 1-3 0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7 .84-.63 1.87-1 3-1 2.76 0 5 2.24 5 5 0 1.12-.37 2.16-1 3z",
            clipID: "idAni",
            clipCommand: "url(#idAni)"
        },
        {
            id: 5,
            heading: "Videography",
            body: "Video Content, Product Photography",
            className: "vid",
            path: "m18 4 2 3h-3l-2-3h-2l2 3h-3l-2-3H8l2 3H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm-6.75 11.25L10 18l-1.25-2.75L6 14l2.75-1.25L10 10l1.25 2.75L14 14l-2.75 1.25zm5.69-3.31L16 14l-.94-2.06L13 11l2.06-.94L16 8l.94 2.06L19 11l-2.06.94z",
            clipID: "idVid",
            clipCommand: "url(#idVid)"
        },
    ]
    
    const serviceRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        
        let ctx = gsap.context(() => {

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".serviceGrid",
                    scrub: 2.5,
                    start: "top 70%",
                    end: "bottom 65%"
                }
            })

            tl.current.from(".uix", {opacity: 0, x: "-30px"})
            tl.current.from(".dev", {opacity: 0, x: "-30px"})
            tl.current.from(".ill", {opacity: 0, x: "-30px"})
            tl.current.from(".ana", {opacity: 0, x: "-30px"})
            tl.current.from(".ani", {opacity: 0, x: "-30px"})
            tl.current.from(".vid", {opacity: 0, x: "-30px"})
            

        }, serviceRef)
        
    return () => ctx.revert();

    }, []);

    return (
        <Container component="section" ref={serviceRef} sx={{pt:{md:20, sm:15, xs:10}}} maxWidth={"md"} fixed>
            <Grid container spacing={3} className="serviceGrid">
                <Grid item xs={12}>
                    <Typography variant="h3" component="h4" align="center" sx={{pb:3}} >Services</Typography>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignItems="center" item xs={12}>
                    <Divider/>
                </Grid>

                {
                serviceItems.map((items) => {
                    return (
                        <Grid 
                        container 
                        direction="column" 
                        justifyContent="flex-start" 
                        alignItems="center"
                        key={items.id} 
                        item sm={4} 
                        xs={6}
                        sx={{mb:3}}
                        className={items.className}>
                            <svg width="70" height="70" viewBox="0 0 24 24">
                                <clipPath id={items.clipID}>
                                    <path d={items.path} />
                                </clipPath>`
                                <image
                                    width="24"
                                    height="24"
                                    href="/images/ani-gradient-bg.svg"
                                    clipPath={items.clipCommand}
                                />
                            </svg>
                            <Typography variant="h5" sx={{mt:2}} gutterBottom>{items.heading}</Typography>
                            <Typography variant="body1" textAlign="center" sx={{px:3}}>{items.body}</Typography>
                        </Grid>
                    )
                })
                }
            </Grid>
        </Container>
    )
}

export default Services