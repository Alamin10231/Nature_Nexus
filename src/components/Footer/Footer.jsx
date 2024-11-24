import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-300">Nature Nexus</h2>
          <p className="text-lg text-gray-300 mt-4">
            Bringing you closer to nature while encouraging sustainability and environmental awareness.
          </p>
          <p className="text-gray-300 mt-4">
            Join us in making a positive impact on the planet.
          </p>
        </div>

        {/* Useful Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-300 mb-4">Useful Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
            <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-green-400">FAQ</a></li>
            <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-300 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="text-gray-300 hover:text-green-400">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Disclaimer */}
      <div className="text-center mt-12 text-sm text-gray-200">
        <p>&copy; 2024 Nature Nexus. All Rights Reserved.</p>
        <p>Disclaimer: All information and content provided on this website are for educational and informational purposes only.</p>
      </div>
    </footer>
  );
};

export default Footer;
