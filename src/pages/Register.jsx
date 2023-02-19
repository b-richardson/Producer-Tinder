import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const Register = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    // Make API call to register the user
    // after sucess, redirect them to the user profile page
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        setLoading(true);
    
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
      message.success('Login successful');
    }, 1000);
  };

    return (
    <div>
      <h1>Register</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
};

export default Register;