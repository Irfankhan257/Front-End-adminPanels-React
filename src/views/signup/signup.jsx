import InputField from "components/fields/InputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogInController } from "controllers/logInController";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "features/auth/authSlice";
import {
  Box,
  CircularProgress,
  LinearProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.auth);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (!role) newErrors.role = "Role is required.";
    if (!city) newErrors.city = "City is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!country) newErrors.country = "Country is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      email: email,
      password: password,
      name: name,
      city: city,
      country: country,
      phone: phone,
      role: role,
    };

    setIsLoading(true);
    try {
      const signUpData = await LogInController.SignUp(payload);
      if (signUpData) {
        navigate("/login");
      } else {
        dispatch(setError("Credentials failed. Please try again."));
      }
    } catch (error) {
      console.error("Sign Up failed:", error.message);
      dispatch(setError("Sign Up failed. Please try again later."));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            alignItems: "left",
            justifyContent: "center",
            height: "30vh",
            width: "40%",
            mt: 50,
          }}
        >
          <LinearProgress />
        </Box>
      ) : (
        <div className="mt-5 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          <div className="mt-[-4hv] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign Up
            </h4>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your details to become part of InvesTech!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-between">
                <InputField
                  variant="auth"
                  extra="mb-3 w-[48%]"
                  label="Name*"
                  placeholder="name"
                  id="name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  error={errors.name}
                />
                <InputField
                  variant="auth"
                  extra="mb-3 w-[48%]"
                  label="Email*"
                  placeholder="mail@simmmple.com"
                  id="email"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  error={errors.email}
                />
                <InputField
                  variant="auth"
                  extra="mb-3 w-[48%]"
                  label="Password*"
                  placeholder="Min. 8 characters"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={errors.password}
                />
                <FormControl variant="outlined" sx={{ mt: 3, width: "48%" }}>
                  <InputLabel
                    id="role-label"
                    sx={{ color: "text.navy-700", dark: { color: "white" } }}
                  >
                    Role*
                  </InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    value={role}
                    onChange={handleRoleChange}
                    label="Role*"
                    sx={{ color: "text.navy-700", dark: { color: "white" } }}
                  >
                    <MenuItem
                      value="innovator"
                      sx={{ color: "text.navy-700", dark: { color: "white" } }}
                    >
                      Innovator
                    </MenuItem>
                    <MenuItem
                      value="investor"
                      sx={{ color: "text.navy-700", dark: { color: "white" } }}
                    >
                      Investor
                    </MenuItem>
                  </Select>
                  {errors.role && (
                    <p className="text-sm text-red-500">{errors.role}</p>
                  )}
                </FormControl>
                <InputField
                  variant="auth"
                  extra="mb-3 w-[48%]"
                  label="City*"
                  placeholder="City"
                  id="city"
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                  error={errors.city}
                />
                <InputField
                  variant="auth"
                  extra="mb-3 w-[48%]"
                  label="Phone Number*"
                  placeholder="Phone Number"
                  id="phoneNumber"
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  error={errors.phone}
                />
                <InputField
                  variant="auth"
                  extra="mb-3 w-[48%]"
                  label="Country*"
                  placeholder="Country"
                  id="country"
                  type="text"
                  value={country}
                  onChange={handleCountryChange}
                  error={errors.country}
                />
              </div>
              {Object.keys(errors).length > 0 && (
                <div className="mt-4">
                  {Object.values(errors).map((errorMsg, index) => (
                    <p key={index} className="text-sm text-red-500">
                      {errorMsg}
                    </p>
                  ))}
                </div>
              )}
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
                Are you an Innovator?
              </span>
              <a
                href="innovatorsignin"
                className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              >
                Click here for Innovator Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
