import {useRef, useEffect} from 'react';
import { Container, Stack, Box, Typography, List, ListItem, ListItemText, ListItemIcon, useTheme } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import ConstructionIcon from '@mui/icons-material/Construction';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';


import Divider from "../components/Divider.js";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const flexStyle = {
    paddingTop: 5,
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    gap: 4
}

const cardStyle = {
    width:260, 
    borderWidth: "3px",
    borderTopStyle: "solid",
    borderRightStyle: "solid",
    borderRadius: "0px 15px 0px 0px"
}

const cardHeading = {
    marginTop:"-17px",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderRadius: "0px 0px 10px 0px",
    borderWidth: "3px",
    textTransform: "uppercase",
    paddingBottom: "5px"
}

const Process = () => {
    const theme = useTheme();
    
    const headingBGColor = { 
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#FFF",
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"
    };
    const cardBorderColor = { borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc" };
    
    const processRef = useRef(null);
    const tl = useRef(null);
    
    useEffect(() => {
        
        let ctx = gsap.context(() => {
            
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".discuss-title",
                    toggleActions: "restart none none none"
                }
            })

            tl.current.from(".discuss-title", { duration: 0.8, text: "-------", ease: "none", });
            tl.current.from(".design-title", { duration: 0.8, text: "------", ease: "none", });
            tl.current.from(".develop-title", { duration: 0.8, text: "-------", ease: "none", });

            gsap.from(".discuss-dotpoints", {
                scrollTrigger: {
                    trigger: ".discuss-dotpoints",
                    toggleActions: "restart none none none"
                },
                opacity: 0,
                x: -50,
                duration: 3,
                delay: 0.3
            });

            gsap.from(".design-dotpoints", {
                scrollTrigger: {
                    trigger: ".design-dotpoints",
                    toggleActions: "restart none none none"
                },
                opacity: 0,
                x: -50,
                duration: 3,
                delay: 0.3
            });

            gsap.from(".develop-dotpoints", {
                scrollTrigger: {
                    trigger: ".develop-dotpoints",
                    toggleActions: "restart none none none"
                },
                opacity: 0,
                x: -50,
                duration: 3,
                delay: 0.3
            });
        
        }, processRef)
        
        return () => ctx.revert();

    }, []);

    return (
        <Container component="section" ref={processRef} sx={{pt:{md:30,sm:25, xs:20}}} maxWidth="md" fixed>
            <Stack direction="column" alignItems="center" spacing={3}>
                <Typography variant="h3" component="h4" align="center" sx={{pb:3}}>Process</Typography>
                <Divider/>
                <Box sx={flexStyle}>
                    <Box sx={{...cardBorderColor, ...cardStyle}}>
                        <Typography className="discuss-title"variant="h6" component="h5" sx={{...cardHeading, ...headingBGColor, width: 94}}>Discuss</Typography>
                        <List className="discuss-dotpoints" dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <ZoomOutMapIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Scope"
                                    secondary="Outline resources, timeline and desired functionality"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <GroupsIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Audience"
                                    secondary="Investigate competitors in the business domain and establish personas of users"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CrisisAlertIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Goals"
                                    secondary="Define the goal of the site and optimal user flow"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PsychologyAltIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Strategy"
                                    secondary="Select target keywords for SEO and plan a roadmap for future content"
                                />
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{...cardBorderColor, ...cardStyle, mt:{md:10, sm: 10, xs: 3}}}>
                        <Typography className="design-title" variant="h6" component="h5" sx={{...cardBorderColor, ...cardHeading, ...headingBGColor, width: 80}}>Design</Typography>
                        <List className="design-dotpoints" dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <AutoAwesomeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Branding"
                                    secondary="Design brand guidelines outlining colour scheme, font scheme and iconography"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PhotoLibraryIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Asset Library"
                                    secondary="Create or source a multimedia library in accordance to the brand guidelines"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ViewQuiltIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Prototyping"
                                    secondary="Produce a high fidelity Figma prototype and component library"
                                />
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{...cardBorderColor, ...cardStyle, mt:{md:20, sm: 0, xs: 3}}}>
                        <Typography className="develop-title" variant="h6" component="h5" sx={{...cardBorderColor, ...cardHeading, ...headingBGColor, width: 95}}>Develop</Typography>
                        <List className="develop-dotpoints" dense={true}>
                            <ListItem>
                                <ListItemIcon>
                                    <ConstructionIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Build"
                                    secondary="Develop the site using Wordpress, Hubspot, Shopify or React based on project requirements"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AllInclusiveIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Continued Support"
                                    secondary="Continued support to expand the scope of the site and ensure stability"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default Process