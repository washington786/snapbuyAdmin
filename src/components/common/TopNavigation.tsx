import { Layout, Image } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const { Header } = Layout;

export const TopNavigation = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center', background: '#fff', padding: '0 24px' }}>
            <div style={{ marginRight: '24px' }}>
                <Link to="/">
                    <Image
                        src={logo}
                        preview={false}
                        width={120}
                        alt="Company Logo"
                    />
                </Link>
            </div>
        </Header>
    );
};