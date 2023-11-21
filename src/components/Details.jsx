/* eslint-disable react/prop-types */
import { useState } from "react"
import '../styles/components.css'

export default function Details({setDetails,setPanel}){
   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jobPos, setJobPos] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    function addDetails(){
        if(firstName === "" || lastName === "" || jobPos === "" || email === "" || phone === "" || address === "") return;
        setDetails({JobPos: jobPos, Firstname: firstName, Lastname: lastName, email: email, phone: phone, address: address});
        setFirstName("");
        setLastName("");
        setJobPos("");
        setEmail("");
        setPhone("");
        setAddress("");
    }

    return <div className="details">
        <h2>Your Details</h2>
        <form className="detailsForm">
            <div className="jobdetaildiv">
                <label htmlFor="JobPos">Job Position</label>
                <input value={jobPos} onChange={(e)=>setJobPos(e.target.value)} type="text" id="JobPos" name="JobPos" placeholder="Desired job position" required></input>
            </div>
             <div className="NameWrapper">
                <div className="namedetaildiv">
                    <label htmlFor="Firstname">First Name</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text" id="Firstname" name="Firstname" placeholder="First name" required></input>
                </div>
                 <div className="secondnamediv">
                     <label htmlFor="Lastname">Last Name</label>
                                     <input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text" id="Lastname" name="Lastname" placeholder="Last name" required></input>
                 </div>
                  </div>
            <div className="emailWrapper">
                <div className="emaildiv">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder="eg. bleep@gmail.com" required></input>
                </div>
                 <div className="phonediv">
                     <label htmlFor="phone">Phone</label>
                                     <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="tel" id="phone" name="phone" placeholder="phone number" required></input>
                 </div>
                  </div>
            <div className="detailsaddress">
                <label htmlFor="address">Address</label>
                <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" id="address" name="address" placeholder="eg. Bleep, Shady Pines" required></input>
            </div> <button type="submit" onClick={addDetails} className="detailsSub">Save</button>
            </form>
            <div className="navBtns">
            <button onClick={()=>setPanel(5)} className="prev">Back</button>
            <button onClick={()=>setPanel(2)} className="next">Next</button>
        </div>
    </div>
}