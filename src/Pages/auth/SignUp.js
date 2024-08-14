import React, { useState } from "react";
import BackwardButton from "../../Components/BackwardButton";
import Input from "../../Components/Input";
import GlobalButton from "../../Components/GlobalButton";
import SelectCountry from "../../Components/CountrySelect";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    re_password: "",
    code: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    // Validation
    console.log(formData);
    if (formData.password !== formData.re_password) {
      setError("Passwords do not match");
      return;
    }
    if (formData.password.length < 6) {
      // Example: Minimum password length
      setError("Password must be at least 6 characters long");
      return;
    }
    try {
      // Send formData to the backend
      const response = await axios.post(
        "http://185.97.146.208:5000/register",
        formData
      );
      navigate("/login"); // Change the path to your Login page route
      console.log("Form submitted successfully", response.data);
      // Reset form or handle success
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while submitting the form."); // Set error message
    }
  };
  return (
    <div className="container-auth">
      <Link to="/login">
        <BackwardButton />
      </Link>
      <div className="container-signup">
        <div className="text-title">Create Account</div>
        <div className="container-signup-input">
          <form onSubmit={handleSubmit}>
            <Input
              htmlFor={"Name"}
              Icon={"user"}
              placeholder={"Enter your name"}
              name={"name"}
              onChange={handleChange}
              type={"text"}
            />
            <Input
              htmlFor={"Mobile Number"}
              Icon={"calloutgoing"}
              placeholder={"Enter your Mobile number"}
              name={"phone_number"}
              value={formData.phone_number}
              onChange={handleChange}
              type={"text"}
            />
            <Input
              htmlFor={"Gmail Account"}
              Icon={"directory"}
              placeholder={"Enter your email"}
              name={"email"}
              value={formData.email}
              onChange={handleChange}
              type={"text"}
            />
            <SelectCountry />
            <Input
              htmlFor={"Password"}
              Icon={"eye"}
              placeholder={"Enter your Password"}
              name={"password"}
              value={formData.password}
              onChange={handleChange}
              type={"password"}
            />
            <Input
              htmlFor={"Repeat Password"}
              Icon={"eye"}
              placeholder={"Enter your Password"}
              name={"re_password"}
              onChange={handleChange}
              type={"password"}
            />
            <Input
              htmlFor={"Referral Code *"}
              Icon={"Vector"}
              placeholder={"Enter your Sponsor Code"}
              name={"code"}
              onChange={handleChange}
              type={"text"}
            />
            {error && <div className="error-message">{error}</div>}{" "}
            {/* Display error message */}
            <GlobalButton Class={"signup-button"} BtnName={"Sign Up"} />
            <Link to="/login" className="already-account">
              Already have an account?
              <span className="auth-span">Log In</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
