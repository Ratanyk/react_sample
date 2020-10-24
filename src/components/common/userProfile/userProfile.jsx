import React, { Component } from 'react';
import './userProfile.less';
import { Menu, Avatar, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
const userLogo = {
    margin: '0 8px 0px 0px'
}
const menu = () => {
    return (
        <Menu>
            <Menu.Item key="0">
                <Link to="/">Account</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/">Notifications</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/">Settings</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/" onClick={logout}>Logout</Link>
            </Menu.Item>
        </Menu>
    );
};
function logout() {
    // console.log('logout clicked');
    localStorage.clear();
    //route to '/' route
}
class UserProfile extends Component {
    constructor(props) {
        super(props)
        // console.log(props, ':: props');

        this.state = {
            data: JSON.parse(props.data)
        }
        // console.log(this.state, ':: state');
        // console.log(typeof(this.state.data.displayName), 'typeof(this.state.data.displayName)');

    }
    render() {
        return (
            <section className="userProfile">
                <span className="white" style={{ verticalAlign: "middle", fontSize: "14px" }}>
                    <Avatar className="user-avatar" style={userLogo}>
                        {/* { this.state.data.displayName ? this.state.data.displayName.substring(0, 2) : 'UN'} */}
                        MP
                    </Avatar>
                    <span className="white">
                        {/* {typeof(this.state.data.displayName)} */}
                        {/* {this.state.data.displayName ? this.state.data.displayName : 'User, Name LastName [JJCUS - Non J&J]'} */}
                        Patil, Mahendra [JJCUS - J&J]
                    </span>
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <a className="ant-dropdown-link " onClick={e => e.preventDefault()}>
                            <span className="fa fa-fw ml-2 fa-chevron-down white"></span>
                        </a>
                    </Dropdown>
                </span>
            </section>
        )
    }
}
export default UserProfile;