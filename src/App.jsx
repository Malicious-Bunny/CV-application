import Header from "./components/Header";
import Education from "./components/Education";
import ExperienceComponent from "./components/Experience";
import Bio from "./components/Bio";
import Details from "./components/Details";
import { useState } from "react";
import CV from "./components/CV";
import Skills from "./components/Skills";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";


export default function App() {
    const [Experience, SetExperience] = useState([{company: "",position : "", title: "", date: "", bio:""}]);
    const [Eucation, SetEducation] = useState([{school: "", title: "", date: "", bio: ""}]);
    const [details, SetDetails] = useState({JobPos: "", Firstname: "", Lastname: "", email: "", phone: "", address: ""});
    const [bio, SetBio] = useState("");
    const [editpanel, SetEditpanel] = useState(1);
    //react tag input component state

    const [skills, setSkills] = useState([]);
    const [iconSlide, setIconSlide] = useState(false);
    const [viewCv, setViewCv] = useState(false);

    //download pdf utility function
    

    return <>
    <div className="arrow">
        
        <div id="arrow" onClick={
            //changing the animation play state to running
            ()=>{
                setIconSlide(!iconSlide);
        } }className="circleIcon">
            <FaAngleDoubleDown style={{
                transform: iconSlide ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.1s ease-in-out"
            }} className="utils" />
        </div>

       {iconSlide && <div onClick={()=>{setViewCv(!viewCv)}} className="circleIcon invis2">
        <FaRegEye />
         </div>}

    </div>
    <Header panel={editpanel} setPanel={SetEditpanel}/>
    <div className="main">
        <div className="panels">
           { editpanel==1 && <Details setDetails={SetDetails} setPanel={SetEditpanel}/>}
            {editpanel==2 &&  <Bio Bio={bio} setBio={SetBio} setPanel={SetEditpanel} />}
           {editpanel==3 && <Education education={Eucation} setEducation={SetEducation} setPanel={SetEditpanel} />}
            {editpanel==4 && <ExperienceComponent experience={Experience} setExperience={SetExperience} setPanel={SetEditpanel} />}
            {editpanel==5 && <Skills skills={skills} setSkills={setSkills} setPanel={SetEditpanel} />}
        
        </div>
       { viewCv && <div className="CvPanel" >
            <CV experience={Experience} education={Eucation} details={details} bio={bio} skills={skills} setviewcv={setViewCv}/>
        </div>}
    </div>
    </>
}