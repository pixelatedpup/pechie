import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavProps{
    page?: string;
}


const Nav = ({page =""}: NavProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeBox, setActiveBox] = useState(false)
    const [enteredNav, setEnteredNav] = useState(false)



    const goHome = () =>{
        navigate('/')
    }

    const [expandBox, setExpandBox] = useState(false);

    const navEnter = () => {
        setEnteredNav(true)
    }

    useEffect(() => {
        setEnteredNav(false);
    },[location])
    
    return(
        
        <>
        {page != "HOME" && 
            <article className="w-[207px w-full cursor-pointer" 
            onMouseEnter={()=> setExpandBox(true)}  
            onMouseLeave={()=> setExpandBox(false)} 
            onClick={goHome}>
                    <div 
                    onMouseEnter={()=>setEnteredNav(true)} 
                    onMouseLeave={()=>setEnteredNav(false)}
                    className="flex flex-col items-center  transition-all duration-[300ms]">
                        <div className={`lg:w-[90px] lg:h-[90px] 
                                        w-[63px] h-[63px]
                                        bg-[var(--primary)] transition-all duration-[300ms]
                                        rounded-xl grid grid-cols-2 p-[12px] gap-[11px]
                                        ${enteredNav && 'scale-[110%] bg-black border border-[var(--primary)]'}
                                        
                                        ${expandBox?`lg:w-[100px] lg:h-[100px] w-[73px] h-[73px]`: ``}`}>
                                        
                                        <div className={`${page == "WORKS" || enteredNav? "bg-white": "bg-black"}`}></div>
                                        <div className={`${page == "INFO"|| enteredNav ? "bg-white": "bg-black"}`}></div>
                                        <div className={`${page == "GITHUB" || enteredNav ? "bg-white": "bg-black"}`}></div>
                                        <div className={`${page == "CONTACT" || enteredNav ? "bg-white": "bg-black"}`}></div>

                        </div>

                        <div className={`${enteredNav && 'text-[var(--primary)]'} lg:text-[20px] text-[14px]`}> {page}</div>
                    </div>
            </article>
        }

        </>
    );
    
}

export default Nav;