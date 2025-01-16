import {
  ArrowUpRight,
  Camera,
  Layout,
  Palette,
  Smartphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"
const animationProps = {
  initial: { opacity: 0 }, // Start with only opacity
  animate: { opacity: 1 }, // Animate to fully visible
  transition: {
    duration: 1, // Duration of the animation
    delay: 0.2, // Delay before the animation starts
    ease: "easeIn", // Smooth transition effect
  },
};

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <main className="container mx-auto px-4 py-8 space-y-8 mt-20">
          < div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
            < motion.div {...animationProps}  className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 relative group">
              <div className="flex flex-col gap-6">
                <div className="w-48 h-48 relative">
                  <img
                    src="/main3.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl" />
                </div>

                <div>
                  <div className="text-gray-400 mb-2 tracking-wider">
                    A WEB DESIGNER
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    Rakesh Bhuyan.
                  </h1>
                  <p className="text-gray-400">
                    I am a Web Designer based in
                    <br />
                    India .
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("/about")}
                className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </button>
            </motion.div>

            <div className="space-y-6">
              <motion.div {...animationProps} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-4">
                <div className="overflow-hidden whitespace-nowrap">
                  <div className="animate-scroll inline-flex gap-4">
                    <span className="text-gray-400">
                      LATEST WORK AND FEATURED
                    </span>
                    <span className="text-white">·</span>
                    <span className="text-gray-400">
                      LATEST WORK AND FEATURED
                    </span>
                    <span className="text-white">·</span>
                    <span className="text-gray-400">
                      LATEST WORK AND FEATURED
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {/* Credentials section */}
                < motion.div {...animationProps} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 relative group">
                  <div className="space-y-4">
                    <div className="text-gray-400">MORE ABOUT ME</div>
                    <h2 className="text-2xl font-bold">Credentials</h2>
                    <img
                      src="/signature.png"
                      alt="Signature"
                      className="w-32 opacity-70 invert"
                    />
                  </div>

                  <button
                    onClick={() => navigate("/about")}
                    className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </button>
                </motion.div>
                {/* Project Section */}
                <motion.div {...animationProps} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 relative group">
                  <div className="space-y-4">
                    <div className="text-gray-400">SHOWCASE</div>
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Project Preview"
                      className="w-full rounded-lg"
                    />
                  </div>

                  <button
                    onClick={() => navigate("/works")}
                    className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blogs section */}
            <motion.div {...animationProps} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 relative group">
              <div className="space-y-4">
                <div className="text-gray-400">BLOG</div>
                <h2 className="text-2xl font-bold">GFonts</h2>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 via-blue-500 to-red-500 rounded-lg" />
              </div>

              <button onClick={() => navigate('/blog')} className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </button>
            </motion.div>

            {/* Services section  */}
            <motion.div {...animationProps} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8">
              <div {...animationProps} className="space-y-6">
                <div className="text-gray-400">SPECIALIZATION</div>
                <h2 className="text-2xl font-bold">Services Offering</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-xl">
                    <Camera className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-xl">
                    <Layout className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-xl">
                    <Palette className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-xl">
                    <Smartphone className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>
            </motion.div>
            {/* profile sections  */}
            <motion.div {...animationProps} className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 relative group">
              <div className="space-y-4">
                <div className="text-gray-400">STAY WITH ME</div>
                <h2 className="text-2xl font-bold">Profiles</h2>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <a href="https://x.com/rakesh_0_?t=8UwKGv--M3PZQl0zRMS0FA&s=09" target="_blank">
                      <img
                        src="/x.svg"
                        alt="Twitter"
                        className="w-6 h-6 text-gray-400"
                      />
                    </a>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <a href="https://www.instagram.com/rakesh.b01?igsh=MTU3a2tyMTQ1bmFtMA==" target="_blank">
                      <img
                        src="/instagram.svg"
                        alt="Twitter"
                        className="w-6 h-6 text-gray-400"
                      />
                    </a>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <a href="https://github.com/RakeshBhuyan0101" target="_blank">
                      <img
                        src="/github.svg"
                        alt="Twitter"
                        className="w-6 h-6 text-gray-400"
                      />
                    </a>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <a href="https://www.linkedin.com/in/rakeshbhuyan/" target="_blank">
                      <img
                        src="/linkedin.svg"
                        alt="Twitter"
                        className="w-6 h-6 text-gray-400"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </button>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LandingPage;
