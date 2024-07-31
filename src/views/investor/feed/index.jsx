import React, { useEffect, useState } from "react";
import Banner1 from "./components/Banner";
import { Feedcards } from "./components/Feedcards";
import { FeedController } from "controllers/feedController";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";
import Progress from "components/progress";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const Feed = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  const { user, isAuthenticated } = useSelector(selectAuth);

  useEffect(() => {
    const fetchIdeas = async () => {
      const allIdeas = await FeedController.FetchIdeas();
      if (allIdeas) {
        // Sort ideas by ID in descending order
        const sortedIdeas = allIdeas.sort((a, b) => b.id - a.id);
        setIdeas(sortedIdeas);
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  // Calculate the current items to show based on the current page
  const currentIdeas = ideas.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="col-span-1 my-7 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <Banner1 />
      <div className="col-span-1 my-5 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {loading ? (
          <div className="flex h-screen items-start justify-center pt-20">
            <CircularProgress />
          </div>
        ) : (
          <>
            {currentIdeas.map((idea) => (
              <div
                className="col-span-1 my-5 h-fit w-full xl:col-span-1 2xl:col-span-2"
                key={idea.id}
              >
                <Feedcards key={idea.id} idea={idea} user={user} />
              </div>
            ))}
            <Pagination
              count={Math.ceil(ideas.length / itemsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
              className="mt-4 flex justify-center"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Feed;
