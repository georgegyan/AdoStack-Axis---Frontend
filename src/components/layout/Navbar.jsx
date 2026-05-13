import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Container from "../ui/Container"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F4ED]/90 backdrop-blur-md border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight">
            AdoStack Axis
          </Link>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black transition">
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-black transition">
              Services
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-black transition">
              Projects
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-black transition">
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black transition">
              Contact
            </Link>
          </div>
          {/* MOBILE ICON */}
          <button className="md:hidden text-3xl">
            <HiOutlineMenuAlt3 />
          </button>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar