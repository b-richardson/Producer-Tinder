import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';

class Secret extends React.Component {
    constructor(){ 
        super();
        //Set default message
        this.state = {
          message: 'Loading...'
        }
    }
      
    componentDidMount() {
        //GET message from server using fetch api
        fetch('/api/secret')
          .then(res => res.text())
          .then(res => this.setState({message: res}));
    };



    render (){
      return (
        <div>
          <h1>Secret</h1>
          <p>{this.state.message}</p>
          <div>
          <li><Link to="/">
          <Button type="primary" style={{ marginTop: 16 }}>
              Home
              </Button>
            </Link></li>
          </div>
        </div>
      );
    }
}


  export default Secret;