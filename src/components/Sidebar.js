import React from "react";
import "../components/Sidebar.css";
import bkgImage from "../bkg-image.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bkgImage} alt="" />
        <AccountCircleIcon src={user.photoUrl} className="sidebar__avatar"> {user.email[0]}
        </AccountCircleIcon>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">34</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className="sidebar__statNumber">346</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React JS")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("Design")}
        {recentItem("Developer")}
      </div>
    </div>
  );
}

export default Sidebar;
