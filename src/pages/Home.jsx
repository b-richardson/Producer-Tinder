// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Music Collaboration App</h1>
//       <p>This is the homepage of the Music Collaboration App where producers can connect and collaborate with each other.</p>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './App.css';

const Home = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
    </div>
  );
};

export default Home;

