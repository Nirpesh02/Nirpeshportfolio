import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill the required blank", { position: "bottom-right", autoClose: 3000 });
      return;
    }
    await fetch("https://feedbackbackend-q0y7.onrender.com/api/v1/createFeedBack", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    comment: formData.comment,
  }),
});
    toast.success("Thank you for commenting!", { position: "bottom-right", autoClose: 3000 });
    setFormData({ name: "", email: "", comment: "" });
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 min-h-screen text-center"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Contact Me
      </h3>

      <p className="text-lg md:text-xl text-gray-700 mb-4">
        I’d love to hear from you! Whether it’s a project collaboration, a question, or just a friendly hello, feel free to reach out.
      </p>

      <p className="text-lg text-gray-700 mb-8">
        Email: <a href="mailto:Nirpeshdhungel7@gmail.com" className="text-purple-600 hover:underline">Nirpeshdhungel7@gmail.com</a><br />
        Phone: <span className="text-purple-600">+977-9816988657</span><br />
        Location: <span className="text-purple-600">Jhapa Gauradaha, Nepal</span>
      </p>

      {/* Comment Form */}
<div className="max-w-xl mx-auto mb-12">
  <h4 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
    Leave a Comment
  </h4>
  <form className="space-y-6 text-left" onSubmit={handleSubmit}>
    {/* Name */}
    <div>
      <label className="block font-medium mb-1">
        Enter Your Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Official Name"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block font-medium mb-1">
       Please Enter Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Official Email"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>

    {/* Comment */}
    <div>
      <label className="block font-medium mb-1">
        Leave Your Comment Please <span className="text-red-500">*</span>
      </label>
     <textarea
  name="comment"
  value={formData.comment}
  onChange={handleChange}
  placeholder="Please leave your comment (1000 characters max)"
  rows="4"
  required
  maxLength={1000} // limit to 1000 characters
  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
/>

<p className="text-sm text-gray-600 mt-2">
  I’ll review your comment and respond to you directly via the email you provide.
</p>

    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      Submit Comment
    </button>
  </form>
</div>

      {/* Social Media */}
      <div className="flex justify-center space-x-8 mt-6 text-3xl">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-500 transition-colors"><FaGithub/></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition-colors"><FaLinkedin/></a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition-colors"><FaTwitter/></a>
      </div>

      <ToastContainer />
    </section>
  );
}
