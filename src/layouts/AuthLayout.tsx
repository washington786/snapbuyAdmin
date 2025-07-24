import { Layout, Image } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const { Content } = Layout;

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
            <Content style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 400,
                    background: '#fff',
                    padding: '40px',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                        <Link to="/dashboard/">
                            <Image
                                src={logo}
                                preview={false}
                                width={120}
                                style={{ marginBottom: 16 }}
                            />
                        </Link>
                    </div>
                    {children}
                </div>
            </Content>
        </Layout>
    );
};