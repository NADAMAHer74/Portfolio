import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../../assets/logo.png";
import MaskGroup from "../../assets/Mask-group.png";
import { Link } from "react-router-dom";

export const contacts = [
  { text: "+201141089452", icon: FaPhoneAlt },
  { text: "nadaamaher142@gmail.com", icon: MdEmail },
  { text: "Cairo, Egypt", icon: MdLocationOn },
];
const Footer = () => {
  return (
    <footer className="relative bg-[#001159] text-white overflow-hidden isolate">
      {/* Background Shapes */}
      {/* <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-800 rounded-r-full opacity-30 pointer-events-none"></div> */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 rounded-l-full opacity-30 pointer-events-none"></div> */}

      <div
        className="absolute bg-cover -z-10 bg-center w-full h-full"
        style={{ backgroundImage: `url(${MaskGroup})` }}
      >
        <div className="absolute inset-0 pointer-events-none"></div>
      </div>

      {/* Container with 70% width */}
      <div className="max-w-[900px] w-full mx-auto py-12 px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:gap-12 gap-3 justify-center items-center pb-4 border-b border-blue-400">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-2">
              <contact.icon size={20} />
              <p className="text-sm">{contact.text}</p>
            </div>
          ))}
        </div>

        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          {/* Left Section - Logo & Contact Info */}
          <div className="flex-1">
            <img src={logo} alt="AutoSoft Logo" className="h-12 w-auto" />
            <p className="text-sm mb-4 leading-relaxed">
              We are a dedicated web development company specializing in
              crafting tailored solutions that empower businesses to thrive
              online. From intuitive designs to seamless functionality, we
              deliver quality and innovation in every project.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="flex-1 flex gap-8 justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-4">PAGES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-orange-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-orange-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-orange-300">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Custom Web Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Profiles Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Blog Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    E-Commerce Solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - CTA */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4">STAY IN TOUCH</h3>
            <Link
              to={"/contact"}
              className="bg-blue-600 hover:bg-white text-white hover:text-blue-600 px-6 py-2 rounded-full transition duration-300"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm border-t border-blue-500 pt-4">
          <p>AutoSoft © 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
