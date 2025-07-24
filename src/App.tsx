import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Dashboard } from './pages/Dashboard';
import { InventoryPage } from './pages/Inventory';
import { SuppliersPage } from './pages/Suppliers';
import { TopNavigation } from './components/common/TopNavigation';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  EnterOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import OrdersIndexPage from './pages/Orders';
import FinancesPageIndex from './pages/Finances';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ResetPassword';

const { Content, Sider } = Layout;

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Main App Pages */}
        <Route path="/dashboard/*" element={
          <Layout style={{ minHeight: '100vh' }}>
            <TopNavigation />
            <Layout>
              <Sider
                width={200}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"
                style={{ boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}
              >
                <Menu
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  style={{ height: '100%', borderRight: 0 }}
                  items={[
                    {
                      key: '1',
                      icon: <DashboardOutlined />,
                      label: <Link to="/dashboard">Dashboard</Link>
                    },
                    {
                      key: '2',
                      icon: <ShoppingCartOutlined />,
                      label: <Link to="/dashboard/orders">Orders</Link>
                    },
                    {
                      key: '3',
                      icon: <DollarOutlined />,
                      label: <Link to="/dashboard/finances">Finances</Link>
                    },
                    {
                      key: '4',
                      icon: <EnterOutlined />,
                      label: <Link to="/dashboard/inventory">Inventory</Link>
                    },
                    {
                      key: '5',
                      icon: <TeamOutlined />,
                      label: <Link to="/dashboard/suppliers">Suppliers</Link>
                    }
                  ]}
                />
              </Sider>

              <Layout style={{ padding: '24px' }}>
                <Content style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: '#fff',
                  borderRadius: 8
                }}>
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<OrdersIndexPage />} />
                    <Route path="finances" element={<FinancesPageIndex />} />
                    <Route path="inventory" element={<InventoryPage />} />
                    <Route path="suppliers" element={<SuppliersPage />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        } />

        {/* Redirect any unknown paths to login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}