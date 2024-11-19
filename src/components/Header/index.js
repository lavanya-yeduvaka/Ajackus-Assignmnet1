import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


class Header extends React.Component {
  render() {
    return (
      <div className="header-container ">
        <nav className="nav-item-list">
            <div className="container">
            <img className="logo" src="https://assets.thehansindia.com/h-upload/2022/06/14/1297801-education-system.webp" alt="avatar"/>
            </div>
          <ul className="ul-container">
            <li className="link-item">
              <Link className="route-link" to="/">Home</Link>
            </li>
            <li className="link-item">
              <Link className="route-link" to="/user-form">User Form</Link>
            </li >
            <li className="link-item">
              <Link className="route-link" to="/user-list">User List</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
  }
}

export default Header;
