// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Badge } from "antd";
// import "../styles/LayoutStyles.css";

// const rofile = () => {
//   // Fetch user data from Redux store
//   const { user } = useSelector((state) => state.user);

//   return (
//     <div className="profile-page-container">
//       <h1 className="text-center">Profile Page</h1>
//       <div className="profile-details">
//         <h2>Name: {user?.name || "N/A"}</h2>
//         <p>Email: {user?.email || "N/A"}</p>
//         <p>Phone: {user?.phone || "N/A"}</p>
//         <Badge count={user?.notifications?.length || 0} className="notification-badge">
//           <Link to="/notifications">Notifications</Link>
//         </Badge>
//       </div>
//       <div className="profile-actions">
//         <Link to="/edit-profile" className="btn btn-primary">
//           Edit Profile
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default rofile;
