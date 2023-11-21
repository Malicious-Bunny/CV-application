/* eslint-disable react/prop-types */

import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import '../styles/components.css';


export default function Education({education, setEducation,setPanel}){
   
    const [editing, setEditing] = useState(false);

    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [Edit, setEdit] = useState(false);
    const [bio, setBio] = useState("");

    const [schoolToEdit, setSchoolToEdit] = useState("");

    const [School, setSchoolEdit] = useState("");
    const [Title, setTitleEdit] = useState("");
    const [Date, setDateEdit] = useState("");
    const [bioEdit, setBioEdit] = useState("");



    function addEducation(){
        if(school === "" || title === "" || date === "") return;
        setEducation([...education, {school: school, title: title, date: date, bio: bio}]);
        setSchool("");
        setTitle("");
        setDate("");
        setBio("");
    }
    function DeleteEducation(school){
        const newEdu = education.filter(education => education.school !== school);
        setEducation(newEdu);
    }
    
    return <div className="educationDiv">
        <h2>Education</h2>
    <ul className="eduList">
            {education.map((education, index) => {
                if(index === 0) return null;
                return <li className="eduListItem" key={education.title}>
                    <div className="eduDiv">
                        <div className="eduname"><div className="titlenbtns">
                            <h3>{education.school}</h3>
                            <div className="delEdit">
                                <div className="edubtns"><div className="delete">
                                    <MdDeleteOutline onClick={()=>{
                                        DeleteEducation(education.school);
                                        setSchool("");
                                        setTitle("");
                                        setDate("");
                                        setBio("");

                                    }} />
                                </div> <MdOutlineModeEditOutline onClick={()=>{
                                    setEdit(true);
                                    setEditing(false);
                                    //select list item with key, then h3 under it, then get the text
                                    setSchoolToEdit(education.school);
                                }}/></div>
                            </div>
                        </div>
                         <h4>{education.date}</h4> </div> <h3>{education.title}   </h3> 
                         <p style={{fontSize:'smaller'}}>{education.bio}</p>
                    </div>
                  
                    </li>
            })}
        </ul> 
        { Edit && <form className="EditForm">
                        <div className="eduschoolname">
                            <label  htmlFor="SchoolName">School Name</label>
                            <input required type="text" id="SchoolName" value={School} onChange={event => setSchoolEdit(event.target.value)}/>
                        </div>
                        <div className="edutitle">
                            <label htmlFor="Title">Title</label>
                            <input required type="text" id="Title" value={Title} onChange={event => setTitleEdit(event.target.value)}/>
                        </div>
                        <label htmlFor="Date">Date</label>
                        <div className="edudate">
                            <input required type="date" id="Date" value={Date} onChange={event => setDateEdit(event.target.value)}/>
                        </div>
                        <div className="bio">
            <label htmlFor="bio">Summary</label>
        <textarea  value={bioEdit} onChange={(e)=>{setBioEdit(e.target.value)}} name="bio" placeholder="Short Summary" required></textarea>
   
        </div>
                        <div className="EduEditBtns">
                            <button type="button" className="cancel" onClick={()=>{setEdit(false)}}>cancel</button>
                            <button className="done" type="submit" onClick={
                                ()=>{
                                    setEdit(false);
                                    const newEdu = education.map((edu)=>{
                                        if(edu.school === schoolToEdit){
                                            edu.school = School;
                                            edu.title = Title;
                                            edu.date = Date;
                                            edu.bio = bioEdit;
                                        }
                                        return edu;
                                    })
                                    setEducation(newEdu);
                                }
                            }>done</button>
                        </div>
                    </form>}  
        {editing ? <form className="EducationForm">
        <div className="eduschoolname">
            <label  htmlFor="SchoolName">School Name</label>
            <input required type="text" id="SchoolName" value={school} onChange={event => setSchool(event.target.value)}/>
        </div>  
        <div className="edutitle">
            <label htmlFor="Title">Title</label>
            <input required type="text" id="Title" value={title} onChange={event => setTitle(event.target.value)}/>
        </div>
         <label htmlFor="Date">Date</label>
        <div className="edudate">
            <input required type="date" id="Date" value={date} onChange={event => setDate(event.target.value)}/>
        </div>
        <div className="bio">
            <label htmlFor="bio">Summary</label>
            <textarea  value={bio} onChange={(e)=>{setBio(e.target.value)}} name="bio" placeholder="Short Summary" required></textarea>
   
        </div>
        <div className="EduEditBtns">
            <button type="button" className="cancel" onClick={() => setEditing(false)}>cancel</button>
            <button className="done" type="submit" onClick={addEducation}>done</button>
        </div>
        </form> : <div></div>}

    {   !editing && <div className="addbtn"><button type="button" className="Add" onClick={() => setEditing(true)}>Add</button></div>}

        <div className="navBtns">
            <button onClick={()=>setPanel(2)} className="prev">Back</button>
            <button onClick={()=>setPanel(4)} className="next">Save & Next</button>
        </div>
    </div>
}

