import React from "react";
import ReactDOM from "react-dom";
import { Input } from 'antd';
import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
const { Search } = Input;
import '../../variables.less'
class Routes extends React.Component {
  render() {
    return (
      <section className="topbar">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-jnj-gray">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >
            <strong>List Of Bots</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/dialog-builder"
                  activeClassName="active"
                >
                  All Bots
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/qna-models"
                  activeClassName="active"
                >
                  MyTeam Bots
                </NavLink>
              </li>
              <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  style={{ width: 200,left: '80vh' ,height: '5vh' }}
                />
            </ul>
          </div>
        </div>
      </nav>
    </section>
    );
  }
}
export default Routes;
