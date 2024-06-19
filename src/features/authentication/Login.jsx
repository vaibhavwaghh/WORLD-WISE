import "../../cssFiles/LoginSignup.css";
import useLogin from "../../services/auth/useLogin";
import { useForm } from "react-hook-form";
import Spinner from "../../pages/Spinner";

import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit({ email, password }) {
    login({ email, password }, { onSettled: () => reset() });
  }
  function handleNavigate1() {
    navigate("/signup", { replace: true });
  }
  function handleNavigate2() {
    navigate("/login", { replace: true });
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="big-container">
          <div className="container">
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                <span className="error">{errors?.email?.message}</span>
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
                <span className="error">{errors?.password?.message}</span>
              </div>

              <div className="submit-btn-login">
                <button className="cancel-btn" type="reset">
                  Cancel
                </button>
                <button className="submit-btn">Submit</button>
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
      )}
    </>
  );
}

export default Login;
