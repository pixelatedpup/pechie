import Elements from "../Elements";
import profile from "../../assets/Profile.png"

const Info = () =>{
    return(
        <>

        <div className="flex flex-col gap-7 lg:px-[150px] lg:py-[50px] py-[50px]">
            <section className="flex lg:flex-row-reverse lg:gap-5 gap-10 flex-col-reverse  justify-center ">

                <article className="flex flex-1a ">
                    <div className=" w-auto h-auto bg-[var(--darker)] rounded-xl p-[30px]">
                        <h4 className="text-white">
                            Hi, I’m <strong className="text-[var(--primary)]">Peter Chiemeka (PECHIE) </strong>— a Computer Science graduate with a passion for Frontend Engineering and UX/UI Design.
                            Over the past two years, I’ve built projects with JavaScript, TypeScript, Python, and C++, both during and after my studies. I’m curious, driven, and always willing to put in the work to bring ideas to life.
                            <br/> <br/>Outside of coding, I create illustrations inspired by music and shows (some even commissioned), and I tinker with music electronics using Arduino and C++. Currently, I’m freelancing as a software engineer and always excited to collaborate on projects where I can add value and deliver results.
                            <br/> <br/>If I sound like a good fit, I’d love to hear from you.
                        </h4>
                    </div>
                </article>

                <article className="flex flex-1 justify-center">
                    <div className="w-[227px] h-[341px] bg-black rounded-2xl">
                        <img className="rounded-xl" src={profile}/>
                    </div>
                </article>


            </section>

            <section className="flex flex-col  h-auto">
                <h2 className="">Skills</h2>
                <div className="flex lg:flex-row flex-col justify-evenly bg-white border border-[var(--greyC)] rounded-xl p-[20px]">
                    <Elements tag="language"/>
                    <Elements tag="other"/>
                    <Elements tag="tool"/>
                </div>
            </section>

            <section className="flex flex-col  h-auto gap-5">
                <h2>Experience</h2>

                <article className="flex flex-col gap-10 p-[20px] rounded-xl bg-[var(--greyC)]">

                    <div className="border-b p-[10px] border-[var(--dark)]">
                    
                    <h2>
                        <strong className="text-[white]">Junior Front-End Developer</strong><br/>
                        <b className="text-[var(--darkC)]">Arch Arcades | May 2025 - July 2025</b><br/><br/>
                    </h2>
                    <ul className="pb-[30px]">
                        <li><h3>+ Conducted UX research through user interviews and defined the overall project vision</h3></li>
                        <li><h3>+ Produced wireframes and mockups that maintained team focus and guided project progress.</h3></li>
                        <li><h3>+ Implemented an interactive prototype in Figma to support community-driven feedback.</h3></li>
                        <li><h3>+ Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</h3></li>
                        <li><h3>+ Integrated a backend server to fetch essential data from an arcade games API.</h3></li>
                    </ul>
                    
                    </div>
                    <div className="p-[10px]">
                                        <h2>
                        <strong className="text-[white]">Junior Front-End Developer</strong><br/>
                        <b className="text-[var(--darkC)]">Luna Comics | July 2025 - Present</b><br/><br/>
                    </h2>
                    <ul className="pb-[30px]">
                        <li><h3>+ Conducted UX research through user interviews and defined the overall project vision</h3></li>
                        <li><h3>+ Produced wireframes and mockups that maintained team focus and guided project progress.</h3></li>
                        <li><h3>+ Implemented an interactive prototype in Figma to support community-driven feedback.</h3></li>
                        <li><h3>+ Led frontend development using React and TailwindCSS, modernizing the site’s look and feel.</h3></li>
                        <li><h3>+ Integrated a backend server to fetch essential data from an arcade games API.</h3></li>
                    </ul>
                    </div>
                </article>
            </section>

            <section className="flex flex-col gap-5  h-auto">
                <h2>Education/Certificates</h2>
                    <article className="flex flex-col gap-5 p-[20px] rounded-xl bg-[var(--greyC)]">

                        <div className="border-b p-[10px] border-[var(--dark)]">
                        
                            <h2>
                                <strong className="text-white">BSc (Hons) Computer Science</strong><br/>
                                <b className="text-[var(--darkC)]">University of the West of England (UWE Bristol) | Graduation: November 2024</b><br/><br/>
                            </h2>
                            <ul className="pb-[30px]"> 
                                <li><h3><b>Classification:</b> Upper Second Class (2:1)</h3></li>
                                <li><h3><b>Relevant Modules: </b>Mobile Applications, Advanced Databases, Distributed Enterprise Systems Development.</h3></li>

                            </ul>
                        
                        </div>
                        <div className="p-[10px]">
                            <h2>
                                <strong className="text-white">Meta Front-End Developer Professional Certificate</strong><br/>
                                <b className="text-[var(--darkC)]">Coursera | Certification Date: May 2025</b><br/><br/>
                            </h2>
                            <ul className="pb-[30px]">
                                <li><h3><b>Relevant Courses: </b>Version Control, HTML & CSS in depth, Advanced React, Principles of UI/UX Design.</h3></li>
                            </ul>
                        </div>
                </article>
                
            </section>
        </div>
        </>
    );
}

export default Info;