/* eslint-disable react/prop-types */

import '../styles/components.css'
import { FaRegTimesCircle } from "react-icons/fa";

import { FaFileDownload } from "react-icons/fa";
import jsPDF from 'jspdf';
import { v4 as uuidv4, v4 } from 'uuid';

export default function CV({experience, education, details, bio, skills, setviewcv}){
    function download(){
        setviewcv(true);
        const pdf = new jsPDF();

        pdf.setFontSize(20);
        const centerCV = document.querySelector('.centerCV');

        pdf.html(centerCV, {
            callback: function (pdf) {
                pdf.save("CV.pdf");
            },
            x: 10,
            y: 10
        });

    }
    return <>
    <div className="CV">
        <div style={{
            transform: 'scale(1.5)',
        }} className="CVClose">
            <FaRegTimesCircle onClick={()=>{setviewcv(false);
            const cv = document.querySelector('.CvPanel');
            cv.style.display = "none";
        }
        } style={{cursor:"pointer",
            fill: "red"
        }}/>
        
        <div onClick={download} className="circleIcon invis1" style={{
            transform: 'scale(0.7)'
        }}>
        <FaFileDownload />
        </div>
     </div>
        <div className="centerCV">
                <div className="namePos">
                    <h2>{details.Firstname} {details.Lastname}</h2>
                </div>
                <div className="contactCV">
                    <div className="phone">
                        <h5>{details.phone}</h5>
                    </div>
                    <div className="email">
                        <h5>{details.email}</h5>
                    </div>
                    <div className="address">
                        <h5>{details.address}</h5>
                    </div>

                </div>
                <div className="bioJob">
                <div className="job">
                        <h5>{details.JobPos}</h5>
                    </div>
                    <div className="bio">
                        <h5 className='bi' >{bio}</h5>
                    </div>
                    
                </div>
                
                <div className="educationCV">
                    <h5 className='eduHead'>Education</h5>
                    {education.map((item)=>{
                        return <div key={v4()} className="educationItem">
                            <div key={v4()} className="school">
                                <h5 className='eduHea'>{item.school}</h5>
                            </div>
                            <div key={v4()} className="title">
                                <h5>{item.title}</h5>
                            </div>
                            <div key={v4()} className="date">
                                <h5>{item.date}</h5>
                            </div>
                            <div key={v4()} className="bio">
                                <h5>{item.bio}</h5>
                            </div>
                        </div>
                    })}
                </div>
                <div className="experienceCV">
                    <h5 className='eduHead'>Experience</h5>
                    {experience.map((item)=>{
                        return <div key={v4()} className="experienceItem">
                            <div key={v4()} className="company">
                                <h5 className='eduHea'>{item.company}</h5>
                            </div>
                            <div key={v4()} className="position">
                                <h5>{item.position}</h5>
                            </div>
                            <div key={v4()} className="title">
                                <h5>{item.title}</h5>
                            </div>
                            <div key={v4()} className="date">
                                <h5>{item.date}</h5>
                            </div>
                            <div key={v4()} className="bio">
                                <h5>{item.bio}</h5>
                            </div>
                        </div>
                    })}
                </div>

                <div className="skillCV">
                    <h5 className='eduHead'>Skills</h5>
                    <div className="skillsCV">
                        {skills.map((item)=>{
                            return <h5 key={v4()}>
                                {item.displayValue}
                            </h5>
                        })}
                    </div>
                </div>
        </div>
    </div>
    </>

}