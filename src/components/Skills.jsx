/*eslint-disable react/prop-types */

import { TagInput } from 'reactjs-tag-input'
import '../styles/components.css'

export default function Skills({skills, setSkills, setPanel}){
  /*function removeDuplicates(skill){
    let arr= [];

    for(let a in skill){
        if(!arr.includes(skill[a.displayValue])){
            arr.push(skill[a.displayValue])
        }else{
            delete skill[a]
        }

    }
  }*/
    return(
        <div className="skills">
            <h3 className='bleep'>Skills</h3>
            <div style={{
                overflow: 'scroll',
                paddingTop: '1rem',
            }} className="skillsInput">
            
                <TagInput tagStyle={{
                    backgroundColor: "#E5E5E5",
                    color: "#000000",
                    borderRadius: "5px",
                    padding: "5px",
                    margin: "5px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                
                }} 
                inputStyle={{
                    backgroundColor: "#E5E5E5",
                    color: "#000000",
                    borderRadius: "5px",
                    padding: "5px",
                    margin: "5px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    border: '2px solid blue',
                    
                
                }}
                wrapperStyle={{
                    backgroundColor: "#E5E5E5",
                    color: "#000000",
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "0",
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    position: 'relative',
                    left:'50%',
                    marginTop: '20%',
                    width:'100%',

                    
                
                }}
                tagDeletStyle={{
                    fill: 'red',
                    cursor: 'pointer',
                    color: 'red',
                    backgroundColor: 'red',
                }}
                
                  tags={skills}  onTagsChanged={(tags) => {setSkills(tags); console.log(skills)
                }} placeholder="Add a skill" />
                 <div className="addskillsbtn">
                <button className='Add addSkill' onClick={()=>setSkills(skills)}>Add Skill</button>
            </div>

            </div>
           
            <div className="navBtns">
         <button onClick={()=>setPanel(4)} className="prev">Back</button>
         <button onClick={()=>setPanel(1)} className="next">Save & Next</button>
     </div>
        </div>
        
    )
}