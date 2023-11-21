/* eslint-disable react/prop-types */

import { BiLogoSlack } from "react-icons/bi";
import '../styles/components.css'
function Header({panel, setPanel}){
    return <header>
        <div className="fill"><span>Eloquence <span className="ball"><BiLogoSlack/></span></span></div>
        <nav>
            <div onClick={()=>setPanel(1)} className={panel==1?"selected":""}>Details</div>
            <div onClick={()=>setPanel(2)} className={panel==2?"selected":""}>Bio</div>
            <div onClick={()=>setPanel(3)} className={panel==3?"selected":""}>Education</div>
            <div onClick={()=>setPanel(4)} className={panel==4?"selected":""}  >Experience</div>
            <div onClick={()=>setPanel(5)} className={panel==5?"selected":""}>Skills</div>
        </nav>
    </header>
}

export default Header;