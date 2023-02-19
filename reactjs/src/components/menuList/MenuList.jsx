import "./MenuList.scss"

export default function MenuList({ activeValue, setActive }) {
  return (
    <div className={"menu "+(activeValue && "active")}>
      <ul className="listed">
        <li className="item" onClick={() => setActive(false)}>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li className="item" onClick={() => setActive(false)}>
          <a href="#work">Work</a>
        </li>
        <li className="item" onClick={() => setActive(false)}>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li className="item" onClick={() => setActive(false)}>
          <a href="#intro">Intro</a>
        </li>
        <li className="item" onClick={() => setActive(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
