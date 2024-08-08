import { FeedController } from "controllers/feedController";
import Banner from "./components/Banner";
import General from "./components/General";
import Project from "./components/Project";
import RatingCard from "./components/RatingCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectAuth } from "features/auth/authSlice";
import { LogInController } from "controllers/logInController";
import { CircularProgress } from "@mui/material";

const ProfileOverview = () => {
  const [userRating, setUserRating] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [userIdeas, setUserIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector(selectAuth);

  useEffect(() => {
    if (user) {
      const fetchUserInfo = async () => {
        const payload = {
          id: user.id,
          role: user.role,
        };

        const ideasPayload = {
          innovatorId: user.id,
        };
        setIsLoading(true); // Set loading to true when fetching starts
        try {
          const fetchUserRating = await FeedController.FetchUserRating(payload);
          const fetchUserInfo = await LogInController.UserInfo(payload);
          const fetchUserIdeas = await FeedController.FetchIdeasByInnovator(
            ideasPayload
          );
          setUserIdeas(fetchUserIdeas);
          setUserInfo(fetchUserInfo);
          setUserRating(fetchUserRating);
        } catch (error) {
          console.error("Failed to fetch user rating:", error);
        } finally {
          setIsLoading(false); // Set loading to false when fetching ends
        }
      };

      fetchUserInfo();
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex w-full flex-col gap-5">
          <div className="mt-3 flex h-fit w-full flex-col gap-5 lg:grid lg:grid-cols-12">
            <div className="col-span-8 lg:!mb-0">
              <Banner userInfo={userInfo} />
            </div>
            <div className="col-span-4 lg:!mb-0">
              <RatingCard userRating={userRating} />
            </div>
          </div>
          <div className="mt-3 flex h-fit w-full flex-col gap-5 lg:grid lg:grid-cols-12">
            <div className="col-span-7 lg:!mb-0">
              <Project userIdeas={userIdeas} />
            </div>
            <div className="col-span-5 lg:!mb-0">
              <General userInfo={userInfo} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileOverview;
