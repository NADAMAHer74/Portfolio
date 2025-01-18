import React from "react";

function Cards({ currentCards }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="card  relative col-span-1  shadow-xl group md:w-[450px] md:h-[250px] "
          >
            <figure className=" absolute top-0 left-0 size-full border rounded-2xl  transform transition-transform duration-400 ease-in-out overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="size-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
            <div className="card-body  border rounded-2xl opacity-0 group-hover:opacity-100  transform transition-opacity duration-1000  bg-black bg-opacity-60 !text-white font-bold">
              <h2 className="card-title font-semibold m-auto text-3xl">
                {card.title}
              </h2>
              <div className="card-actions justify-center">
                <button
                  onClick={() => window.open(card.link, "_blank")}
                  className="btn btn-primary"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
