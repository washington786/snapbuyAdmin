import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../layouts/AuthLayout';

const { Text } = Typography;

export const Login = () => {
    const onFinish = (values: unknown) => {
        console.log('Received values:', values);
        // Handle login logic here
    };

    return (
        <AuthLayout>
            <Form
                name="login"
                initialValues={{ remember: true }}
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

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Password"
                        size="large"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link to="/forgot-password" style={{ float: 'right' }}>
                        Forgot password?
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                    >
                        Log in
                    </Button>
                </Form.Item>

                <div style={{ textAlign: 'center' }}>
                    <Text>Don't have an account? <Link to="/register">Register now</Link></Text>
                </div>
            </Form>
        </AuthLayout>
    );
};