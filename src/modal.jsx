import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { CircularProgress, Rating, Button } from "@mui/material";
import Card from "components/card";
import { FeedController } from "controllers/feedController";
import { EmailController } from "controllers/emailController";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";

Modal.setAppElement("#root");

const UserInfoModal = ({
  isOpen,
  onRequestClose,
  innovator,
  rating,
  loading,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      maxHeight: "68%",
      padding: "0",
      borderRadius: "20px",
      overflowY: "auto",
    },
  };

  const { user } = useSelector(selectAuth);

  const [postRating, setPostRating] = useState({
    id: innovator.id,
    role: innovator.role,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [ratingDisabled, setRatingDisabled] = useState(false);

  const handleRatingChange = (event, newValue) => {
    setPostRating((prevState) => ({
      ...prevState,
      rating: newValue,
    }));
  };

  const postRatingData = async () => {
    setIsLoading(true);
    try {
      if (postRating.rating) {
        await FeedController.PostUserRating(postRating);
        alert("Rating submitted successfully!"); // Show alert on success
        setRatingDisabled(true); // Disable the rating component
      }
    } catch (error) {
      console.error("Rating failed:", error.message);
      alert("Failed to submit rating."); // Show alert on failure
    } finally {
      setIsLoading(false);
    }
  };

  const sendEmail = async () => {
    const emailDetails = {
      to: innovator.email,
      sender: user.email,
      subject: "You've got a message!",
      text: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Investor Interest Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        h1 {
            color: #0056b3;
        }
        .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Dear ${innovator.name},</p>
        <p>We are pleased to inform you that an investor has expressed interest in your project,  on the Investech platform. The investor was impressed with your concept and would like to explore the possibility of working together.</p>
        <p>To protect your privacy and maintain confidentiality, we recoomend using this email chain to continue further communication.</p>
        <p>Please respond at your earliest convenience so we can proceed accordingly and do not forget to rate the investor from your panel by simple going to "Rate An Investor" and searching for thier email</p>
        <p>Thank you for using Investech to showcase your innovative ideas, and we look forward to supporting you in this exciting opportunity.</p>
        <p>The Person trying to reach you is listed at the end of this email with the title "Sender Email".</p>

        <p>Best regards,<br>The Investech Team</p>
    </div>
</body>
</html>
`,
    };

    try {
      await EmailController.SendEmail(emailDetails);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Email sending failed:", error.message);
      alert("Failed to send email.");
    }
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
        <Card extra="w-full h-auto p-3">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              General Information
            </h4>
            <p className="mt-2 px-2 text-base text-gray-600">
              {innovator.generalInfo}
            </p>
          </div>
          {/* User Information */}
          <div className="grid grid-cols-2 gap-4 px-2">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Name</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {innovator.name}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {innovator.email}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {innovator.phone}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">City</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {innovator.city}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Country</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {innovator.country}
              </p>
            </div>
          </div>
          {/* Rating Section */}
          <div className="rating-section mt-8 items-center px-2">
            <h1 className="text-4xl font-bold text-navy-700 dark:text-white">
              Rating
            </h1>
            {isLoading ? (
              <div className="flex items-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="flex items-center">
                <Rating
                  defaultValue={
                    rating.overAllRating !== undefined
                      ? rating.overAllRating.toFixed(2)
                      : postRating.rating
                  }
                  onChange={handleRatingChange}
                  onClick={postRatingData}
                  precision={0.5}
                  sx={{ fontSize: 48 }}
                  disabled={ratingDisabled} // Disable rating if set
                />
                <h2 className="ml-5 text-5xl font-bold text-navy-700 dark:text-white">
                  {rating.overAllRating !== undefined
                    ? rating.overAllRating.toFixed(2)
                    : postRating.rating}
                </h2>
              </div>
            )}
          </div>
          {/* Send Email Button */}
          <div className="send-email-section mt-8 items-center px-2">
            <Button
              variant="contained"
              color="primary"
              onClick={sendEmail}
              disabled={isLoading}
            >
              Send Email
            </Button>
          </div>
        </Card>
      )}
    </Modal>
  );
};

export default UserInfoModal;
