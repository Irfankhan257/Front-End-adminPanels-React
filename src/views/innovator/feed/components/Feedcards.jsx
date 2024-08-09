import React, { useState } from "react";
import Card from "components/card";
import UserInfoModal from "modal";
import { FeedController } from "controllers/feedController";

// Define an array of Tailwind color class names for the circles
const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

export const Feedcards = ({ idea, index }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userRating, setUserRating] = useState({});
  const [loading, setLoading] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  const fetchRating = async () => {
    const payload = {
      id: idea.innovator.id,
      role: idea.innovator.role,
    };
    setLoading(true);
    try {
      const fetchuserRating = await FeedController.FetchUserRating(payload);
      setUserRating(fetchuserRating);
    } catch (error) {
      console.error("Failed to fetch user rating:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    fetchRating();
    setModalIsOpen(true);
  };

  const getInitials = (title) => {
    return title
      .split(" ")
      .map((word) => word[0])
      .slice(0, 3)
      .join("")
      .toUpperCase();
  };

  // Use modulo to cycle through the color classes array
  const colorIndex = Math.floor(
    (idea.ideaTitle.charCodeAt(0) + idea.ideaTitle.length) % colors.length
  );
  const circleClass = colors[colorIndex];

  return (
    <>
      <Card extra="flex w-full h-full flex-col px-3 py-3">
        <div className="flex items-center">
          <div
            className={`text-l text-black relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full ${circleClass}`}
          >
            {getInitials(idea.ideaTitle)}
          </div>
          <div className="info ml-3 flex-1">
            <h2>{idea.ideaTitle}</h2>
            <p>{idea.ideaDescription}</p>
          </div>
          <div className="rating ml-auto mt-auto mb-2 flex items-center">
            <h6 className="mr-2">{idea.innovator.name}</h6>
            <button onClick={handleClick} className="focus:outline-none">
              <svg
                className="cursor-pointer text-gray-600 duration-100 hover:text-yellow-400"
                width="23"
                height="23"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="m-3 mt-auto flex w-full">
          <h6 className="mr-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Tag:
          </h6>
          {idea.ideaTag && idea.ideaTag.Tag ? (
            <span className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              {idea.ideaTag.Tag}
            </span>
          ) : (
            <p className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              No tags
            </p>
          )}
        </div>
      </Card>
      <UserInfoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        innovator={idea.innovator}
        rating={userRating}
        loading={loading}
      />
    </>
  );
};
