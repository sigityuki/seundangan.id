// import headerImg from "./../assets/images/header-img.jpg"
export default function Home(){
    return(
        <section id="home" className="w-full h-screen overflow-hidden">
            {/* <img src="./../../public/bg-home.png" className="fixed z-0 opacity-5 w-screen h-auto" alt="" /> */}
            <div className=" 2xl:container m-auto h-screen flex md:space-x-36 justify-center items-center px-10">
                <div className=" md:flex md:justify-end hidden">
                    <div className="h-auto w-auto">
                        <img src="./../assets/images/header-img.jpg" alt="" className="h-[40rem] w-auto  rounded-xl"/>
                    </div>    
                </div>            
                <div className="">
                    <h1 className="header-text">Website</h1>
                    <h1 className="header-text">Undangan</h1>
                    <h1 className="header-text">Digital</h1>
                    <h1 className="text-5xl w-m my-8">
                    Custom undangan digital <br/> sesukamu di <span className="text-primary">Seundangan</span>
                    </h1>
                    <button className="button-primary button-shadow text-2xl py-3 px-7">BUAT UNDANGAN</button>
                </div>            
            </div>
        </section>
    )
}