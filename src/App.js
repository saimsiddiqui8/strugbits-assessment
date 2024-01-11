import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle((prevState) => !prevState);
  };

  return (
    <div className='grid-container overflow-hidden'>
      <Dashboard />
      <Header OpenSidebar={toggleSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
