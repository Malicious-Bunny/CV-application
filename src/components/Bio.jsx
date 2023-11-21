/* eslint-disable react/prop-types */

import '../styles/components.css'

export default function Bio({Bio,setBio,setPanel}){
    return <div className="bio">
        <h2>Short Bio</h2>
        <form>
            <textarea onChange={(e)=>setBio(e.target.value)} value={Bio} id="bio" name="bio" placeholder="Write a short bio about yourself" required></textarea>
        </form>
        <div className="navBtns">
            <button onClick={()=>setPanel(1)} className="prev">Back</button>
            <button onClick={()=>setPanel(3)} className="next">Save & Next</button>
        </div>
    </div>
}