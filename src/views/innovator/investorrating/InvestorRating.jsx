import React, { useEffect, useState } from "react";
import Banner1 from "./components/Banner";
import InvestorCard from "./components/Feedcards";
import { useSelector } from "react-redux";
import { selectAuth } from "features/auth/authSlice";
import {
  CircularProgress,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { FeedController } from "controllers/feedController";

const InvestorFeed = () => {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  const { user, isAuthenticated } = useSelector(selectAuth);

  useEffect(() => {
   
    const fetchInvestors = async () => {
      setLoading(true);
      const payload = {
        searchTerm: searchTerm,
      };
      try {
        let results;
        if (searchTerm) {
          results = await FeedController.InvestorSearch(payload);
          console.log("search term", results);
          
        } else {
          results = await FeedController.Investors();
          console.log(results);
        }
         if (results) {
           setInvestors(results);
         }
      } catch (error) {
        console.error("Error fetching investors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestors();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };


  // Calculate the current items to show based on the current page
  const currentInvestors = investors.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="col-span-1 my-7 h-fit w-full xl:col-span-1 2xl:col-span-2">
      <Banner1 />
      <div className="my-5 flex items-center justify-between">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-1/3"
        />
      </div>
      <div className="col-span-1 my-5 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {loading ? (
          <div className="flex h-screen items-start justify-center pt-20">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {currentInvestors.map((investor) => (
                <InvestorCard key={investor.id} investor={investor} />
              ))}
            </div>
            <Pagination
              count={Math.ceil(investors.length / itemsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
              className="mt-4 flex justify-center dark:text-white"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default InvestorFeed;
