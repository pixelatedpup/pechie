import Content from "../Content";
import NavBar from "../NavBar"
import {works} from "../../assets/AllWorks"
const Works = () =>{
    return(
        <>
            <div className="flex flex-row justify-center w-full mt-[18px] gap-5">
                <div >
                    <NavBar works={works}/>
                </div>
                <div >
                    <Content/>
                </div>
            </div>
        </>
    );
}

export default Works;