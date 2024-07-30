import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/profile/image1.png";
import image2 from "assets/img/profile/image2.png";
import image3 from "assets/img/profile/image3.png";
import Card from "components/card";

const Project = ({ userIdeas }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Change this value to display more or fewer items per page

  // Calculate the indices for slicing the data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userIdeas.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(userIdeas.length / itemsPerPage);

  // Pagination handlers
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          All Pitches
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can find more details about your projects
        </p>
      </div>
      {currentItems.map((idea, index) => (
        <div
          key={idea.id}
          className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-20 rounded-lg object-cover"
                src={
                  (index + indexOfFirstItem) % 3 === 0
                    ? image1
                    : (index + indexOfFirstItem) % 3 === 1
                    ? image2
                    : image3
                }
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">
                Project #{index + 1 + indexOfFirstItem}
              </p>
              <h5 className="mt-1 text-base font-semibold text-navy-700 dark:text-white">
                Title
              </h5>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {idea.ideaTitle}
              </p>
              <h5 className="mt-2 text-base font-semibold text-navy-700 dark:text-white">
                Description
              </h5>
              <p className="text-sm text-gray-600">{idea.ideaDescription}</p>
            </div>
          </div>
          <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
            <MdModeEditOutline />
          </div>
        </div>
      ))}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 rounded bg-gray-200 px-4 py-2 dark:bg-navy-600"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="mx-2 rounded bg-gray-200 px-4 py-2 dark:bg-navy-600"
        >
          Next
        </button>
      </div>
    </Card>
  );
};

export default Project;
