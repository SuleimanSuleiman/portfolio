import "./Intro.scss"

export default function Intro() {
  return (
    <div className="containerIntro" id='intro'>
      <div className="left">
        <div className="containerImage">
          <img src="/assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <p>Hi There, I'm</p>
        <p>Suleiman Suleiman</p>
        <p>Freelance <span>MERN developer</span></p>
        <div className="arrow">
          <a href="#contact">
            <img src="/assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
