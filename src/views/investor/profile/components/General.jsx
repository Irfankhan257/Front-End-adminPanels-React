import Card from "components/card";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { LogInController } from "controllers/logInController";

const General = ({ userInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({ ...userInfo });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({
      ...editedInfo,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const newInfo = await LogInController.EditInfo(editedInfo);
      console.log(newInfo);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save user info:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="mt-2 mb-9 flex w-full flex-col">
        <div className="flex items-center justify-between">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            General Information
          </h4>
          {isEditing ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save"}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </div>
        {isEditing ? (
          <TextField
            name="city"
            value={editedInfo.generalInfo}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
          />
        ) : (
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {userInfo.generalInfo}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">City</p>
          {isEditing ? (
            <TextField
              name="city"
              value={editedInfo.city}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          ) : (
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {userInfo.city}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Country</p>
          {isEditing ? (
            <TextField
              name="country"
              value={editedInfo.country}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          ) : (
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {userInfo.country}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Email</p>
          {isEditing ? (
            <TextField
              name="email"
              value={editedInfo.email}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          ) : (
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {userInfo.email}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Password</p>
          {isEditing ? (
            <TextField
              name="password"
              value={editedInfo.password}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
              type="password"
            />
          ) : (
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {userInfo.password}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Phone</p>
          {isEditing ? (
            <TextField
              name="phone"
              value={editedInfo.phone}
              onChange={handleChange}
              variant="outlined"
              size="small"
              fullWidth
            />
          ) : (
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {userInfo.phone}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Role</p>

          <p className="text-base font-medium text-navy-700 dark:text-white">
            {userInfo.role}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
