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
                            Hi, I’m <strong className="text-[var(--primary)]">Peter Chiemeka (PECHIE) </strong>— a Computer Science graduate with a passion for Frontend Engineering and UX/UI Design.
                            Over the past two years, I’ve built projects with JavaScript, TypeScript, Python, and C++, both during and after my studies. I’m curious, driven, and always willing to put in the work to bring ideas to life.
                            <br/> <br/>Outside of coding, I create illustrations inspired by music and shows (some even commissioned), and I tinker with music electronics using Arduino and C++. Currently, I’m freelancing as a software engineer and always excited to collaborate on projects where I can add value and deliver results.
                            <br/> <br/>If I sound like a good fit, I’d love to hear from you.
                        </p>
                    </div>
                </article>

                <article className="flex flex-1 justify-center">
                    <div className="w-[227px] h-[341px] bg-black border border-[var(--primary)] border-[2px] rounded-xl ">
                        <img className="rounded-xl" src={profile}/>
                    </div>
                </article>


            </section>

            <section className="flex flex-col  h-auto">
                <h2 className="">Skills</h2>
                <div className="flex lg:flex-row flex-col justify-evenly bg-black border border-[var(--primary)] border-[2px] rounded-xl p-[20px]">
                    <Elements tag="language"/>
                    <Elements tag="other"/>
                    <Elements tag="tool"/>
                </div>
            </section>

            <section className="flex flex-col  h-auto gap-5">
                <h2>Experience</h2>

                <article className="flex flex-col gap-10 p-[20px] border border-black rounded-xl">

                    <div className="border-b p-[10px] border-[var(--primary)]">
                    
                    <p>
                        <strong className="text-[var(--primary)]">Junior Front-End Developer</strong><br/>
                        <b>Arch Arcades | May 2025 - July 2025</b><br/><br/>
                    </p>
                    <ul>
                        <li><p>+ Conducted UX research through user interviews and defined the overall project vision</p></li>
                        <br/>
                        <li><p>+ Produced wireframes and mockups that maintained team focus and guided project progress.</p></li>
                        <br/>
                        <li><p>+ Implemented an interactive prototype in Figma to support community-driven feedback.</p></li>
                        <br/>
                        <li><p>+ Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</p></li>
                        <br/>
                        <li><p>+ Integrated a backend server to fetch essential data from an arcade games API.</p></li>
                        <br/>
                    </ul>
                    
                    </div>
                    <div className="p-[10px]">
                                        <p>
                        <strong className="text-[var(--primary)]">Junior Front-End Developer</strong><br/>
                        <b>Arch Arcades | May 2025 - July 2025</b><br/><br/>
                    </p>
                    <ul>
                        <li><p>+ Conducted UX research through user interviews and defined the overall project vision</p></li>
                        <br/>
                        <li><p>+ Produced wireframes and mockups that maintained team focus and guided project progress.</p></li>
                        <br/>
                        <li><p>+ Implemented an interactive prototype in Figma to support community-driven feedback.</p></li>
                        <br/>
                        <li><p>+ Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</p></li>
                        <br/>
                        <li><p>+ Integrated a backend server to fetch essential data from an arcade games API.</p></li>
                    </ul>
                    </div>
                </article>
            </section>

            <section className="flex flex-col gap-5  h-auto">
                <h2>Education/Certificates</h2>
                    <article className="flex flex-col gap-5 p-[20px] border border-black rounded-xl">

                        <div className="border-b p-[10px] border-[var(--primary)]">
                        
                            <p>
                                <strong className="text-[var(--primary)]">BSc (Hons) Computer Science</strong><br/>
                                <b>University of the West of England (UWE Bristol) | Graduation: November 2024</b><br/><br/>
                            </p>
                            <ul>
                                <li><p><b>Classification:</b> Upper Second Class (2:1)</p></li>
                                <br/>
                                <li><p><b>Relevant Modules: </b>Mobile Applications, Advanced Databases, Distributed Enterprise Systems Development.</p></li>
                                <br/>

                            </ul>
                        
                        </div>
                        <div className="p-[10px]">
                            <p>
                                <strong className="text-[var(--primary)]">Meta Front-End Developer Professional Certificate</strong><br/>
                                <b>Coursera | Certification Date: May 2025</b><br/><br/>
                            </p>
                            <ul>
                                <li><p><b>Relevant Courses: </b>Version Control, HTML & CSS in depth, Advanced React, Principles of UI/UX Design.</p></li>
                                <br/>

                            </ul>
                        </div>
                </article>
                
            </section>
        </div>
        </>
    );
}

export default Info;