import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Projects from "../pages/Projects"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes