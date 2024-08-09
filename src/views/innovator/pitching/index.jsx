import { CircularProgress } from "@mui/material";
import InputField from "components/fields/InputField";
import { PitchingIdeasController } from "controllers/pitchingIdeasController";
import { setError } from "features/auth/authSlice";
import { selectAuth } from "features/auth/authSlice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PitchingIdeas = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const { error } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTagChange = (e) => setSelectedTag(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      description: description,
      userId: user.id,
      tagId: selectedTag,
    };

    setLoading(true);
   try {
     const addIdea = await PitchingIdeasController.PostIdea(payload);
     if (addIdea) {
      navigate("/innovator")
     }
   } catch (err) {
     console.error("Idea failed:", err.message);
     dispatch(setError("Idea submission failed. Please try again."));
   } finally {
     setLoading(false);
   }
  };

  const fetchTags = async () => {
    try {
      const tags = await PitchingIdeasController.FetchTags();
      setTags(tags);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="col-span-1 my-7 flex  w-full items-start justify-center pt-16 xl:col-span-1 2xl:col-span-2 ">
          <div className="w-full max-w-[420px] rounded-lg  p-6 shadow-md">
            <h4 className="mb-4 text-center text-4xl font-bold text-navy-700 dark:text-white">
              Pitch an Idea!
            </h4>
            <p className="mb-6 text-center text-base text-gray-600">
              Enter the details for idea give it a catchy Title and a brief
              description on what your idea is and how it will help the world
              with some investment!
            </p>
            <form onSubmit={handleSubmit}>
              <InputField
                variant="auth"
                extra="mb-3"
                label="Title*"
                placeholder="Enter your title"
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
              <InputField
                variant="auth"
                extra="mb-3"
                label="Description*"
                placeholder="Enter your description"
                id="description"
                type="text"
                value={description}
                onChange={handleDescriptionChange}
              />
              <div className="mb-3">
                <label
                  htmlFor="tags"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Tags*
                </label>
                <select
                  id="tags"
                  value={selectedTag}
                  onChange={handleTagChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                >
                  <option value="">Select a tag</option>
                  {tags.map((tag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.Tag}
                    </option>
                  ))}
                </select>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Pitch
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PitchingIdeas;
