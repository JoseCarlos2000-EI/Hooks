import { Link, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import NavList from "./components/NavList"

const MainApp = () => {
  return (
    <div>
      <h2>Main App</h2>

      <NavList></NavList>
      <hr />

      <Routes>
      <Route path="/" element={ <HomePage></HomePage> }></Route>
      <Route path="/about" element  ={ <AboutPage></AboutPage>}></Route>
      <Route path="/contact" element={ <ContactPage></ContactPage>}></Route>
      <Route path="/*" element = {<Navigate to = '/about'></Navigate>}></Route>
      </Routes>
    </div>
  )
}

export default MainApp
