import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  cardsPerPage,
  currentPage,
  setCurrentPage,
  totalCards,
}) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="flex items-center justify-start border-b border-gray-200 bg-white px-4 py-3 sm:px-6 mx-8 gap-x-2 ">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="relative inline-flex items-center border rounded-lg   px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon aria-hidden="true" className="size-5" />
        </button>
        <div className="sm:flex sm:items-center sm:justify-between ">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex  shadow-xs gap-x-2"
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold border-none ${
                  currentPage === index
                    ? "bg-blue-500 text-white border rounded-lg"
                    : "text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage >= totalPages - 1}
          href="#"
          className="relative inline-flex items-center border rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon aria-hidden="true" className="size-5" />
        </button>
      </div>
    </>
  );
}
