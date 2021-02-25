import React from "react";

const Dashboard = (props) => {
  const logout = () => {
    localStorage.setItem("isSignedIn", false);
    localStorage.setItem("email", null);
    localStorage.setItem("password", null);
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
