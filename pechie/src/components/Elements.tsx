import {allSkills } from "../assets/AllSkills";
import Element from "./Element";

const Elements = ({tag ="tools"}) =>{

    const filteredSkills = allSkills.filter((work) => work.type === tag);
    return(
        <div className="flex flex-row flex-wrap gap-[5px]">
            {filteredSkills.map((skill, index)=>(
                <div key = {index} >
                    <Element 
                    key = {index}
                    text={skill.name}
                    image={skill.image}/>
                </div>
            ))}
        </div>
    );
}

export default Elements;