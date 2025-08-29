import Button from "./Button";
import Description from "./Description";
import Thumbnail from "./Thumbnail";

interface ContentProps{
    title?:string;
    github?:string;
    figma?:string;
    deploy?:string;
    tags?:string[];
    description?: string;
}


const Content = ({title="Luna Comics",github,figma,deploy, description,tags}:ContentProps) =>{
    return(
        <div className="flex flex-col w-auto lg:w-[742px] h-auto bg-black rounded-xl py-[50px]">
            <div className="flex lg:flex-row flex-col items-center lg:justify-center w-[600px] h-[286.5px] gap-[68px] w-full h-auto">
                <Thumbnail/>
                <div className="flex lg:flex-col flex-row lg:h-[282px] lg:justify-evenly h-auto " >
                    <Thumbnail custom="w-[108px] h-[77px]"/>
                    <Thumbnail custom="w-[108px] h-[77px]"/>
                    <Thumbnail custom="w-[108px] h-[77px]"/>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center gap-[5px] mt-[20px] w-auto">
                <h2 className="text-white text-regular text-center">{title ?? "Luna Comics"}</h2>
                <Button text="DEPLOY"/>
            </div>
                <section className="flex justify-center  mt-[33px] p-[30px]">
                    <Description>
                        <div className="flex flex-col gap-5 py-[20px] px-[20px]">
                            <article className="flex flex-col gap-5">
                                <h3 className="flex justify-start">Tools</h3>
                                
                                {tags && (
                                <div className="flex justify-evenly ">
                                    <ul className="flex items-center gap-5 flex-wrap">
                                        {tags.map((tag) => (
                                            <div className="px-[10px] bg-[#656565] rounded-xl text-white w-[98px] h-[22px] flex items-center justify-center" >
                                                <li className="text-center " key={tag}>{tag}</li>
                                            </div>
                                        ))}
                                    </ul>
                                </div> 
                                )}
                            </article>
                            <article>
                                <h4>{description}</h4>
                            </article>
                            <article className="flex justify-center gap-5">
                                <Button text="Github" type="dark"/>
                                <Button text="Figma" type="secondary"/>
                            </article>
                        </div>


                    </Description>
                </section>
         </div>
      
    )
}

export default Content;