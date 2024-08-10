import React from "react";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = ({ userInfo }) => {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 3)
      .join("")
      .toUpperCase();
  };

  if (!userInfo || !userInfo.name) {
    return <div>Loading...</div>; 
  }

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-brandLinear dark:!border-navy-700">
          <div
            className={`text-black relative m-1 mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-brandLinear text-4xl`}
          >
            {getInitials(userInfo.name)}
          </div>
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
          {userInfo.name}
        </h4>
        <p className="text-lg font-normal text-gray-600">{userInfo.role}</p>
      </div>
    </Card>
  );
};

export default Banner;
