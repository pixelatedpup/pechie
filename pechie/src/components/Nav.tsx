import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavProps{
    page?: string;
}


const Nav = ({page =""}: NavProps) => {
    const navigate = useNavigate();
    const location = useLocation();


    const [enteredNav, setEnteredNav] = useState(false)



    const goHome = () =>{
        navigate('/')
    }

    const [expandBox, setExpandBox] = useState(false);


    useEffect(() => {
        setEnteredNav(false);
    },[location])
    
    return(
        
        <>
        {page != "HOME" && 
            <article className=" w-full cursor-pointer" 
            onMouseEnter={()=> setExpandBox(true)}  
            onMouseLeave={()=> setExpandBox(false)} 
            onClick={goHome}>
                    <div 
                    onMouseEnter={()=>setEnteredNav(true)} 
                    onMouseLeave={()=>setEnteredNav(false)}
                    className="flex lg:flex-col flex-row-reverse items-center  transition-all duration-[300ms] gap-[8px]">
                        <div className={`lg:w-[60px] lg:h-[60px] 
                                        w-[50px] h-[50px]
                                        bg-[var(--primary)] transition-all duration-[300ms]
                                        rounded-xl grid grid-cols-2 p-[12px] gap-[11px]
                                        
                                        ${enteredNav && 'scale-[105%] bg-white border border-black'}
                                        
                                        ${expandBox?`lg:w-[70px] lg:h-[70px] w-[55px] h-[55px]`: ``}`}>
                                        
                                        <div className={`${page == "WORKS" || enteredNav? "bg-black": "bg-white"} `}></div>
                                        <div className={`${page == "INFO"|| enteredNav ? "bg-black": "bg-white"} `}></div>
                                        <div className={`${page == "GITHUB" || enteredNav ? "bg-black": "bg-white"} `}></div>
                                        <div className={`${page == "CONTACT" || enteredNav ? "bg-black": "bg-white"} `}></div>

                        </div>

                        <h2 className={`${enteredNav && 'text-[var(--primary)]'} lg:text-[20px] text-[14px] bg-white rounded-xl px-[9px] text-black`}> {page}</h2>
                    </div>
            </article>
        }

        </>
    );
    
}

export default Nav;