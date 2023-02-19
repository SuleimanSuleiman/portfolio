import { useState } from "react"
import "./Contact.scss"

export default function Contact() {
  const [message,setMessage] = useState(false)
  return (
    <div className='contactContainer' id='contact'> 
      <div className="left">
        <img src="/assets/shake.svg" alt="" />
        </div>
      <div className="right">
        <h3>Contact.</h3>
        <input type="email" placeholder="Email" className="email" />
        <textarea placeholder="Message"></textarea>
        <button >Send</button>
        {(message && <p>Thanks,I'll reply ASAP :)</p>)}
        </div>
    </div>
  )
}
