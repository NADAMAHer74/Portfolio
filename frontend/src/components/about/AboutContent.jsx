import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import WhoWe from "../../assets/who-we-are.png";
import Mission from "../../assets/our-mission.png";

import logo from "../../assets/logo2.jpeg";

const AboutContent = () => {
  const teamMembers = [
    {
      name: "Nada Maher",
      role: "Frontend Developer",
      imgSrc: logo,
      linkedin: "#",
      github: "#",
    },
    {
      name: "Nada Maher",
      role: "Frontend Developer",
      imgSrc: logo,
      linkedin: "#",
      github: "#",
    },
    {
      name: "Nada Maher",
      role: "Frontend Developer",
      imgSrc: logo,
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 p-10">
      {/* Who We Are Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-lg leading-relaxed">
            Our journey is fueled by a deep commitment to excellence and a
            vision to empower businesses and individuals in the ever-evolving
            digital landscape. From startups and small businesses to established
            enterprises, we take pride in creating tailored solutions that drive
            growth, enhance engagement, and bring visions to life.
          </p>
          <img
            // src="https://via.placeholder.com/400"
            src={WhoWe}
            alt="Who We Are"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={Mission}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
            <p className="text-lg leading-relaxed">
              Our mission is to empower businesses and individuals by delivering
              cutting-edge digital solutions that bridge the gap between
              innovation and functionality. We strive to create meaningful,
              tailor-made websites and applications that not only meet our
              clients`&apos;` needs but also inspire and engage their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Team Members</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            // <div
            //   key={index}
            //   className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            // >
            //   {/* Team Image */}
            //   <img
            //     src={member.imgSrc}
            //     alt={member.name}
            //     className="w-full h-full object-cover"
            //   />

            //   {/* Team Details */}
            //   <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
            //     <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            //     <p className="text-blue-500">{member.role}</p>
            //     <div className="flex gap-4 mt-2">
            //       <a
            //         href={member.linkedin}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="text-blue-700 hover:text-blue-900 text-2xl"
            //       >
            //         <FaLinkedinIn />
            //       </a>
            //       <a
            //         href={member.github}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="text-gray-700 hover:text-gray-900 text-2xl"
            //       >
            //         {/* <FaGithub /> */}
            //         <FaFacebookF />
            //       </a>
            //       <a
            //         href={member.whatsapp}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         className="text-green-500 hover:text-green-700 text-2xl"
            //       >
            //         <FaWhatsapp />
            //       </a>
            //     </div>
            //   </div>
            // </div>

            <div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center p-10">
                <img
                  className="w-40 h-40 mb-3 rounded-full shadow-lg"
                  src={member.imgSrc}
                  alt={member.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {member.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <div className="flex mt-4 md:mt-6 gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-2xl"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 text-2xl"
                  >
                    {/* <FaGithub /> */}
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700 text-2xl"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
