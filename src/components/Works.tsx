import { Star, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react"

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  size?: "large" | "regular";
}
const animationProps = {
  initial: { opacity: 0 }, // Start with only opacity
  animate: { opacity: 1 }, // Animate to fully visible
  transition: {
    duration: 1, // Duration of the animation
    delay: 0.2, // Delay before the animation starts
    ease: "easeIn", // Smooth transition effect
  },
};
export default function Works() {
  const projects: Project[] = [
    {
      title: "Dice game",
      category: "Dice game using react ",
      image:
        "/ludo.webp",
      size: "large",
      link: "https://dice-game-eight-blue.vercel.app/",
    },
    {
      title: "Note Saver",
      category: "React react-redux ",
      image: "/note-saver.avif",
      link: "https://note-saver-lemon.vercel.app/",
    },
    {
      title: "Netflix UI clone",
      category: "html , css",
      image: "/netflix.png",
      link: "https://rakeshbhuyan0101.github.io/netflix_clone/",
    },
    {
      title: "Diesel H1",
      category: "PHOTOGRAPHY",
      image: "/placeholder.svg?height=400&width=600",
      size: "large",
      link: "",
    },
    {
      title: "Hydra Merc",
      category: "WEB DESIGNING",
      image: "/placeholder.svg?height=400&width=600",
      link: "",
    },
    {
      title: "Submarine",
      category: "MOBILE DESIGNING",
      image: "/placeholder.svg?height=400&width=600",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...animationProps} className="flex items-center justify-center gap-4 mb-12">
          <Star className="w-8 h-8 text-white opacity-75" />
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wider">
            ALL PROJECTS
          </h1>
          <Star className="w-8 h-8 text-white opacity-75" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div {... animationProps}
              key={project.title}
              className={`group relative bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${
                project.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div {... animationProps} className="aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Project Info */}
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <p className=" text-white text-2xl font-bold">
                    {project.title}
                  </p>
                  <h3 className="text-zinc-400 text-sm tracking-wider mb-2 ">
                    {project.category}
                  </h3>
                </div>
                <div className="self-end">
                  <a href={project.link  } target = "_blank" >
                    <ArrowUpRight className="text-white w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
