// src/pages/auth/Register.tsx
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../layouts/AuthLayout';

const { Text } = Typography;

export const Register = () => {
    const onFinish = (values: unknown) => {
        console.log('Received values:', values);
        // Handle registration logic here
    };

    return (
        <AuthLayout>
            <Form
                name="register"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Full Name"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                >
                    <Input
                        prefix={<MailOutlined />}
                        placeholder="Email"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters!' }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Confirm Password"
                        size="large"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                    >
                        Register
                    </Button>
                </Form.Item>

                <div style={{ textAlign: 'center' }}>
                    <Text>Already have an account? <Link to="/">Log in</Link></Text>
                </div>
            </Form>
        </AuthLayout>
    );
};