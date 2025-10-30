import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
        
        {/* Profile Image with hover scale */}
        <Motion.img
          src="/images/project4.jpg" // Replace with your actual image
          alt="Profile"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-xl object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        />

        {/* Text Section */}
        <Motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            About Me
          </h3>

          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 leading-relaxed">
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
      </div>
    </section>
  );
}
