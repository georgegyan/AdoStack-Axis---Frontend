import { motion } from "framer-motion"
import { FaArrowRight, FaCode, FaLayerGroup, FaRocket } 
from "react-icons/fa"
import Layout from "../components/layout/Layout"
import Container from "../components/ui/Container"
import Button from "../components/ui/Button"

const Home = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        {/* BACKGROUND GRADIENT */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#F7F4ED] via-[#F7F4ED] to-[#EFEAE0]" />
        {/* BLUR EFFECT */}
        <div className="absolute -top-50 -right-25 w-125 h-125 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <Container className="relative z-10">
          <div className="min-h-[90vh] flex flex-col justify-center">
            {/* HERO CONTENT */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
              <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-6">
                AI Solutions • SaaS • Software Agency
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#0F172A]">
                Building Modern
                Digital Experiences
                For The Future
              </h1>
              <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                AdoStack Axis builds scalable SaaS products,
                AI solutions, web applications, and digital
                platforms for startups and modern businesses.
              </p>
              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button className="flex items-center gap-2">
                  Start a Project
                  <FaArrowRight />
                </Button>
                <button
                  className="
                    px-6
                    py-3
                    rounded-full
                    border
                    border-gray-300
                    hover:bg-white
                    transition">
                  View Portfolio
                </button>
              </div>
            </motion.div>
            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-6
                mt-24">
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-sm border border-gray-200">
                <FaRocket className="text-3xl mb-5 text-blue-600" />
                <h3 className="text-4xl font-bold">
                  20+
                </h3>
                <p className="mt-2 text-gray-600">
                  Projects Delivered
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-sm border border-gray-200">
                <FaCode className="text-3xl mb-5 text-blue-600" />
                <h3 className="text-4xl font-bold">
                  10+
                </h3>
                <p className="mt-2 text-gray-600">
                  Technologies Used
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-sm border border-gray-200">
                <FaLayerGroup className="text-3xl mb-5 text-blue-600" />
                <h3 className="text-4xl font-bold">
                  100%
                </h3>
                <p className="mt-2 text-gray-600">
                  Scalable Architecture
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export default Home