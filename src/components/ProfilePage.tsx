import { Star } from "lucide-react";
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

const ProfilePage = () => {
  const navigaet = useNavigate()
  const experience = [
    {
      name: "Instagram Clone",
      description: "Built a chat application using Node.js, React, and MongoDB, implementing real-time communication with WebSocket.",
    },
    {
      name: "Youtube backend",
      description: "Assisted in building and optimizing full-stack web applications using React and Express.js.",
    },
  ];

  const education = [
    {
      period: "2022 - 2025",
      degree: "Bachelor Degree in Computer Science",
      school: "Nayagarh Autonomous college , Nayagarh",
    },
    {
      period: "2020 - 2022",
      degree: "Complete my plus2",
      school: "Nayagarh Autonomous college , Nayagarh",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-6 mt-20">
      <div className=" bg-black p-4 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section */}
            <motion.div {...animationProps} className="md:w-[500px]">
              <div className="  relative w-72 h-72 rounded-3xl overflow-hidden ">
                <img src="/main3.png" alt="Profile" className="object-cover" />
              </div>
            </motion.div>

            {/* Right Section */}
            <motion.div {...animationProps}  className=" lg:w-2/3 md:w-[600px] space-y-6 ">
              {/* Heading with Stars */}
              <div className="flex items-center gap-4 mb-8">
                <Star className="w-8 h-8 text-white opacity-75" />
                <h1 className="text-white text-5xl md:text-6xl  font-bold tracking-wider">
                  SELF-SUMMARY
                </h1>
                <Star className="w-8 h-8 text-white opacity-75" />
              </div>

              {/* Name and Description */}
              <div className=" bg-[#080c14] rounded-3xl p-8 backdrop-blur-sm ">
                <h2 className="text-white text-4xl font-bold mb-4">
                  Rakesh Bhuyan
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I’m a B.Sc. Computer Science student with a passion for
                  building dynamic and scalable web solutions. Skilled in
                  full-stack development, I work with React, Next.js, Node.js,
                  and databases like MongoDB and PostgreSQL. With solid DSA
                  knowledge, I love solving challenges and turning ideas into
                  impactful applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience */}
        <motion.div {...animationProps}  className="bg-[#080c14] rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6">TOP PROJECTS</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold">{exp.name}</h4>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
            <p>more project comming soon....</p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div {...animationProps}  className="bg-[#080c14] rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-6">EDUCATION</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index}>
                <p className="text-gray-400">{edu.period}</p>
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-gray-400">{edu.school}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profiles Card */}
        <motion.div {...animationProps}  className="bg-[#080c14] rounded-3xl p-6">
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/rakeshbhuyan/"
              target="_balnk"
              className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48A1.56,1.56,0,1,1,8.15,6.92,1.57,1.57,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
              </svg>
            </a>
            <a
              href="https://x.com/rakesh_0_?t=8UwKGv--M3PZQl0zRMS0FA&s=09"
              target="blank"
              className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
              </svg>
            </a>

            <a
              href="https://github.com/RakeshBhuyan0101"
              target="_blank"
              className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/rakesh.b01/"
              target="_blank"
              className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a href="https://leetcode.com/u/rakeshbhuyan0101/" target="_blank" className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
                aria-hidden="true"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">STAY WITH ME</p>
          <h4 className="text-xl font-semibold">Profiles</h4>
          <button onClick={() => navigaet('/contact')} className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center mt-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>

        {/* Let's work together Card */}
        <motion.div {...animationProps}  className="bg-[#080c14] rounded-3xl p-8 flex flex-col justify-center items-center text-center">
          <div className="mb-4">✧</div>
          <h3 className="text-3xl font-bold mb-2">Let's</h3>
          <p className="text-3xl font-bold">
            work <span className="text-blue-500">together</span>.
          </p>
          <button onClick={() => navigaet('/contact')} className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center mt-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>

        {/* Credentials Card */}
        <motion.div {...animationProps}  className="bg-[#080c14] rounded-3xl p-6">
          <div className="mb-4">
            <img src="/signature.png" alt="Signature" className="h-12 invert" />
          </div>
          <p className="text-gray-400 text-sm">MORE ABOUT ME</p>
          <h4 className="text-xl font-semibold">Credentials</h4>
          <button onClick={() => navigaet('/works')} className="w-8 h-8 rounded-full bg-[#2a2a2a] flex items-center justify-center mt-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
