import { useState } from "react";
import Explore from "../Explore/Explore"; // Import your Explore component
import EcoTips from "../EcoTips/EcoTIps";
import ContactForm from "../ContactForm/ContactForm";
import { ToastContainer, toast } from 'react-toastify';

const notify =()=>{
  toast.success("Thank you for joining! Let’s work together to create something amazing.")
}
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home"); // Tracks the active section

  const handleSectionChange = (section) => {
    setActiveSection(section); // Updates the active section
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-green-600 p-4 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <a href="#home" className="hover:text-gray-200" onClick={() => handleSectionChange("home")}>
              🌿 NatureSite
            </a>
          </div>

          {/* Menu Section */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="hover:text-gray-200"
              onClick={() => handleSectionChange("home")}
            >
              Home
            </a>
            <a
              href="#explore"
              className="hover:text-gray-200 cursor-pointer"
              onClick={() => handleSectionChange("explore")}
            >
              Explore Nature
            </a>
            <a
              href="#eco-tips"
              className="hover:text-gray-200"
              onClick={() => handleSectionChange("eco-tips")}
            >
              Eco Tips
            </a>
            <a
              href="#contact"
              className="hover:text-gray-200"
              onClick={() => handleSectionChange("contact")}
            >
              Contact
            </a>
          </div>

          <div>
            <button
            onClick={notify}
            className="bg-gray-100 text-green-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-200">
              Join Us
            </button>
          </div>
        </div>
      </nav>

      {/* Section Rendering */}
    

      {activeSection === "explore" && (
        <Explore />
      )}

      {activeSection === "eco-tips" && <EcoTips></EcoTips>
        
      }

      {
        activeSection === "contact" && <ContactForm></ContactForm>
      }
    </div>
  );
};

export default Navbar;
