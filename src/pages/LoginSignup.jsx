import "./LoginSignup.css";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import Button from "../../ui/Button";
import useSignUp from "../services/useSignUp";
import Spinner from "../components/Spinner";
import useLogin from "../services/useLogin";
import useCreateUser from "../services/useCreateUser";

function LoginSignup() {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { signup, isLoading: isLoading1 } = useSignUp();
  const { login, isLoading: isLoading2 } = useLogin();
  const { newUser, isLoading: isLoading3 } = useCreateUser();
  function handleSubmit(action) {
    if (action === "Sign up") {
      signup({ fullName, email, password });
      newUser({ fullName, email });
    } else if (action === "Login") {
      login({ email, password });
    }
    setEmail("");
    setPassword("");
    setFullName("");
  }
  return isLoading1 || isLoading2 || isLoading3 ? (
    <Spinner />
  ) : (
    <div className="big-container">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        {action === "Sign up" && (
          <div className="inputs">
            <IoPerson className="icon" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}
        <div className="inputs">
          <MdEmail className="icon" />
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="inputs">
          <FaLock className="icon" />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </div>
        <div>
          <button className="submit-btn" onClick={() => handleSubmit(action)}>
            {action === "Login" ? "Submit" : "Register"}
          </button>
        </div>
        <div className="submit-container">
          <div
            className={action === "Sign up" ? "submit g" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
          <div
            className={action === "Login" ? "submit g" : "submit"}
            onClick={() => setAction("Sign up")}
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
