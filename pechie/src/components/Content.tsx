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
            <div className="flex lg:flex-row flex-col items-center lg:justify-center w-[600px] h-[286.5px] gap-[20px] w-auto h-auto">
                <Thumbnail/>
                <div className="flex lg:flex-col flex-row lg:h-[282px] lg:justify-evenly h-auto " >
                    <Thumbnail custom="lg:w-[108px] lg:h-[77px] w-[77.142px] h-[55px]"/>
                    <Thumbnail custom="lg:w-[108px] lg:h-[77px] w-[77.142px] h-[55px]"/>
                    <Thumbnail custom="lg:w-[108px] lg:h-[77px] w-[77.142px] h-[55px]"/>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center gap-[5px] mt-[20px] w-auto">
                <h2 className="text-white text-regular text-center">{title ?? "Luna Comics"}</h2>
                <Button text="DEPLOY" link={deploy}/>
            </div>
                <section className="flex justify-center  mt-[33px] p-[30px]">
                    <Description>
                        <div className="flex flex-col gap-5 py-[20px] px-[20px]">
                            <article className="flex flex-col gap-5">
                                <h3 className="flex justify-start">Tools</h3>
                                
                                {tags && (
                                <div className="flex  ">
                                    <ul className="flex items-center gap-5 flex-wrap w-full ">
                                        {tags.map((tag) => (
                                            <div className="bg-[#656565] rounded-xl text-white h-[24px] flex items-center justify-center" >
                                                <li className="text-center px-[15px]" key={tag}>{tag}</li>
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
                                <Button text="Github" type="dark" link={github}/>
                                <Button text="Figma" type="secondary" link={figma}/>
                            </article>
                        </div>


                    </Description>
                </section>
         </div>
      
    )
}

export default Content;