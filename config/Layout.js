import { Outlet } from "react-router-dom";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const Layout = ({changeMode, colourMode}) => {
  return(
    <>
      <NavMenu changeMode={changeMode} colourMode={colourMode}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout