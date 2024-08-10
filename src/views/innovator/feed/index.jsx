import React, { useEffect, useState } from "react";
import Banner1 from "./components/Banner";
import { Feedcards } from "./components/Feedcards";
import { FeedController } from "controllers/feedController";
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
import { PitchingIdeasController } from "controllers/pitchingIdeasController";

const Feed = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagId, setTagId] = useState("");
  const [tags, setTags] = useState([]);

  const itemsPerPage = 10;

  const { user, isAuthenticated } = useSelector(selectAuth);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tags = await PitchingIdeasController.FetchTags();
        console.log(tags);
        if (tags) {
          setTags(tags);
        }
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    const fetchIdeas = async () => {
      setLoading(true);
      const payload = {
        searchTerm: searchTerm,
        tagId: tagId,
      };
      try {
        let results;
        if (searchTerm || tagId) {
          results = await FeedController.FetchIdeasBySearch(payload);
        } else {
          results = await FeedController.FetchIdeas();
        }
        if (results) {
          const sortedResults = results.sort((a, b) => b.id - a.id);
          setIdeas(sortedResults);
        }
      } catch (error) {
        console.error("Error fetching ideas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
    fetchIdeas();
  }, [searchTerm, tagId]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };

  const handleTagChange = (event) => {
    setTagId(event.target.value);
    setPage(1); // Reset page to 1 when tag changes
  };

  // Calculate the current items to show based on the current page
  const currentIdeas = ideas.slice(
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
        <FormControl variant="outlined" className="w-1/3">
          <InputLabel>Tag</InputLabel>
          <Select value={tagId} onChange={handleTagChange} label="Tag">
            <MenuItem value="">All Tags</MenuItem>
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.id}>
                {tag.Tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
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
              className="mt-4 flex justify-center dark:text-white"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Feed;
