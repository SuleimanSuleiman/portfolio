import { useEffect, useState } from "react";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  contentPortfolio,
  designPortfolio
} from "../../data";

export default function Porfolio() {
  const [selected, setSelected] = useState("Featured");
  const [data,setData] = useState([])
  const list = [
    {
      id: 'Featured',
      title: 'Featured'
    },
    {
      id: 'Web',
      title: 'Web App'
    },
    {
      id: 'Mobile',
      title: 'Mobile App'
    },
    {
      id: 'Design',
      title: 'Design'
    },
    {
      id: 'Branding',
      title: 'Branding'
    }
  ]
  useEffect(() => {
     switch (selected) {
        case "Featured": {
        setData(featuredPortfolio)
        break
      }
      case "Web": {
        setData(webPortfolio)
        break;
      }
      case "Mobile": {
        setData(mobilePortfolio)
        break;
      }
      case "Design": {
        setData(designPortfolio)
        break;
      }
      case "Branding": {
        setData(contentPortfolio)
        break;
      }
      default: {
         setData([])
      break;
      }
    }
  },[selected])

  return (
    <div id='Portfolio'>
      <div className="container">
        <div className="text">
          <span>PortFolio</span>
        </div>
        <div className="section">
          <div className="containerSection">
            <div className="NavListed">
              <ul className="list">
                {
                  list.map(ele => {
                    return (
                      <li
                        key={ele.id}
                        id={ele.id}
                        onClick={
                          () => {
                            setSelected(ele.id)
                          }
                        }
                        className={"item "+(ele.id === selected && "active")}
                      >
                        {ele.title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="items">
              {
                data.map(element => {
                  return(
                    <div key={element.id} className="item">
                       <h2 className="title">{element.title}</h2>
                        <div className="img">
                          <img src={element.img} alt="" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
            </div>
          </div>
        </div>
    </div >
  )
}
