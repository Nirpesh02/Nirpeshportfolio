import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 px-6 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 min-h-screen"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* LEFT: Text Content (2/3 width) */}
        <Motion.div
          className="md:col-span-2 text-center md:text-left max-w-4xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h3>

          <div className="w-24 h-1 bg-purple-300 mb-6 rounded-full mx-auto md:mx-0"></div>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            I am a creative web developer passionate about designing and building modern,
            responsive, and visually engaging websites. I combine clean, efficient code
            with vibrant design elements to create projects that are both functional and
            beautiful. My work focuses on delivering seamless user experiences,
            exploring the latest technologies, and transforming ideas into digital reality.
            Every project is an opportunity to innovate, learn, and make an impact in the
            digital space. I constantly seek new challenges that push my creativity and
            technical skills. Collaborating with teams inspires me to think differently and
            craft solutions that solve real-world problems. I enjoy mentoring junior
            developers and sharing knowledge to foster growth. Beyond coding, I have a keen
            interest in UI/UX trends and design systems that enhance user engagement. My
            goal is to build digital experiences that are not only functional but memorable
            and impactful.
          </p>
        </Motion.div>

        {/* RIGHT: Image (1/3 width, bigger) */}
        <Motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Motion.img
            src="/images/project4.jpg"
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-400 shadow-xl object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </Motion.div>

      </div>
    </section>
  );
}
