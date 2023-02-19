// import React, { useState } from 'react';
// import { Form, Input, Button, message } from 'antd';
// import { Link } from 'react-router-dom';

// class Secret extends React.Component {
//     constructor(){ 
//         super();
    
//         this.state = {
//           message: 'Loading...'
//         }
//     }
      
//     componentDidMount() {
      
//         fetch('/api/secret')
//           .then(res => res.text())
//           .then(res => this.setState({message: res}));
//     };



//     render (){
//       return (
//         <div>
//           <h1>Secret</h1>
//           <p>{this.state.message}</p>
//           <div>
//           <li><Link to="/">
//           <Button type="primary" style={{ marginTop: 16 }}>
//               Home
//               </Button>
//             </Link></li>
//           </div>
//         </div>
//       );
//     }
// }


//   export default Secret;

// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Music Collaboration App</h1>
//       <p>This is the homepage of the Music Collaboration App where producers can connect and collaborate with each other.</p>
//     </div>
//   );
// };



import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './App.css';



const Secret = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('')

    useEffect(() => {
        const url = '/api/secret';

        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json.message);
              setMessage(json.message);
            } catch (error) {
              console.log("error", error);
            }
          };

          fetchData();
    },[]);

    const onFinish = values => {
        console.log('Received values of form: ', values);
        setLoading(true);
    
        // Simulate a network request
        setTimeout(() => {
          setLoading(false);
          message.success('Login successful');
        }, 1000);
      };


  return (
    <div className="App">
      <h2>Welcome to Our Music Collaboration App</h2>
      <p>Here is the passowrd message:{message}</p>
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      {/* Eventually this will link to the profile page */}
      <Link to="/" >
        <Button type="primary" style={{ marginTop: 16 }}>
          Complete Registration
        </Button>
      </Link>
    </div>
  );
};

export default Secret;
