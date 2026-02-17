import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="." style={{ marginRight: "20px" }}>
          Overview
        </Link>
        <Link to="details" style={{ marginRight: "20px" }}>
          Details
        </Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route index element={<h2>Profile Overview (Default)</h2>} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
