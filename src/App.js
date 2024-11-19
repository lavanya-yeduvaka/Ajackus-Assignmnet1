import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for User Form */}
          <Route path="/user-form" element={<UserForm />} />

          {/* Route for User List */}
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
