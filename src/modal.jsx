// UserInfoModal.js
import Card from "components/card";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { CircularProgress, Rating } from "@mui/material";
import banner from "assets/img/profile/banner.png";
import { FeedController } from "controllers/feedController";
import Progress from "components/progress";

Modal.setAppElement("#root"); // Important for accessibility

const UserInfoModal = ({ isOpen, onRequestClose, user, rating, loading }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "auto",
      padding: "0",
      borderRadius: "20px",
      overflow: "hidden",
    },
  };

  console.log("rating", rating);

  const [postRating, setPostRating] = useState({
    id: user.id,
    role: user.role,
    rating: 4,
  });

  const handleRatingChange = (event, newValue) => {
    setPostRating((prevState) => ({
      ...prevState,
      rating: newValue,
    }));
  };
  const postRatingData = async () => {
    await FeedController.PostUserRating(postRating);
  };

  useEffect(() => {}, [postRating]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Info"
      style={customStyles}
    >
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <Card extra="w-full h-full p-3">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              General Information
            </h4>
            <p className="mt-2 px-2 text-base text-gray-600">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all...
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 px-2">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.name}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.email}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.phone}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">City</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.city}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Country</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {user.country}
              </p>
            </div>
          </div>
          <div className="rating-section mt-8 items-center px-2">
            <h1 className="text-4xl font-bold text-navy-700 dark:text-white">
              Rating
            </h1>
            <div className="flex items-center">
              <Rating
                // className="text-xl font-bold text-navy-700 dark:text-white"
                defaultValue={
                  rating.overAllRating !== undefined
                    ? rating.overAllRating.toFixed(2)
                    : postRating.rating
                }
                onChange={handleRatingChange}
                onClick={postRatingData}
                precision={0.5}
                sx={{ fontSize: 48 }}
              />
              <h2 className="ml-5 text-5xl font-bold text-navy-700 dark:text-white">
                {rating.overAllRating !== undefined
                  ? rating.overAllRating.toFixed(2)
                  : postRating.rating}
              </h2>
            </div>
          </div>
        </Card>
      )}
    </Modal>
  );
};

export default UserInfoModal;
