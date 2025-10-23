import Header from "./Header";
import Body from "./Body";
import { useLocation } from "react-router-dom";

const Page = () =>{
    const location = useLocation();
    return(
        <div className="min-h-screen flex flex-col">
            <div className="">
                <Header location={location.pathname}/>
                <div className="max-w-[1260px] mx-auto pb-[50px]  lg:mt-[60px] mt-[100px] lg:px-[0px] px-[50px]" >
                    <Body/>
                </div>
            </div>
        </div>
    )
}

export default Page;