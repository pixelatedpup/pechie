import Header from "./Header";
import Body from "./Body";

const Page = () =>{
    return(
        <div className="min-h-screen flex flex-col">
            <div className="mx-[90px]">
                <Header/>
                <div className="max-w-[1075px] mx-auto pb-[50px]" >
                    <Body/>
                </div>
            </div>
        </div>
    )
}

export default Page;