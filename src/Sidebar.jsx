import React from "react";
import {
  BsGearFill,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsCash,
  BsMegaphone,
  BsQuestionCircle
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsGearFill className="icon_header" /> DASHBOARD
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCash className="icon" /> Income
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMegaphone className="icon" /> Promote
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsQuestionCircle className="icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
