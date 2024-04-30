import Hero from "../views/Hero";
import Profile from "../views/Profile";
import Services from "../views/Services";
import Process from "../views/Process";
import Solutions from "../views/Solutions";
import Clients from "../views/Clients";
import CaseStudies from "../views/CaseStudies";
import About from "../views/About";

const Home = ({changeMode, colourMode}) => {

    return (
    <>
        <Hero changeMode={changeMode} colourMode={colourMode}/>
        <main>
            <Profile/>
            <Services/>
            <Process/>
            <Solutions/>
            <Clients/>
            <CaseStudies/>
            <About/>
        </main>
    </>
    )
}

export default Home