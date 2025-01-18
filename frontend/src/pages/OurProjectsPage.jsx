import React, { useState } from "react";
import Body from "../components/Body";
import Heading from "../components/Heading";
import ourProjectsBg from "../assets/2150010115 1.png";
import Pagination from "../components/Pagination";
import Cards from "../components/Cards";
import project1 from "../assets/images-gallary.png";
import project2 from "../assets/e-commerce.png";
import project3 from "../assets/to-do-list.png";
import project4 from "../assets/movies.png";
import project5 from "../assets/tradex.png";

import cloneProject1 from "../assets/travello-clone.png";

const OurProjectsPage = () => {
  const templateCardData = [
    {
      id: 1,
      title: "Images Gallary",
      imageUrl: `${project1}`,
      link: "https://galleryimageswebsite.netlify.app/",
    },
    {
      id: 2,
      title: "E-commerce",
      imageUrl: `${project2}`,
      link: "https://nadamaher.pythonanywhere.com/",
    },
    {
      id: 3,
      title: "To Do List",
      imageUrl: `${project3}`,
      link: "https://to-do-list-fstg.vercel.app/",
    },
    {
      id: 4,
      title: "Movies",
      imageUrl: `${project4}`,
      link: "https://moviessimplewebsite.netlify.app/",
    },

    {
      id: 5,
      title: "Tradex",
      imageUrl: `${project5}`,
      link: "https://nadamaher74.github.io/Tradex/",
    },
  ];
  const clonedProjectsCardData = [
    {
      id: 1,
      title: "Travello",
      imageUrl: `${cloneProject1}`,
      link: "https://vimeo.com/1030207965",
    },
  ];
  const cardsPerPage = 3;
  const [currentTemplatePage, setCurrentTemplatePage] = useState(0);
  const startTemplateIdx = currentTemplatePage * cardsPerPage;
  const currentTemplateCards = templateCardData.slice(
    startTemplateIdx,
    startTemplateIdx + cardsPerPage
  );

  const [currentClonedPage, setCurrentClonedPage] = useState(0);
  const startClonedIdx = currentClonedPage * cardsPerPage;
  const currentClonedCards = clonedProjectsCardData.slice(
    startClonedIdx,
    startClonedIdx + cardsPerPage
  );

  return (
    <>
      <Heading
        bgImg={ourProjectsBg}
        title="OUR PROJECTS"
        subtitle="A Showcase of Tailored Solutions, Innovative Designs, and Seamless Functionality Built to Empower Businesses and Ideas"
      />
      <Body>
        <h1 className="text-4xl  my-10 font-bold text-center text-blue-600">
          TEMPLATES
        </h1>
        <Cards currentCards={currentTemplateCards} />
        <Pagination
          currentPage={currentTemplatePage}
          setCurrentPage={setCurrentTemplatePage}
          totalCards={templateCardData.length}
          cardsPerPage={cardsPerPage}
        />
        <h1 className="text-4xl  my-10 font-bold text-center text-blue-600">
          CLONED PROJECTS
        </h1>
        <Cards currentCards={currentClonedCards} />
        <Pagination
          currentPage={currentClonedPage}
          setCurrentPage={setCurrentClonedPage}
          totalCards={clonedProjectsCardData.length}
          cardsPerPage={cardsPerPage}
        />
      </Body>
    </>
  );
};

export default OurProjectsPage;
