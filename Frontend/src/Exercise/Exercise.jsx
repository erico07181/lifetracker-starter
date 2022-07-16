import { Link, useNavigate } from "react-router-dom";
import Login from "../Navbar/Login/Login";

import "./Exercise.css";

export default function Exercise({
  setAppState,
  user,
  setUser,
  setIsLoggedIn,
  isLoggedIn,
}) {
  const navigate = useNavigate();

  const isAuthenticated = Boolean(user?.email);

  //   const handleOnLogout = () => {
  //     setAppState({});
  //     navigate("/");
  //   };

  if (isLoggedIn) {
    return (
      <div className="ExercisePage">
        <div className="Banner">
          <h1>Exercise</h1>
        </div>
        <div className="content">
          <div className="ExerciseOverview">
            <div className="header">
              <h3>Overview</h3>
              <button className="Button outline small outline gold">
                Add Exercise
              </button>
            </div>
            <div className="feed">
              <div className="empty">
                <h2>Nothing here yet</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <Login
        setAppState={setAppState}
        setUser={setUser}
        user={user}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
      />
    );
  }
}
