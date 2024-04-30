import {useRef, useEffect} from 'react';
import { Container, Box, Typography, useTheme } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const containerLayout = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
}

const Profile = () => {

    const theme = useTheme();
    const profileRef = useRef(null);
    const tl = useRef(null);
    const tl2 = useRef(null);

    const profileHeadline = {
        display: "inline",
        lineHeight: "1",
        color: theme.palette.mode === "dark" ?  "#FFFFFF33" : "#00000033",
        backgroundImage: "linear-gradient(0.07turn, #82d0ff, #ffa2ff, #d6b7ff, #ff97cc)",
        backgroundClip: "text",
        backgroundRepeat: "no-repeat",
        backgroundSize: "350px 1000px",
        backgroundPositionX: 0,
        backgroundPositionY: 0
    }

    const profileText = {
        display: "inline",
        fontSize: "18px",
        fontWeight: "600",
        color: theme.palette.mode === "dark" ?  "#FFFFFF33" : "#00000033",
        backgroundImage: theme.palette.mode === "dark" ?  "linear-gradient(90deg, #FFF, #FFF)" : "linear-gradient(90deg, #000, #000)",
        backgroundClip: "text",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    }

    const textBorder = {
        flexBasis: 340, 
        flexGrow: "1", 
        pr: 3.5,
        borderWidth: "3px",
        borderTopStyle: "solid",
        borderRightStyle: "solid",
        borderRadius: "0px 15px 0px 0px",
        mx: 3,
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"
    }
    
    const profileTitle = {
        marginTop:"-17px",
        borderRightStyle: "solid",
        borderBottomStyle: "solid",
        borderRadius: "0px 0px 10px 0px",
        borderWidth: "3px",
        textTransform: "uppercase",
        paddingBottom: "5px",
        marginBottom: "30px",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#FFF",
        borderColor: theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc",
        width: 105
    }

    useEffect(() => {
        
        let ctx = gsap.context(() => {

            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#profile-outline",
                    toggleActions: "restart none none none"
                }
            })
            tl.current.from("#profile-outline", {"strokeDashoffset" :"1000", duration: 2.8})
            tl.current.from("#profile-img", {opacity :0, x:30, duration: 2, delay:-1.8})

            tl2.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".profile-headline",
                    scrub: 3,
                    end: "bottom 30%"
                }
            })
            tl2.current.from(".profile-headline", {backgroundPositionX: "350"})
            tl2.current.from(".profile-text", {backgroundSize: "0% 100%"})

            gsap.to(".profile-headline", {backgroundPositionY: "-900px", duration: 6}).repeat(-1).yoyo(true)
        
        }, profileRef)
        
        return () => ctx.revert();

    }, []);

    return (
        <Container component="section" ref={profileRef} sx={{pt:{md:20,sm:15, xs:10}}} maxWidth={"lg"} fixed>
            <Box sx={containerLayout}>
                <svg width="350" height="350" viewBox="0 0 400 400" overflow="visible">
                    <defs id="defs1">
                        <clipPath id="clipBox">
                            <path d="M10,68 H380 V350 H10 Z" />
                        </clipPath>`
                        <filter id="shadow" colorInterpolationFilters="sRGB">
                            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.2"/>
                        </filter>
                    </defs>
                    <image
                        x="10"
                        y="67"
                        width="380"
                        href="/images/ani-gradient-bg.svg"
                        clipPath="url(#clipBox)"
                    />
                    <path 
                        id="icon-brdr2" 
                        d="m26.631 42.326c-14.517 0-26.631 12.052-26.631 26.494v271.36c0 14.434 12.09 26.484 26.6 26.512l95.309 0.18164v33.129h156.18v-32.826l95.244 0.18164c14.525 0.02769 26.666-12.025 26.666-26.475v-272.06c0-14.442-12.117-26.494-26.635-26.494zm-4.3789 25.264h355.49v272.2l-355.49-0.64453z"
                        fill="#fff"
                        filter="url(#shadow)"
                    />
                    <path 
                        id="profile-outline" 
                        d="m293.56 334.46c-0.46325-1.0418-2.321-1.1922-2.259-2.0604 0.062-0.86819-0.13633-1.786-0.47095-2.8154-2.0165-4.5938 2.5191-7.5623 4.7342-11.299 0.43462-6.6558 6.5884-7.7804 7.0765-14.263 0.12393-1.7612 0.24786-3.8944 0.16111-5.296-0.0867-1.4015-0.38419-2.0712-0.35939-2.6294 1.1024-24.808 3.8517 13.705 6.3701-20.638-2.1119-9.2712 5.4067-17.422 3.3214-26.529-0.32222-1.3395-0.66922-2.4806-1.1526-3.2867-0.48334-0.8062-1.103-1.2775-1.0286-1.7984 0.0743-0.52092 0.8427-1.0915 1.5491-1.6868 3.9369-4.6852 6.7615-13.33 5.2298-19.274-3.0689-15.02-9.1594-28.841-15.38-42.74-1.0163-2.2821-1.8342-4.2417-4.9945-11.038-3.1603-6.7968-8.6626-18.431-12.604-26.232-3.9414-7.8013-6.3205-11.77-7.6093-13.829-1.2889-2.0588-1.4872-2.2077-2.962-4.9115-1.4748-2.7038-4.2261-7.9625-6.5808-11.807-2.3547-3.8449-4.3128-6.2757-5.5521-7.9625-1.8159-3.835-4.195-4.6438-7.6713-6.6479-10.042-8.8074-18.721-8.8938-29.731-12.589-1.165-0.48371-2.0573-1.3767-3.3585-2.5053-5.4311-4.7107-28.291-11.938-29.929-13.42-2.4256-3.7687-5.1807-6.3673-9.4683-7.8014-0.66923-0.22326-1.1402-0.39689-1.3508-0.91778-0.21067-0.52093-0.16111-1.3891-0.22308-2.3689-0.26874-4.2449-2.2066-9.49-3.9286-10.567-0.49575-0.31008-1.0906-0.4341-1.4872-0.49611-0.3966-0.06208-0.59488-0.06208-0.50813-0.76898 0.0867-0.70698 0.45855-2.1209 0.57009-3.386 0.26619-3.0191-1.3653-10.817-4.0836-19.944-0.46846-1.5728-1.6297-2.4806-2.2804-3.2681-0.65064-0.78758-1.196-1.2713-1.8342-1.5131-0.63824-0.24186-1.3694-0.24186-1.9582-0.4527-0.58867-0.21085-1.0349-0.63254-1.735-1.5566-0.70017-0.924-1.6544-2.3503-2.9929-3.5719-5.4358-4.9617-16.189-4.7-24.743-2.0588-1.1777 0.36361-2.0263 0.72555-3.1851 0.94261-1.1588 0.21705-2.5963 0.37828-4.0959 0.80619-6.5095 2.1411-10.261 8.7072-13.608 14.945-2.8382 5.2444-0.8803 11.041 0.84893 16.272 0.47714 1.4325 0.84893 2.4992 1.2703 4.0495 0.4214 1.5503 0.89235 3.5843 1.2269 5.0417 1.0894 3.8802-0.35036 6.7611-0.19819 10.629 0 0.67598-0.0743 1.4325 0.0373 2.5611 0.15601 7.2456 4.7711 11.32 8.5451 16.75 1.0968 1.507 2.3732 2.8712 3.2718 3.8324 0.89856 0.96124 1.419 1.5193 1.5801 1.8542 11.561 24.031-4.244-6.5308-5.1866 11.993-0.068 1.3395-0.10534 2.6914-0.1859 3.4975-0.0806 0.80618-0.20449 1.0666-0.78078 1.5256-13.084 10.42-1.7969 1.8906-8.6257 8.5331-0.66305 0.64494-1.6799 0.84663-2.144 1.6124-3.0716 5.0679 0.14238 7.5588-10.299 13.258-0.61345 0.33488-1.1092 0.86819-1.7288 1.5503-0.61968 0.68215-1.3632 1.5131-2.0138 3.0696-0.65064 1.5566-1.2083 3.8386-1.8713 7.3177-0.66305 3.479-1.4314 8.1547-2.0138 11.063-0.58247 2.9084-0.97908 4.0495-1.2269 6.2137-0.24787 2.1643-0.34701 5.3518-0.43376 9.4632-1.0994 12.954 1.3342 26.692-1.7968 39.478-0.42138 1.6186-0.95426 3.1937-1.3136 4.5704-0.3594 1.3767-0.5453 2.555-0.5391 3.5038 0.01811 2.8631 1.1049 1.9175 4.2447 9.5811 0.50813 1.2402 0.80556 2.0465 0.77456 2.7038-0.01013 0.2149-4.5269 7.3952-4.9015 9.7858-0.0992 0.63259 0.0743 1.4884 0.42137 2.3689 0.34701 0.88057 0.86753 1.786 1.5058 2.927 8.6291 15.427 5.1174 4.9853 5.5211 11.727 0.04678 0.781 0.5577 0.98599 0.42136 1.5628-0.13633 0.5768-0.5329 1.3953-0.79936 2.2697-0.26644 0.87443-0.40278 1.8046-0.39038 2.9456 0.12864 2.8193 0.23999 5.8666 2.5344 7.7765 0.41518 0.29766 0.68782 0.43408 0.88611 0.60153 0.1983 0.16744 0.32223 0.36588 0.0992 0.87442-2.0248 3.2452-1.4921 7.2702 0.99142 10.127 0.34702 0.35348 0.55769 0.4651 0.62585 0.62013 0.0682 0.15504-6e-3 0.35347-0.12393 0.57673-0.11774 0.22325-0.27884 0.4713-0.51431 0.92401-0.23548 0.45271-0.5453 1.1101-0.60726 1.972 1.8912 8.7056 4.2108 17.136 5.5212 25.965 0.30364 1.8852 0.61347 2.927 0.99145 3.7518 0.37799 0.82479 0.82415 1.4325 1.2393 1.848 6.4413 6.4461 0.56388 1.6992 4.7838 8.8369 0.43997 0.74416 0.87376 1.1659 1.4252 1.5503 2.7872 1.9432 4.5225 0.24674 5.137 0.83103 0.24787 0.23566 0.28504 0.85581 0.46475 1.6682 0.1797 0.81238 3.9645 4.33 4.454 5.6324"
                        fill="none" 
                        stroke={theme.palette.mode === "dark" ? "#AE7EAA" : "#ff97cc"} 
                        strokeLinecap="round" 
                        strokeWidth="10"
                        strokeDasharray="1000" 
                        strokeDashoffset="0"
                    />
                    <image
                        id="profile-img"
                        width="400"
                        height="400"
                        href="/images/M-Profile2.webp"
                    />
                    <path 
                        id="snap-lines" 
                        d="m44.092 85v77.99h20.137v-57.854h49.85v-20.137zm291.68 157.34v57.854h-49.848v20.137h69.984v-77.99z" 
                        fill="#FFF"
                        filter="url(#shadow)"
                    />
                </svg>
                <Box sx={textBorder}>
                    <Typography variant="h6" component="h1" sx={profileTitle}>About Me</Typography>
                    <Typography className="profile-headline" variant="h2" component="h2" sx={profileHeadline}>Hi, I'm Thien</Typography>
                    <br/>
                    <br/>
                    <Typography className="profile-text" sx={profileText}>
                        I'm a UI/UX Developer from Adelaide, Australia. 
                        I am passionate about design and enjoy creating engaging digital experiences. 
                        I am an experienced web developer as well as a capable graphic designer. 
                        As my skills cover a broad range of the front end spectrum, I am able to approach web design in a more holistic manner.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Profile