import React from "react";
import "./App.css";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import {
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Forum,
  ExpandMore,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useStateValue } from "./StateProvider";
function Header(src) {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Face" type="text" />
        </div>
      </div>

      <div className="header_center">
        <div
          className="header_option 
        header_option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />

          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
