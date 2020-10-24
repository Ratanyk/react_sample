import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Menu } from "antd";

import "./topbar.less";
import "../../variables.less";
import UserProfile from "../common/userProfile/userProfile.jsx";
import { resolveMediaPath } from "../../services/configs";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: localStorage.getItem("storedUserData"),
      media_url: resolveMediaPath(),
    };
  }

  toggleCreateBtn = (e) => {};

  render() {
    return (
      <section className="topbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-jnj-red">
          <div className="container d-flex justify-content-between">
            <div>
              <Link className="navbar-brand" to="/bots/">
                <img
                  src="https://dev.jnjux.com/media/root/logo-full-high.png"
                  height="35px"
                  alt=""
                />
              </Link>
            </div>

            <div className="color-jnj-white text-center">
              <strong> PII Tranformation</strong>
            </div>

            <div className="navbar-user">
              {/* <Avatar className="user-avatar">SC</Avatar>
              <span className="user-full-name text-muted ml-2">
                <Dropdown overlay={this.menu}>
                  <a className="" onClick={e => e.preventDefault()}>
                    <span className="fa fa-fw fa-angle-down"></span>
                  </a>
                </Dropdown>
              </span> */}
              {/* <UserProfile data={this.state.userData} /> */}
            </div>
          </div>
          <div>{this.state.env}</div>
        </nav>
        {/* <FileUpload/> */}
      </section>
    );
  }

  //helper components
  menu = (
    <Menu onClick={this.onClick}>
      <Menu.Item key="1" className="fs-20">
        Shrikar Chonkar
      </Menu.Item>
      <Menu.Item key="2">Profile</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
}
export default Topbar;
