import { FaGithub, FaLinkedinIn, FaXTwitter} 
from "react-icons/fa6"
import Container from "../ui/Container"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <Container>
        <div className="py-16 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-2xl font-bold">
              AdoStack Axis
            </h2>
            <p className="mt-4 text-gray-600 max-w-sm leading-relaxed">
              Building scalable AI and Software solutions,
              SaaS platforms, and modern
              digital experiences.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="www.GitHub.com/georgegyan"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer