// const SocialIcons = () => {
//     return (
//       <div className="flex gap-2 text-white">
//         <a href="https://facebook.com" target="_blank" rel="noreferrer">FB</a>
//         {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">TW</a> */}
//         <a href="https://linkedin.com" target="_blank" rel="noreferrer">LN</a>
//       </div>
//     );
//   };
  
//   export default SocialIcons;
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    // <div className="flex space-x-4">
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={25} className="text-white transition-colors max-md:hover:text-secondary-60 hover:text-blue-800" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={25} className="text-white transition-colors max-md:hover:text-secondary-60 hover:text-blue-700" />
      </a>
    </div>
  );
};

export default SocialIcons;