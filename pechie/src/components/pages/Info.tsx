import Elements from "../Elements";
import profile from "../../assets/Profile.png"

const Info = () =>{
    return(
        <>

        <div className="flex flex-col gap-15">
            <section className="flex lg:flex-row lg:gap-0 gap-10 flex-col-reverse  justify-center ">

                <article className="flex flex-1 ">
                    <div className="lg:w-[489px] lg:h-[341px] w-auto h-auto bg-black rounded-xl p-[30px]">
                        <p className="text-white">
                            Hi, I’m Peter Chiemeka (PECHIE), a Computer Science graduate specializing in Frontend Software Engineering and UX/UI Design. Over the past two years, I’ve built projects using JavaScript, 
                            TypeScript, Python, and C++, both during and after my studies. I’m curious, dedicated, and always ready to put in the effort to get things done.
                            In my free time, I create illustrations inspired by music and shows, some of which have led to commissioned work. I’m also passionate about building music electronics with Arduino and C++.
                            Currently, I work as a freelance software engineer, always eager to contribute my skills to deliver the best results for your projects. If you think I’m a good fit, feel free to reach out.
                        </p>
                    </div>
                </article>

                <article className="flex flex-1 sm:justify-center md:justify-center">
                    <div className="w-[227px] h-[341px] bg-black ">
                        <img src={profile}/>
                    </div>
                </article>


            </section>

            <section className="flex flex-col  h-auto">
                <h2>Skills</h2>
                <div className="flex lg:flex-row flex-col justify-evenly border border-black rounded-xl p-[20px]">
                    <Elements tag="language"/>
                    <Elements tag="other"/>
                    <Elements tag="tool"/>
                </div>
            </section>

            <section className="flex flex-col  h-auto gap-5">
                <h2>Experience</h2>

                <article className="flex flex-col gap-5 p-[20px] border border-black rounded-xl">

                    <div>
                    
                    <p>
                        <strong>Junior Front-End Developer</strong><br/>
                        Arch Arcades | May 2025 - July 2025<br/>
                    </p>
                    <ul>
                        <li><p>Conducted UX research through user interviews and defined the overall project vision</p></li>
                        <li><p>Produced wireframes and mockups that maintained team focus and guided project progress.</p></li>
                        <li><p>Implemented an interactive prototype in Figma to support community-driven feedback.</p></li>
                        <li><p>Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</p></li>
                        <li><p>Integrated a backend server to fetch essential data from an arcade games API.</p></li>
                    </ul>
                    
                    </div>
                    <div>
                                        <p>
                        <strong>Junior Front-End Developer</strong><br/>
                        Arch Arcades | May 2025 - July 2025<br/>
                    </p>
                    <ul>
                        <li><p>Conducted UX research through user interviews and defined the overall project vision</p></li>
                        <li><p>Produced wireframes and mockups that maintained team focus and guided project progress.</p></li>
                        <li><p>Implemented an interactive prototype in Figma to support community-driven feedback.</p></li>
                        <li><p>Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</p></li>
                        <li><p>Integrated a backend server to fetch essential data from an arcade games API.</p></li>
                    </ul>
                    </div>
                </article>
            </section>

            <section className="flex flex-col gap-5  h-auto">
                <h2>Education/Certificates</h2>
                    <article className="flex flex-col gap-5 p-[20px] border border-black rounded-xl">

                        <div>
                        
                            <p>
                                <strong>Junior Front-End Developer</strong><br/>
                                Arch Arcades | May 2025 - July 2025<br/>
                            </p>
                            <ul>
                                <li><p>Conducted UX research through user interviews and defined the overall project vision</p></li>
                                <li><p>Produced wireframes and mockups that maintained team focus and guided project progress.</p></li>
                                <li><p>Implemented an interactive prototype in Figma to support community-driven feedback.</p></li>
                                <li><p>Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</p></li>
                                <li><p>Integrated a backend server to fetch essential data from an arcade games API.</p></li>
                            </ul>
                        
                        </div>
                        <div>
                            <p>
                                <strong>Junior Front-End Developer</strong><br/>
                                Arch Arcades | May 2025 - July 2025<br/>
                            </p>
                            <ul>
                                <li><p>Conducted UX research through user interviews and defined the overall project vision</p></li>
                                <li><p>Produced wireframes and mockups that maintained team focus and guided project progress.</p></li>
                                <li><p>Implemented an interactive prototype in Figma to support community-driven feedback.</p></li>
                                <li><p>Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</p></li>
                                <li><p>Integrated a backend server to fetch essential data from an arcade games API.</p></li>
                            </ul>
                        </div>
                </article>
                
            </section>
        </div>
        </>
    );
}

export default Info;