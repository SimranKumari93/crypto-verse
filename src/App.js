import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Exchanges from './components/Exchanges';
import News from './components/News';
import CryptoDetails from './components/CryptoDetails';
import Cryptocurrencies from './components/Cryptocurrencies';
// import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route path="/news" element={<News/>}/> 
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2024
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;