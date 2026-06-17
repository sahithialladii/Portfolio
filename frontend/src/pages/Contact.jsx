import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   // State for form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // const res = await fetch("http://localhost:5000/api/contact", {
//       const res = await fetch("https://portfolio1-z6xb.onrender.com/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("✅ Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" }); // reset form
//       } else {
//         alert("❌ Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       alert("⚠️ Error: Could not send message.");
//     } finally {
//       setLoading(false);
//     }
//   };

const Contact = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);

try {
  const res = await fetch(
    // "https://portfolio1-z6xb.onrender.com/api/contact",
    "http://localhost:5000/api/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await res.json();

  if (res.ok && data.success) {
    alert("✅ Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } else {
    alert(data.message || "❌ Failed to send message.");
  }
} catch (error) {
  console.error(error);
  alert("⚠️ Server error. Please try again later.");
} finally {
  setLoading(false);
}


};


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-10"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
          Get in Touch
        </h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none resize-none transition duration-200"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-3">Or connect with me on</p>
          <div className="flex justify-center gap-6 text-indigo-600 text-2xl">
            <a
              href="https://github.com/sahithialladii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sahithi-alladi89"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sahithialladi89@gmail.com"
              className="hover:text-gray-800 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
