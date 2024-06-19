import "../../cssFiles/LoginSignup.css";
import useSignUp from "../../services/auth/useSignUp";
import { useForm } from "react-hook-form";

import Spinner from "../../pages/Spinner";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../../services/auth/useCreateUser";

function Signup() {
  /**METHOD 2 : USING REACT FORM */
  const navigate = useNavigate();
  const { signup, isLoading: isLoading1 } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { newUser, isLoading: isLoading2 } = useCreateUser();
  const { errors } = formState;
  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
    newUser({ fullName, email });
  }

  function handleNavigate1() {
    navigate("/signup", { replace: true });
  }
  function handleNavigate2() {
    navigate("/login", { replace: true });
  }
  return isLoading1 || isLoading2 ? (
    <Spinner />
  ) : (
    <div className="big-container">
      <div className="container">
        <div className="header">
          <div className="text">Sign up</div>
          <div className="underline"></div>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <label className="label">Full name</label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
            <span className="error">{errors?.fullName?.message}</span>
          </div>

          <div className="form-row">
            <label className="label">Email address</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />

            <span className="error">{errors?.fullName?.message}</span>
          </div>

          <div className="form-row">
            <label className="label">Password (min 8 characters)</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password need to be minimum of 8 characters",
                },
              })}
            />
            <span className="error">{errors?.fullName?.message}</span>
          </div>

          <div className="form-row">
            <label className="label">Repeat password</label>
            <input
              type="password"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
            <span className="error">{errors?.fullName?.message}</span>
          </div>

          <div className="submit-btn-signup">
            <button className="cancel-btn" type="reset">
              Cancel
            </button>
            <button className="submit-btn">Create new user</button>
          </div>
        </form>
        <div className="sign-up-login">
          <button className="btn" onClick={handleNavigate2}>
            Login
          </button>
          <button className="btn" onClick={handleNavigate1}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
