import React, { useState } from "react";
import portofolio from "../../../assets/portfolio_351456 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../../assets/images-gallary.png";
import project2 from "../../../assets/e-commerce.png";
import project3 from "../../../assets/to-do-list.png";
import project4 from "../../../assets/movies.png";
import project5 from "../../../assets/tradex.png";

import cloneProject1 from "../../../assets/travello-clone.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function OurProjects() {
  const templatesSlides = [
    { image: `${project1}`, link: "https://galleryimageswebsite.netlify.app/" },
    { image: `${project2}`, link: "https://nadamaher.pythonanywhere.com/" },
    { image: `${project3}`, link: "https://to-do-list-fstg.vercel.app/" },
    { image: `${project4}`, link: "https://moviessimplewebsite.netlify.app/" },
    { image: `${project5}`, link: "https://nadamaher74.github.io/Tradex/" },
  ];

  const clonedProjectsSlides = [
    { image: `${cloneProject1}`, link: "https://vimeo.com/1030207965" },
  ];
  const [slides, setSlides] = useState(templatesSlides);
  const [activeButton, setActiveButton] = useState("templates");

  const handleButtonClick = (slides) => {
    if (slides === clonedProjectsSlides) {
      setSlides(clonedProjectsSlides);
      setActiveButton("cloned");
    } else {
      setSlides(templatesSlides);
      setActiveButton("templates");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <img src={portofolio} alt="Portofolio" />
        <h2 className="text-3xl font-bold text-sky-700">Our Projects</h2>
        <p className="text-center w-11/12 md:w-1/2 my-6 font-bold text-gray-600">
          A Showcase of Expertly Crafted Template-Based Projects,
          Custom-Designed and Tailored to Fit the Unique Requirements of Each
          Business, Ensuring Quality and Efficiency
        </p>
      </div>
      <div className="flex mt-12  justify-center">
        <button
          onClick={() => handleButtonClick(templatesSlides, "templates")}
          type="button"
          className={`text-xl font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ${
            activeButton === "templates"
              ? "bg-sky-700 text-white"
              : "text-sky-700 bg-white"
          } hover:bg-sky-700 hover:text-white focus:outline-none  `}
        >
          Templates
        </button>
        <button
          onClick={() => handleButtonClick(clonedProjectsSlides, "cloned")}
          type="button"
          className={`text-xl font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ${
            activeButton === "cloned"
              ? "bg-sky-700 text-white"
              : "text-sky-700 bg-white"
          } hover:bg-sky-700 hover:text-white focus:outline-none  `}
        >
          Cloned Projects
        </button>
      </div>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="!w-full  !my-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!min-w-[300px] !max-w-[500px]  !h-[400px] !mt-0 !p-6 !overflow-hidden"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="!object-cover !h-[300px]  !border !rounded-xl "
              onClick={() => window.open(slide.link, "_blank")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
