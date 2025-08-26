import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () =>{
    return(
        <section className="fixed right-0 flex flex-col justify-end w-[400px] pr-[30px]">
            <div className="flex justify-end  ">
                <NavLink to ="/">
                    <div className="border rounded-xl px-[30px] py-[5px] transition-all duration-[300ms]
                                        hover:bg-white hover:border-black  hover:text-black hover:px-[32px] ">
                        <h2>PECHIEDEV</h2>
                    </div>
                </NavLink>
            </div>

            <div className="flex justify-end mt-[15px]">
                <Nav page="WORKS"/>
            </div>
        </section>

        
    );
}

export default Header;