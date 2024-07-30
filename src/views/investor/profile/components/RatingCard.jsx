import React from "react";
import Card from "components/card";
import { Rating } from "@mui/material";
import banner from "assets/img/profile/banner.png";

const RatingCard = ({ userRating }) => {
  return (
    <Card
      extra={"w-full h-full p-4"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className="absolute inset-0 flex h-full flex-col items-center justify-center">
          <div style={{ margin: "20px" }}>
            <h1 className="text-4xl font-bold text-navy-700 dark:text-white">
              Rating
            </h1>
          </div>
          <div style={{ margin: "20px" }}>
            <Rating
              className="text-xl font-bold text-navy-700 "
              defaultValue={userRating.overAllRating}
              precision={0.5}
              readOnly
              sx={{ fontSize: 48 }}
            />
          </div>
          <div style={{ margin: "20px" }}>
            <h2 className="text-3xl font-bold text-navy-700 dark:text-white">
              {userRating.overAllRating !== undefined
                ? userRating.overAllRating.toFixed(2)
                : "Rating not available"}
            </h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RatingCard;
