import "./App.scss";
import NavTop from "./components/NavTop/NavTop.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Work from "./components/work/Work.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx"
import Intro from "./components//intro/Intro.jsx";
import Contact from "./components/contact/Contact.jsx";
import MenuList from "./components/menuList/MenuList";
import { useState } from "react";

function App() {
  const [active,setActive] = useState(false)
  return (
    <div className="App">
      <NavTop activeValue={active} setActive= {setActive} />
      <MenuList activeValue={active} setActive= {setActive} />
      <div className="sections">
        <Portfolio />
        <Work />
        <Testimonials />
        <Intro />
        <Contact />
      </div>
    </div>
  );
}

export default App;
