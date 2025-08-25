import { NavLink } from "react-router-dom";

const Home = () =>{
    return(
        <>

        <div className="flex justify-center items-center">
        <section className=" grid grid-cols-2 w-[302px] h-[400px] pt-[180px] gap-y-10 gap-x-5">
            <article>
                <div >
                    <NavLink to="/works"><div className="border border-black w-[140px] h-[140px] rounded-xl
                                                         hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]"></div></NavLink>
                    <h2 className="text-center">Works</h2>
                </div>
            </article>

            <article>
                <div>
                    <NavLink to="/info"><div className="border border-black w-[140px] h-[140px] rounded-xl
                                                        hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]"></div></NavLink>
                    <h2 className="text-center">Info</h2>
                </div>
            </article>

            <article>
                <div>
                    <NavLink to="/works"><div className="border border-black w-[140px] h-[140px] rounded-xl
                                                         hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]"></div></NavLink>
                    <h2 className="text-center">GitHub</h2>
                </div>
            </article>

            <article>
                <div>
                    <NavLink to="/contact"><div className="border border-black w-[140px] h-[140px] rounded-xl
                                                            hover:scale-[108%] hover:bg-black hover:text-white transition-all duration-[300ms]"></div></NavLink>
                    <h2 className="text-center">Contact</h2>
                </div>
            </article>
        </section>
        </div>
        </>
    );
}

export default Home;