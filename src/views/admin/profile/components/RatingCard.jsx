import React from "react";
import Card from "components/card";
import { Rating } from "@mui/material";
import banner from "assets/img/profile/banner.png";

const RatingCard = () => {
  return (
    <Card extra={"w-full h-full p-4"} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="relative flex flex-col items-center justify-center h-full w-full rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center h-full">
          <div style={{ margin: '20px' }}>
            <h1 className="text-4xl font-bold text-navy-700 dark:text-white">Rating</h1>
          </div>
          <div style={{ margin: '20px' }}>
            <Rating className="text-xl font-bold text-navy-700 dark:text-white" defaultValue={5} precision={0.5} readOnly sx={{ fontSize: 48 }} />
          </div>
          <div style={{ margin: '20px' }}>
            <h2 className="text-3xl font-bold text-navy-700 dark:text-white">5</h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RatingCard;
