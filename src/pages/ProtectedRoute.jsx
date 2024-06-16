// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/FakeAuthContex";
// import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useUser } from "../services/useUser";
import { useEffect } from "react";
import { useUserDetails } from "../services/useUserDetails";
import User from "../components/User";
import AppLayout from "./AppLayout";

// function ProtectedRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   useEffect(
//     function () {
//       if (!isAuthenticated) navigate("/");
//     },
//     [isAuthenticated, navigate]
//   );
//   return isAuthenticated ? children : null;
// }

// export default ProtectedRoute;

// const FullPage = styled.div`
//   height: 100vh;
//   background-color: var(--color-grey-50);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

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
