import React, { useState } from "react";
import Card from "components/card";
import UserInfoModal from "modal";
import { FeedController } from "controllers/feedController";

const InvestorCard = ({ investor }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userRating, setUserRating] = useState({});
  const [loading, setLoading] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  const fetchRating = async () => {
    const payload = {
      id: investor.id,
      role: investor.role,
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

  // Function to get the initials
  const getInitials = (name) => {
    const nameArray = name.split(" ");
    const initials =
      nameArray.length === 1
        ? nameArray[0].charAt(0).toUpperCase()
        : nameArray[0].charAt(0).toUpperCase() +
          nameArray[1].charAt(0).toUpperCase();
    return initials;
  };

  // Render the initials or the image
  const renderImageOrInitials = () => {
    if (investor.imgUrl) {
      return (
        <img
          src={investor.imgUrl}
          alt={investor.name}
          className="m-1 mb-4 h-24 w-24 rounded-full object-cover"
        />
      );
    } else {
      return (
        <div className="bg-primary text-black m-1 mb-4 flex h-24 w-24 items-center justify-center rounded-full text-xl font-bold">
          {getInitials(investor.name)}
        </div>
      );
    }
  };

  return (
    <>
      <Card extra="flex w-full h-full flex-col items-center px-4 py-6 shadow-lg">
        <div className="flex flex-col items-center">
          {renderImageOrInitials()}
          <div className="info text-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {investor.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{investor.email}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center">
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
      </Card>
      <UserInfoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        innovator={investor}
        rating={userRating}
        loading={loading}
      />
    </>
  );
};

export default InvestorCard;
