import { useState } from "react";
import "./Work.scss";


export default function Work() {
  const [currectSlider, setCurrectSlider] = useState(0)

  const HandleMove = (way) => {
    console.log(way)
    way === 'left' ? setCurrectSlider(currectSlider > 0 ? currectSlider - 1 : 2) :
      setCurrectSlider(currectSlider < data.length - 1 ? currectSlider + 1 : 0);
  }

    const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <div className='containerWork' id="work">
        <div className="items"  style={{transform:`translateX(-${currectSlider * 100}vw)`}}>
        {
          data.map(element => {
            return (
              <div key={element.id} className="item">
                <div className="container">
                  <div className="left">
                    <div className="icon">
                      <img src={element.icon} alt="" />
                    </div>
                    <div className="title">
                      <span>{element.title}</span>
                    </div>
                    <div className="desc">
                      <p>{element.desc}</p>
                    </div>
                    <div className="link">
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="right">
                    <img src={element.img} alt="" />
                  </div>
                  </div>
                </div>
            )
          })
        }
      </div>
      <div className="arrow">
        <img className="left" onClick={() => HandleMove('left')} src="/assets/arrow.png" alt="" />
        <img className="right" onClick={() => HandleMove('right')} src="/assets/arrow.png" alt="" />
      </div>
    </div>
  )
}
