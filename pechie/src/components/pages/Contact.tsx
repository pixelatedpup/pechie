import Button from "../Button";
import Linkedin from "../../assets/linkedin.png"
import Git from "../../assets/gituse.png"
const Contact = () =>{
    return(
        <>
        <section>
            <div className="flex flex-col gap-5 bg-black h-[417px] rounded-xl pt-[50px]">
                <h2 className="flex justify-center text-white text-center">Let's Get in Touch</h2>
                <div className="flex justify-center gap-10">
                    <div className="group h-[114px] w-[114px]">
                        <a href="https://www.linkedin.com/in/pechiedev/">
                        <img className="group-hover:invert group-hover:scale-[109%] transition-all duration-[300ms]" src={Linkedin}/>
                        </a>
                    </div>
                    <div className="group h-[114px] w-[114px]">
                        <a href="https://github.com/pixelatedpup">
                        <img className="group-hover:invert group-hover:scale-[109%] transition-all duration-[300ms] " src={Git}/>
                        </a>
                    </div>
                </div>
                <article className="w-full  flex justify-center">
                    <div className="flex justify-center   ">
                        <Button auto={true} type="secondary" text="pechiedev@gmail.com"></Button>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
}

export default Contact;