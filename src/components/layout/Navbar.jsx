import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineMenuAlt3, HiOutlineX } 
from "react-icons/hi"
import Container from "../ui/Container"
import logo from "../../assets/logo/logo.png"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[#F7F4ED]/80 backdrop-blur-xl border-b border-gray-200">
      <Container>
        <nav className="h-38 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3"> 
            <img src={logo} alt="AdoStack Axis" className="w-50 h-50 object-contain"/>
          </Link>
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            { navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={({ isActive }) =>` text-sm font-medium transition hover:text-black
                    ${
                      isActive
                        ? "text-black"
                        : "text-gray-600"
                    }`}>
                  {link.name}
                </NavLink>
              ))
            }
          </div>
          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <button className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition">
              Start Project
            </button>
          </div>
          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMenuOpen(true)} className="lg:hidden text-3xl">
            <HiOutlineMenuAlt3 />
          </button>
        </nav>
      </Container>
      {/* MOBILE MENU */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-2xl z-50 p-8 transform transition-transform duration-300 ${ menuOpen ? "translate-x-0" : "translate-x-full" } `}>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">
            Menu
          </h2>
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <HiOutlineX />
          </button>
        </div>
        <div className="flex flex-col gap-8">
          {
            navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700">
                {link.name}
              </NavLink>
            ))
          }
        </div>
      </div>
      {/* OVERLAY */}
      {
        menuOpen && (
          <div onClick={() => setMenuOpen(false)} className=" fixed inset-0 bg-black/30 z-40"/>
        )
      }
    </header>
  )
}

export default Navbar