import {useEffect, useState} from "react"
import { HiBars3BottomRight } from "react-icons/hi2";


export default function Navbar(){
    const [navPosition, setNavPosition] = useState(0)
    useEffect(()=>{
        const updatePosition = () => {
            let currentY = window.scrollY
            if(currentY < 400){
                setNavPosition(currentY)
            }else{
                setNavPosition(400)
            }
        }

        window.addEventListener("scroll", updatePosition)

        return () => {
            window.removeEventListener("scroll", updatePosition)
        }
    })
    return (
        <nav style={{backgroundColor: `rgba(255,255,255,${navPosition/500}`, borderColor: `rgba(0, 98, 65,${navPosition/500}`}} className={`z-20 w-full fixed top-0 flex justify-between items-center py-5 px-3 bg-white border-b-2 border-solid border-primary`}>
            <div className="header"><h1 className="text-primary font-medium text-2xl">SEUNDANGAN</h1></div>
            <div className="links hidden md:block">
                <ul className="list-none flex space-x-12 items-center">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PRODUK</a></li>
                    <li><a href="#">HARGA</a></li>
                    <li><a href="#">KONTAK</a></li>
                </ul>
            </div>
            <div className="user flex space-x-6 items-center hidden md:block">
                <a href="#">SIGN IN</a>
                <button className="button-secondary  py-1 px-3">SIGN UP</button>
            </div>
            <div className="menu md:hidden">
                <HiBars3BottomRight className="text-4xl text-primary"/>
            </div>
        </nav>
    )
}