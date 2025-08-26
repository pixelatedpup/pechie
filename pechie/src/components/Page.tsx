import Header from "./Header";
import Body from "./Body";

const Page = () =>{
    return(
        <div className="min-h-screen flex flex-col">
            <div className="">
                <Header/>
                <div className="max-w-[1075px] mx-auto pb-[50px] pt-[30px]" >
                    <Body/>
                </div>
            </div>
        </div>
    )
}

export default Page;