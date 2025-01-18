import React from "react";

export default function ProjectJourneyCards({ stepsCards }) {
  return (
    <>
      {stepsCards.map((card, index) => (
        <div
          key={index}
          className="card card-compact border-none max-w-screen-md  "
        >
          <figure>
            <img src={card.image} alt={card.title} />
          </figure>
          <div className="card-body text-center">
            <h2 className={`card-title m-auto  ${card.color} font-semibold`}>
              {card.title}
            </h2>
            <p className="text-gray-500 ">{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
