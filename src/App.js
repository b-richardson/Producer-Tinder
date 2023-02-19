import React, { Component } from 'react';
import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx'
import Secret from './pages/Secret.jsx'
import Register from './pages/Register.jsx'

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

      // This renders the pages through the browser-router. routes for all pages go below. 
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/secret" element={<Secret/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;