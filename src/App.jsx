import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


const App = () => {
  return (
    <div className="h-screen bg-gray-800 text-white overflow-auto">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/> }/>
         <Route path="/about" element={<About/> }/>
          <Route path="/contact" element={<Contact/> }/>
           <Route path="/project" element={<Project/> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App