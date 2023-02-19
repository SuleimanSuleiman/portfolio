import "./Testimonials.scss"
export default function Testimonials() {
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
    <div className='TestimonialsContainer' id='Testimonials'>
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="sliders">
        {
          data.map(element => {
            return (
              <div className="item" key={element.id}>
                <div className="topbar">
                    <img className="arrow" src="/assets/right-arrow.png" alt="" />
                    <img className="img" src={element.img} alt="" />
                    <img className="icon" src={element.icon} alt="" />
                </div>
                <div className="desc">
                  <p>{ element.desc}</p>
                </div>
                <div className="title">
                  <h5>{ element.title}</h5>
                </div>
                <div className="paragraph">
                  <p>CEO of LAMA</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
