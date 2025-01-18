import { Link } from 'react-router-dom'; 
import servicesImage from '../../../assets/services.png';

const OurServices = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <img
              src={servicesImage} 
              alt="Services Icon"
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-3xl font-bold text-blue-500">Our Services</h2>
          <p className="text-black py-2 font-medium">
            Comprehensive Web Development Services to Build, Enhance, and <br />Transform Your Online Presence.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:bg-blue-100 transition flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">Custom Web Applications</h3>
              <p className="text-gray-600">
                Showcase your work and achievements with a stunning portfolio website designed to leave a lasting impression.
              </p>
            </div>
            <div className="mt-4">
              <Link to="/services">
                <button className='text-blue-500 font-semibold'>LEARN MORE &gt;</button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:bg-blue-100 transition flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">Profiles Applications</h3>
              <p className="text-gray-600">
                Whether you need a personal portfolio to highlight your work or a company profile to tell your story, we design engaging, visually appealing websites tailored to your goals.
              </p>
            </div>
            <div className="mt-4">
              <Link to="/services">
                <button className='text-blue-500 font-semibold'>LEARN MORE &gt;</button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:bg-blue-100 transition flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">Blog Applications</h3>
              <p className="text-gray-600">
                Share your voice and ideas with the world while keeping readers engaged with sleek and user-friendly designs.
              </p>
            </div>
            <div className="mt-4">
              <Link to="/services">
                <button className='text-blue-500 font-semibold'>LEARN MORE &gt;</button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 hover:bg-blue-100 transition flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-2">E-Commerce Solutions</h3>
              <p className="text-gray-600">
                Boost your sales with an engaging, user-focused e-commerce platform.
              </p>
            </div>
            <div className="mt-4">
              <Link to="/services">
                <button className='text-blue-500 font-semibold'>LEARN MORE &gt;</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;