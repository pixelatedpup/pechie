import Button from "./Button";
import Description from "./Description";
import Thumbnail from "./Thumbnail";
import { useState } from "react";

interface ContentProps{
    title?:string;
    github?:string;
    figma?:string;
    deploy?:string;
    tags?:string[];
    videos:string[];
    description?: string;
    small?:boolean;
}


const Content = ({title="Luna Comics",github,figma,deploy, description,tags,videos,small=false}:ContentProps) =>{
    
    const[currentVideo, setCurrentVideo] = useState(0);
    return(
        <div className="flex flex-col w-auto lg:w-[742px] h-auto bg-[var(--darker)]  border rounded-xl py-[50px]">
            <div className="flex lg:flex-row flex-col items-center lg:justify-center w-[600px] h-[286.5px] gap-[20px] w-auto h-auto">
                <Thumbnail src={videos[currentVideo]} autoPlay={true}/>
                <div className="sm:w-[283.85px] md:w-[283.85px] lg:w-auto ">
                    <div className="flex lg:flex-col flex-row lg:h-[282px] justify-evenly h-auto" >
                        {videos.map((video,index)=>(
                            <div onClick={() => setCurrentVideo(index)} className={`  hover:border hover:border-[var(--primary)] ${currentVideo == index && 'scale-[109%] border border-[3px] border-[var(--primary)]'}`}>
                                <Thumbnail src={video} custom="lg:w-[108px] lg:h-[77px] w-[60px] h-[42.78px]"/>
                            </div>
                        ))}

                        {/* <Thumbnail src={images[3]} custom="lg:w-[108px] lg:h-[77px] w-[77.142px] h-[55px]"/> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center gap-[5px] mt-[20px] w-auto">
                {!small &&
                <h2 className="text-white text-regular text-center">{title ?? "Luna Comics"}</h2>}
                <Button text="OPEN" link={deploy}/>
            </div>
                <section className="flex justify-center  mt-[8px] p-[20px]">
                    <Description>
                        <div className="flex flex-col gap-5 py-[20px] px-[20px]">
                            <article className="flex flex-col gap-5">
                                {/* <h3 className="flex justify-start">Tools</h3> */}
                                
                                {tags && (
                                <div className="flex  ">
                                    <ul className="flex items-center lg:gap-5 gap-[6px] flex-wrap w-full ">
                                        {tags.map((tag) => (
                                            <div className="bg-[var(--greyC)] rounded-xl text-[var(--darkC)] h-[24px] flex items-center justify-center" >
                                                <li className="text-center px-[12px] " key={tag}><div className="text-[13px] lg:text-[14px]">{tag}</div></li>
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