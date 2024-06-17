import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useUser } from "../services/auth/useUser";

import AppLayout from "./AppLayout";

function ProtectedRoute({ children }) {
  /**1) Load the authenticated user */
  const { isLoading, user, isAuthenticated } = useUser();
  console.log("THIS IS USERs EMAIL", user?.email);

  /**2) If there is no authenticated user redirect to /login */
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isLoading, isAuthenticated, navigate]
  );

  /**3) While loading show the spinner */
  if (isLoading) return <Spinner />;
  /**4) If there is a authenticated user render the app */
  if (isAuthenticated) {
    return (
      <>
        <AppLayout email={user.email} />
      </>
    );
  }
}

export default ProtectedRoute;
