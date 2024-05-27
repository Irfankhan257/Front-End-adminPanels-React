// UserInfoModal.js
import Card from "components/card";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important for accessibility

const UserInfoModal = ({ isOpen, onRequestClose, user }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%", // Adjust as necessary
      height: "auto", // Adjust as necessary
      padding: "0",
      borderRadius: "20px", // Add rounded corners
      overflow: "hidden", // To match the card padding
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Info"
      style={customStyles}
    >
      <Card extra="w-full h-full p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            General Information
          </h4>
          <p className="mt-2 px-2 text-base text-gray-600">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all...
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
      </Card>
    </Modal>
  );
};

export default UserInfoModal;
