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
            <article className="w-[207px w-full cursor-pointer" 
            onMouseEnter={()=> setExpandBox(true)}  
            onMouseLeave={()=> setExpandBox(false)} 
            onClick={goHome}>
                    <div 
                    onMouseEnter={()=>setEnteredNav(true)} 
                    onMouseLeave={()=>setEnteredNav(false)}
                    className="flex lg:flex-col flex-row-reverse items-center  transition-all duration-[300ms] gap-[8px]">
                        <div className={`lg:w-[90px] lg:h-[90px] 
                                        w-[50px] h-[50px]
                                        bg-[var(--primary)] transition-all duration-[300ms]
                                        rounded-xl grid grid-cols-2 p-[12px] gap-[11px]
                                        border
                                        ${enteredNav && 'scale-[105%] bg-white border border-black'}
                                        
                                        ${expandBox?`lg:w-[100px] lg:h-[100px] w-[5px] h-[5px]`: ``}`}>
                                        
                                        <div className={`${page == "WORKS" || enteredNav? "bg-black": "bg-white"} border`}></div>
                                        <div className={`${page == "INFO"|| enteredNav ? "bg-black": "bg-white"} border`}></div>
                                        <div className={`${page == "GITHUB" || enteredNav ? "bg-black": "bg-white"} border`}></div>
                                        <div className={`${page == "CONTACT" || enteredNav ? "bg-black": "bg-white"} border`}></div>

                        </div>

                        <h2 className={`${enteredNav && 'text-[var(--primary)]'} lg:text-[20px] text-[14px] bg-white rounded-xl px-[9px] text-black`}> {page}</h2>
                    </div>
            </article>
        }

        </>
    );
    
}

export default Nav;