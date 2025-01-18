import React from "react";
import rocket from "../../../assets/rocket.png";
import group1 from "../../../assets/Group 1.png";
import group2 from "../../../assets/Group 2.png";
import group3 from "../../../assets/Group 3.png";
import group4 from "../../../assets/Group 4.png";
import group5 from "../../../assets/Group 5.png";
import backgroundImage from "../../../assets/Frame 40 (1).png";
import ProjectJourneyCards from "../../ProjectJourneyCards";
import Body from "../../Body";
export default function ProjectJourney() {
  const stepsCards = [
    {
      image: group1,
      title: "Discovery",
      color: "text-blue-500",
      description:
        "understanding your goals, target audience, and requirements to create a solid foundation for your project.",
    },
    {
      image: group2,
      title: "UI/UX Design",
      color: "text-blue-400",
      description:
        "Our designers craft intuitive wireframes and stunning visuals to ensure a seamless and engaging user experience.",
    },
    {
      image: group3,
      title: "Development",
      color: "text-orange-500",
      description:
        "We bring your vision to life with robust frontend and backend development, ensuring functionality and scalability.",
    },
    {
      image: group4,
      title: "Testing",
      color: "text-red-500",
      description:
        "Thorough testing is conducted to ensure the application is bug-free, secure, and performs flawlessly across all devices.",
    },
    {
      image: group5,
      title: "Deployment",
      color: "text-blue-800",
      description:
        "Your application goes live with everything configured for optimal performance, hosting, and domain setup.",
    },
  ];
  return (
    <>
      <Body>
        <div className="flex flex-col justify-center items-center">
          <img src={rocket} alt="rocket" />
          <h2 className="text-3xl  font-bold text-sky-700">Project Journey</h2>
          <p className="text-center w-11/12 md:w-7/12 my-6 font-bold text-gray-600">
            From Initial Concepts to Final Deployment, Our Step-by-Step Process
            Ensures Every Detail is Perfectly Aligned to Deliver Exceptional,
            High-Performance Web Solutions Tailored to Your Needs
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <ProjectJourneyCards stepsCards={stepsCards} />
        </div>
      </Body>

      <div className="hero my-12 overflow-hidden">
        <img src={backgroundImage} alt="background" className="h-full" />
        <div className="hero-overlay ">
          <div className="hero-content text-white ">
            <div className="mx-6 md:mx-24 my-12 ">
              <h1 className="max-w-5xl text-2xl md:text-3xl font-bold">
                Empower Your Existance with Transformative Web Development{" "}
                Solutions
              </h1>

              <button className="btn btn-primary  border-none text-white  rounded-full mt-4">
                Contact US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
