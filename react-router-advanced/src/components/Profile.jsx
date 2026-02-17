import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="" style={{ marginRight: "15px" }}>
          Overview
        </Link>{" "}
        {/* index */}
        <Link to="details" style={{ marginRight: "15px" }}>
          Details
        </Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}
