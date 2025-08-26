import Button from "../Button";

const Contact = () =>{
    return(
        <>
        <section>
            <div className="flex flex-col gap-5 bg-black h-[417px] rounded-xl pt-[50px]">
                <h2 className="flex justify-center text-white text-center">Let's Get in Touch</h2>
                <div className="flex justify-center gap-10">
                    <div className="h-[114px] w-[114px] border border-white  "></div>
                    <div className="h-[114px] w-[114px] border border-white  "></div>
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