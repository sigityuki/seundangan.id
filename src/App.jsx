import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"

export default function App(){
    return(
        <>
        <Navbar/>
        <div className="">    
            <Home/>
            <AboutUs/>
        </div>
        </>
    )
}