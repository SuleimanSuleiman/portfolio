import "./NavTop.scss"
import {Person, Email} from "@mui/icons-material"

function NavTop({ activeValue, setActive }) {
  return (
    <div className={"containerNavTop "+(activeValue && "active")}>
      <div className="left">
        <a href="#portfolio">Suleiman Suleiman</a>
        </div>
      <div className="right">
        <div className="text">
          <div className="phone">
            <Person />
            <span>+963 945 248 121</span>
          </div>
          <Email />
          <div className="email">
            <span>zmamznan66@gmail.com</span>
          </div>
        </div>  
        <div className="list" onClick={() => setActive(!activeValue)}>
          <ul className={"listContainer "+(activeValue && "active")}>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavTop
