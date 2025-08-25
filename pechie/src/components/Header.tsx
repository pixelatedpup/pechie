import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div className="flex justify-end bg-white ">
            <NavLink to ="/">
                <div className="border rounded-xl px-[30px] py-[5px] transition-all duration-[300ms]
                                    hover:bg-white hover:border-black  hover:text-black hover:px-[32px]">
                    <h2>PECHIEDEV</h2>
                </div>
            </NavLink>
        </div>
    );
}

export default Header;