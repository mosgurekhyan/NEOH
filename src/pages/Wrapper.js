import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import ScrollTop from "../components/ScrollTop/ScrollTop"
import Footer from "../components/Footer/Footer"

function Wrapper() {
  return (
    <div>
      <Navbar/>
      <ScrollTop/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Wrapper