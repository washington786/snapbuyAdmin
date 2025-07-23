// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Layout, Menu } from 'antd';
// import { Dashboard } from './pages/Dashboard';
// import { InventoryPage } from './pages/Inventory';
// import { SuppliersPage } from './pages/Suppliers';
// import { TopNavigation } from './components/common/TopNavigation';
// import FinancesPageIndex from './pages/Finances';
// import OrdersIndexPage from './pages/Orders';


// const { Header, Content, Sider } = Layout;

// export default function App() {
//   return (
//     <>
//       <Router>
//         <Layout style={{ minHeight: '100vh' }}>
//           <Sider theme='light'>
//             <TopNavigation />
//             <Menu theme="light" mode="inline">

//               <Menu.Item key="1">
//                 <Link to="/">Dashboard</Link>
//               </Menu.Item>

//               <Menu.Item key="4">
//                 <Link to="/orders">Orders</Link>
//               </Menu.Item>

//               <Menu.Item key="5">
//                 <Link to="/finances">Finances</Link>
//               </Menu.Item>

//               <Menu.Item key="2">
//                 <Link to="/inventory">Inventory</Link>
//               </Menu.Item>

//               <Menu.Item key="3">
//                 <Link to="/suppliers">Suppliers</Link>  {/* NEW */}
//               </Menu.Item>

//             </Menu>
//           </Sider>
//           <Layout>
//             <Header style={{ background: '#fff', padding: 0 }} />
//             <Content style={{ margin: '24px' }}>
//               <Routes>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/inventory" element={<InventoryPage />} />
//                 <Route path="/suppliers" element={<SuppliersPage />} />
//                 <Route path="/order" element={<OrdersIndexPage />} />
//                 <Route path="/finances" element={<FinancesPageIndex />} />
//               </Routes>
//             </Content>
//           </Layout>
//         </Layout>
//       </Router>
//     </>
//   );
// }
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  TeamOutlined
} from '@ant-design/icons';
import OrdersIndexPage from './pages/Orders';
import FinancesPageIndex from './pages/Finances';

const { Content, Sider } = Layout;

export default function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Top Navigation (Logo only) */}
        <TopNavigation />

        {/* Main Layout */}
        <Layout>
          {/* Sidebar Navigation */}
          <Sider
            width={200}
            theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            style={{
              boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
            }}
          >
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                <Link to="/orders">Orders</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DollarOutlined />}>
                <Link to="/finances">Finances</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<EnterOutlined />}>
                <Link to="/inventory">Inventory</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<TeamOutlined />}>
                <Link to="/suppliers">Suppliers</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          {/* Page Content */}
          <Layout style={{ padding: '24px' }}>
            <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
              borderRadius: 8
            }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<OrdersIndexPage />} />
                <Route path="/finances" element={<FinancesPageIndex />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/suppliers" element={<SuppliersPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}