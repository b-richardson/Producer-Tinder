
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './App.css';



const Home = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [backend, setBackend] = useState('');

    useEffect(() => {
        const url = '/api/home';

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

    useEffect(() => {
      const url = '/express_backend';

      const fetchBackend = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.express);
            setBackend(json.express);
          } catch (error) {
            console.log("error", error);
          }
        };

        fetchBackend();
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
      <p>Express Backend:{backend}</p>
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
      <Link to="/register">
        <Button type="primary" style={{ marginTop: 16 }}>
          Register
        </Button>
      </Link>
    </div>
  );
};

export default Home;
