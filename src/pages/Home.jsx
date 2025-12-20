import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const headingText = "Hello, I'm Nir P Esh";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start text-center bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 overflow-hidden px-4 md:px-0 pt-32 pb-32"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        <>
          {/* Background Blobs */}
          <Motion.div
            className="absolute w-80 h-80 bg-purple-400 rounded-full opacity-20 top-0 left-10 blur-3xl"
            animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.div
            className="absolute w-64 h-64 bg-pink-400 rounded-full opacity-20 top-1/2 left-2/3 blur-2xl"
            animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <Motion.div
            className="absolute w-96 h-96 bg-indigo-400 rounded-full opacity-15 top-3/4 left-1/4 blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Profile Image */}
          <Motion.div
            className="relative z-10 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
          >
            <Motion.img
              src="/images/images0.jpg"
              alt="Profile"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-500 shadow-2xl object-cover"
              style={{
                transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </Motion.div>

          {/* Animated Heading */}
          <h2 className="flex flex-wrap justify-center text-3xl md:text-5xl font-extrabold mb-8 z-10">
            {headingText.split("").map((char, index) => (
              <Motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent"
              >
                {char === " " ? "\u00A0" : char}
              </Motion.span>
            ))}
          </h2>

          {/* Description Paragraph */}
          <Motion.p
            className="text-xl md:text-2xl max-w-3xl md:text-left text-center font-medium text-gray-800 z-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <br />
            I’m a passionate developer creating visually stunning and interactive websites. My journey blends creativity with code, crafting modern user experiences that captivate and inspire. I enjoy exploring new technologies, building responsive layouts, and turning ideas into reality. Each project is a chance to innovate, learn, and leave a meaningful digital impact. With a flair for design and a love for smooth functionality, I strive to make every website both beautiful and user-friendly. I constantly seek new challenges that push my creativity and technical skills. Collaborating with teams inspires me to craft solutions that solve real-world problems. Beyond coding, I am passionate about UI/UX trends and innovative design systems.
          </Motion.p>
        </>
      </AnimatePresence>
    </section>
  );
}
