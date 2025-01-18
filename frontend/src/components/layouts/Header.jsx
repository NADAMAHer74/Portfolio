import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // menu & close icons
import logo from "../../assets/logo.png";
import SocialIcons from "../homepage/heroSection/SocialIcons";
import useWidthBreakPoint from "../../Hooks/use-widthBreakPoint";
import NvLink from "../UI/NavLink";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const isInSize = useWidthBreakPoint(768); // Adjust the breakpoint as needed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.onscroll = handleScroll;

  return (
    <header
      className={`fixed w-full z-20 md:p-2 isolate transition-all duration-300 ${
        isScrolled ? "bg-secondary-10/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <AnimatePresence>
        {(!isInSize || isMenuOpen) && (
          <motion.nav
            initial={{ opacity: 0, translateY: "-100px" }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "-100px" }}
            className="flex z-10 max-md:bg-primary-5/50 max-md:gap-2 max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 w-full max-md:flex-col justify-between items-center text-white"
          >
            <div className="max-md:p-2 max-md:w-full flex max-md:justify-between">
              <Link to="/" className="inline-block">
                <img src={logo} alt="AutoSoft Logo" className="h-12 w-auto" />
              </Link>
              <div>
                <button
                  className="btn btn-ghost btn-circle text-accent-60 md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <FaTimes size={25} />
                </button>
              </div>
            </div>

            {/* Navigation Links - Hidden on small screens */}
            <ul className="flex md:gap-4 max-md:flex-col max-md:w-full">
              <NvLink to="/">Home</NvLink>
              <NvLink to="/about">About</NvLink>
              <NvLink to="/services">Services</NvLink>
              <NvLink to="/portfolio">Our Projects</NvLink>
              <NvLink to="/contact">Contact</NvLink>
            </ul>
            {/* Social Icons - Hidden on small screens */}
            <div className="p-4">
              <SocialIcons />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Menu Icon for Small Screens */}
      {!isMenuOpen && (
        <div className="md:hidden p-2 flex justify-between">
          <Link to="/" className="inline-block">
            <img src={logo} alt="AutoSoft Logo" className="h-12 w-auto" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl btn bg-transparent border-0 outline-none hover:bg-secondary-20/50 btn-circle text-accent"
          >
            <FaBars />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

// {isMenuOpen && (
//   <div>
//     {/* Overlay with Blur Effect */}
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"
//       onClick={() => setIsMenuOpen(false)}
//     ></div>

//     {/* Menu */}
//     <div
//       className={`fixed top-0 left-3/4 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-b from-blue-900 to-transparent text-white z-20 p-4 shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
//         isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
//       }`}
//     >
//       {/* Close Button */}
//       <button
//         onClick={() => setIsMenuOpen(false)}
//         className="absolute top-4 right-4 text-2xl"
//       >
//         <FaTimes />
//       </button>

//       {/* Navigation Links */}
//       <ul className="flex flex-col gap-4 mt-12">
//         <li>
//           <Link
//             to="/about"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-blue-500"
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/services"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-blue-500"
//           >
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/portfolio"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-blue-500"
//           >
//             Our Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:text-blue-500"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Social Icons */}
//       <div className="mt-auto flex justify-center">
//         <SocialIcons />
//       </div>
//     </div>
//   </div>
// )}
