import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    setStatus("Submitting...");

   
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-20 px-6">
      <h1 className="text-4xl font-bold text-yellow-800">Contact Us</h1>
      <p className="mt-4 text-lg text-yellow-600 text-center">
        We’d love to hear from you! Please fill out the form below.
      </p>

      <div className="mt-8 w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
         
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter Your Name"
            />
          </div>

   
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Youremail@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your message here..."
            />
          </div>

         
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <div
            className={`mt-4 text-center font-semibold ${
              status.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
