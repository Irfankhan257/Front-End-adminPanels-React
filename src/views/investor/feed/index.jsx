import React, { useEffect, useState } from "react";
import Banner1 from "./components/Banner";
import { Feedcards } from "./components/Feedcards";
import { FeedController } from "controllers/feedController";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";

const Feed = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const data = await FeedController.FetchIdeas();
      setIdeas(data);
    };

    fetchIdeas();
  }, []);
  const { user,role, isAuthenticated } = useSelector(selectAuth);
    
  return (
    <div className="col-span-1 my-7 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <Banner1 />
      <div className="col-span-1 my-5 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {ideas && ideas.length > 0 ? (
          ideas.map((idea, index) => (
            <div
              className="col-span-1 my-5 h-fit w-full xl:col-span-1 2xl:col-span-2"
              key={idea.id}
            >
              <Feedcards key={idea.id} idea={idea} />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Feed;
