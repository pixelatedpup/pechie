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
        <div className="pr-[20px]">
            <div className="flex right-0 items-center justify-end fixed  w-full bg-white h-auto z-50">
                <section className=" flex justify-end py-[9px] pr-[10px]  items-center">
                    <div className="flex justify-end items-center h-full ">
                        <NavLink to ="/">
                            <div className="border rounded-xl px-[30px] py-[5px] transition-all duration-[300ms] bg-white
                                                hover:bg-white hover:border-black  hover:text-black hover:px-[32px] ">
                                <div className="lg:text-[18px] text-[16px] transition-all">PECHIEDEV</div>
                            </div>
                        </NavLink>
                    </div>


                </section>
            </div>
                <section className="fixed right-0 flex justify-end w-auto  pt-[60px] ">
    
                        <Nav page={textToUse}/>

                </section>
        </div>
        </>
        
    );
}

export default Header;