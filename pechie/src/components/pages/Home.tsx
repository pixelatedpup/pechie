import { NavLink } from "react-router-dom";
import github from "../../assets/github.png"
import works from "../../assets/works.png"
import info from "../../assets/info.png"
import contact from "../../assets/contact.png"

const Home = () =>{
    return(
        <>

        <div className="flex justify-center items-center pt-[85px]">
        <section className=" grid grid-cols-2 w-[302px] h-[400px]  gap-y-10 gap-x-5">
            <article>
                <div >
                    <NavLink to="/works">
                        <div className="group flex justify-center items-center border border-black w-[140px] h-[140px] rounded-xl
                                        hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]">
                                        <img  className="group-hover:invert transition-all duration-[300ms]" src={works} />             
                        </div>
                                                         
                    </NavLink>
                    <h2 className="text-center">Works</h2>
                </div>
            </article>

            <article>
                <div>
                    <NavLink to="/info">
                        <div className="group flex justify-center items-center border border-black w-[140px] h-[140px] rounded-xl
                                        hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]">
                                    <img className="group-hover:invert transition-all duration-[300ms]" src={info} />             
                        </div>   
                    </NavLink>
                    <h2 className="text-center">Info</h2>
                </div>
            </article>

            <article>
                <div>
                    <a href="https://github.com/pixelatedpup">
                    <div className="group flex justify-center items-center border border-black w-[140px] h-[140px] rounded-xl
                                    hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]">

                                    <img className="group-hover:invert transition-all duration-[300ms]" src={github} />    
                    </div>
                    </a>
                    <h2 className="text-center">GitHub</h2>
                </div>
            </article>

            <article>
                <div>
                    <NavLink to="/contact">
                    <div className="group flex justify-center items-center border border-black w-[140px] h-[140px] rounded-xl
                                    hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]">
                                <img className="group-hover:invert transition-all duration-[300ms]" src={contact} />             
                    </div>
                    </NavLink>
                    <h2 className="text-center">Contact</h2>
                </div>
            </article>
        </section>
        </div>
        </>
    );
}

export default Home;