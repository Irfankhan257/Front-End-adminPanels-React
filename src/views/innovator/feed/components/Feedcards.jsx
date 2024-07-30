// Feedcards.js
import React, { useState } from "react";
import Card from "components/card";
import UserInfoModal from "modal";
import { FeedController } from "controllers/feedController";

export const Feedcards = ({ idea }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userRating, setUserRating] = useState({});
  const [loading, setLoading] = useState(false);

  const closeModal = () => setModalIsOpen(false);


  const fetchRating = async () => {
    const payload = {
      id: idea.innovator.id,
      role: idea.innovator.role,
    };
    setLoading(true); // Set loading to true when fetching starts
    try {
      const fetchuserRating = await FeedController.FetchUserRating(payload);
      setUserRating(fetchuserRating);
    } catch (error) {
      console.error("Failed to fetch user rating:", error);
    } finally {
      setLoading(false); // Set loading to false when fetching ends
    }
  };

  const handleClick = () => {
    fetchRating();
    setModalIsOpen(true);
  };

  return (
    <>
      <Card extra="flex w-full h-full flex-col px-3 py-3">
        <div className="flex items-center">
          <div className="relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl text-white">
            p
          </div>
          <div className="info ml-3 flex-1">
            <h2>{idea.ideaTitle}</h2>
            <p>{idea.ideaDescription}</p>
          </div>
          <div className="rating ml-auto mt-auto mb-2">
            <h6>{idea.innovator.name}</h6>
            <button onClick={handleClick} className="focus:outline-none">
              <svg
                className="peer cursor-pointer text-gray-600 duration-100 hover:text-yellow-400 peer-hover:text-yellow-400"
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
