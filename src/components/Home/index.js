import React from 'react';
import './index.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">

        <h1 className="Heading">Welcome to the <span className="span-ele">User Management Dashboard</span></h1>
        <p className="para">Use the navigation links above to add or view user details.</p>
      </div>
    );
  }
}

export default Home;
