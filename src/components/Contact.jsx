import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y :0 }}
        initial={{ opacity:0, y: -100}}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ opacity: 1, x :0 }}
          initial={{ opacity:0, x: 100}}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x :0 }}
          initial={{ opacity:0, x: -100}}
          transition={{ duration: 1 }}
          className="my-4">{CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:smsurekha19@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}


// import React, { useState } from 'react';
// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form data here (e.g., send to a server)
//     console.log(formData);
//     // Clear the form
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="border-b border-neutral-900 pb-20">
//       <motion.h2 
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-10 text-center text-4xl">
//         Get in Touch
//       </motion.h2>
      
//       <motion.form 
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="mb-4">
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             placeholder="First Name"
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             placeholder="Last Name"
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="Subject"
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             className="w-full p-2 border border-gray-300 rounded h-32"
//             required
//           ></textarea>
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Submit
//         </button>
//       </motion.form>

//       {isSubmitted && (
//         <motion.div 
//           className="text-center mt-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg tracking-tight text-transparent"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Thank you for taking the time to connect. I'm looking forward to exploring how we might collaborate or discuss your thoughts.
//         </motion.div>
//       )}

//       <div className="text-center tracking-tighter mt-8">
//         <motion.p 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 1 }}
//           className="my-4">{CONTACT.address}
//         </motion.p>
//         <motion.p 
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 1 }}
//           className="my-4">{CONTACT.phoneNo}
//         </motion.p>
//         <a href='mailto:smsurekha19@gmail.com' className="border-b">
//           {CONTACT.email}
//         </a>
//       </div>
//     </div>
//   );
// };

export default Contact;
