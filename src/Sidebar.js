import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://static.vecteezy.com/system/resources/previews/006/920/871/original/girls-with-bob-hairstyle-abstract-female-shap-and-silhouette-abstract-women-portrait-in-pastel-colors-contemporary-art-posters-fashion-girl-for-social-media-vector.jpg"
        title="Riya Gupta"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="MarketPlace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
