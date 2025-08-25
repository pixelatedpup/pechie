import Button from "./Button";
import Description from "./Description";
import Thumbnail from "./Thumbnail";

interface ContentProps{
    title?:string;
    github?:string;
    figma?:string;
    deploy?:string;
    tags?:string[];
}


const Content = ({title="Luna Comics",github,figma,deploy,tags}:ContentProps) =>{
    return(
        <div className="w-[742px] h-[804px] bg-black rounded-xl">
            <div className="flex flex-row justify-center w-[600px] h-[286.5px] gap-[68px] pt-[61px] w-full h-auto">
                <Thumbnail/>
                <div className="flex flex-col h-[282px] justify-evenly" >
                    <Thumbnail custom="w-[108px] h-[77px]"/>
                    <Thumbnail custom="w-[108px] h-[77px]"/>
                    <Thumbnail custom="w-[108px] h-[77px]"/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 mt-[30px]">
                <h2 className="text-white text-regular text-center">{title ?? "Luna Comics"}</h2>
                <Button text="DEPLOY"/>
            </div>

            <div className="flex justify-center mt-[35px]">
                <Description>
                    <div className="p-[30px]">
                        <h1>Tags</h1>
                        <h4>Lorem ipsum dolor sit amet. Aut possimus consequatur ab omnis nostrum qui optio saepe aut exercitationem facilis qui dolorem officiis et omnis quia aut earum quia. Non consequuntur distinctio ad deserunt numquam ut minima dolor id unde esse! Non alias facilis et facere rerum ea doloribus saepe. Et numquam ducimus ad quibusdam omnis rem eveniet obcaecati.</h4>
                    </div>
                </Description>
            </div>
        </div>
    )
}

export default Content;