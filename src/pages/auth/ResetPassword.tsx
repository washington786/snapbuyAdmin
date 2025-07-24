// src/pages/auth/ForgotPassword.tsx
import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../layouts/AuthLayout';

const { Title, Text } = Typography;

export const ForgotPassword = () => {
    const onFinish = (values: unknown) => {
        console.log('Received values:', values);
        // Handle password reset logic here
    };

    return (
        <AuthLayout>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <Title level={3} style={{ marginBottom: 8 }}>Reset Password</Title>
                <Text type="secondary">Enter your email to receive a reset link</Text>
            </div>

            <Form
                name="forgot_password"
                onFinish={onFinish}
                layout="vertical"
            >
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

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                    >
                        Send Reset Link
                    </Button>
                </Form.Item>

                <div style={{ textAlign: 'center' }}>
                    <Text>Remember your password? <Link to="/">Log in</Link></Text>
                </div>
            </Form>
        </AuthLayout>
    );
};