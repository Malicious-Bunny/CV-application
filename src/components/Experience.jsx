/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";

export default function ExperienceComponent({experience, setExperience, setPanel}){


    const [editing, setEditing] = useState(false);
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [Edit, setEdit] = useState(false);

    const [Company, setCompanyEdit] = useState("");
    const [Position, setPositionEdit] = useState("");
    const [Title, setTitleEdit] = useState("");
    const [Date, setDateEdit] = useState("");

    const [expToEdit, setExpToEdit] = useState("");
    const [bio, setBio] = useState("");

    const [bioEdit, setBioEdit] = useState("");

    function addExperience(){
        if(company === "" || position === "" || title === "" || date === "") return;
        setExperience([...experience, {company: company, position: position, title: title, date: date, bio: bio}]);
        setCompany("");
        setPosition("");
        setTitle("");
        setDate("");
        setBio("");
    }
    function DeleteExperience(company){
        const newExp = experience.filter(experience => experience.company !== company);
        setExperience(newExp);
    }

    return <div className="experienceDiv"> 
        <h2 className="bleep">Experience</h2>

        <ul className="eduList">
            {experience.map((experience, index) => {
                if(index === 0) return null;
                return <li className="expListItem" key={experience.title}>
                    <div className="expDiv">
                        <div className="dateIco">
                            <div className="expname">{experience.company}.  {experience.date}</div>
                            <div className="expbtns"><MdDeleteOutline className="red" onClick={
                                ()=>{
                                    DeleteExperience(experience.company);
                                    setCompany("");
                                    setPosition("");
                                    setTitle("");
                                    setDate("");
                                    setBio("");
                                }
                            } /> <MdOutlineModeEditOutline onClick={()=>{setEdit(true)
                                setExpToEdit(experience.company)}
                            } /></div>
                        </div> 
                        <div className="posTitle"><div>{experience.position}</div> <div>{experience.title}</div>
                        <p>{experience.bio}</p>
                        </div>      
                    </div>

                    </li>
            })}
        </ul>
        {!Edit && editing ? <form className="EducationForm">
        <div className="compName">
            <label  htmlFor="CompanyName">Company Name</label>
            <input required type="text" id="CompanyName" value={company} onChange={event => setCompany(event.target.value)}/>
        </div>
          <div className="compPos">
              <label htmlFor="Position">Position</label>
                      <input required type="text" id="Position" value={position} onChange={event => setPosition(event.target.value)}/>
          </div>
            <div className="pjTitle">
                <label htmlFor="Title">Title</label>
                        <input required type="text" id="Title" value={title} onChange={event => setTitle(event.target.value)}/>
            </div>
               <label htmlFor="Date">Date</label>
        <div className="Date">
            <input required type="date" id="Date" value={date} onChange={event => setDate(event.target.value)}/>
           
        </div>
        <div className="bio">
            <label htmlFor="bio">Summary</label>
        <textarea  value={bio} onChange={(e)=>{setBio(e.target.value)}} name="bio" placeholder="Short Summary" required></textarea>
   
        </div>
        <div className="EduEditBtns">
            <button type="button" className="cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="done" type="submit" onClick={addExperience}>done</button>
        </div>
         </form> : <div></div>}
        { !editing && <div className="centerbtn"><button type="button" className="Addexp" onClick={() => setEditing(true)}>Add</button></div>
}
    {
        Edit && <form className="EditForm">
             <div className="compName">
            <label  htmlFor="CompanyName">Company Name</label>
            <input required type="text" id="CompanyName" value={Company} onChange={event => setCompanyEdit(event.target.value)}/>
        </div>
          <div className="compPos">
              <label htmlFor="Position">Position</label>
                      <input required type="text" id="Position" value={Position} onChange={event => setPositionEdit(event.target.value)}/>
          </div>
            <div className="pjTitle">
                <label htmlFor="Title">Title</label>
                        <input required type="text" id="Title" value={Title} onChange={event => setTitleEdit(event.target.value)}/>
            </div>
               <label htmlFor="Date">Date</label>
        <div className="Date">
            <input required type="date" id="Date" value={Date} onChange={event => setDateEdit(event.target.value)}/>
           
        </div>
        <div className="bio">
            <label htmlFor="bio">Summary</label>
        <textarea  value={bioEdit} onChange={(e)=>{setBioEdit(e.target.value)}} name="bio" placeholder="Short Summary" required></textarea>
   
        </div>
        <div className="EduEditBtns">
            <button type="button" className="cancel" onClick={() => setEdit(false)}>cancel</button>
            <button className="done" type="submit" onClick={()=>{
                setEditing(false);
                const newExp = experience.map((exp)=>{
                    if(exp.company === expToEdit){
                        exp.company = Company;
                        exp.position = Position;
                        exp.title = Title;
                        exp.date = Date;
                        exp.bio = bioEdit
                    }
                    return exp;
                })
                setExperience(newExp);
            
            }}>done</button>
        </div>
        </form>
    }
         <div className="navBtns">
                <button onClick={()=>setPanel(3)} className="prev">Back</button>
                <button onClick={()=>setPanel(5)} className="next">Save & Next</button>
            </div>
            
    </div>
    
}