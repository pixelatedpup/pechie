import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const Header = ({location = ""}) =>{
    const [textToUse, setTextToUse] = useState("");

    useEffect (() => {
        checkLocation();
        console.log(location)
    }, [location])

    const checkLocation = () => {
        switch(location){
            case("/contact"):
                setTextToUse("CONTACT");
                break;
            case("/works"):
                setTextToUse("WORKS");
                break;
            case("/info"):
                setTextToUse("INFO");
                break;
            default:
                setTextToUse("HOME");
        
        }


    }   
    return(
        <>
        <div className="flex fixed bg-white r z-50 w-full">
            <div className="flex left-0 lg:right-0 gitems-center justify-start lg:justify-end lg:fixed  w-auto lg:w-full lg:bg-white  h-auto z-50">
                <section className=" flex justify-end lg:py-[9px] lg:pr-[10px]  items-center p-[15px]">
                    <div className="flex justify-end items-center h-full ">
                        <NavLink to ="/">
                            <div className="border rounded-xl px-[30px] py-[5px] transition-all duration-[300ms] bg-white
                                                hover:bg-white hover:border-black  hover:text-black hover:px-[32px] ">
                                <div className="lg:text-[18px] text-[13px] transition-all">PECHIEDEV</div>
                            </div>
                        </NavLink>
                    </div>


                </section>
            </div>
            <div className="w-full">
                <section className="lg:fixed right-0 flex justify-end lg:w-auto lg:pt-[60px] lg:pr-[20px] p-[15px]">
    
                        <Nav page={textToUse}/>

                </section>
            </div>
        </div>
        </>
        
    );
}

export default Header;