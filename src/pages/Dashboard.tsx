import { Card, Row, Col, Statistic, Space, Table, Tag, ConfigProvider } from 'antd';
import {
    ArrowUpOutlined,
    DollarOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Line, Pie } from '@ant-design/charts';
import type { FinancialRecord, Order } from '../utils/types';
import { theme } from '../theme/theme';

interface DashboardProps {
    financialData?: FinancialRecord[];
    ordersData?: Order[];
}

export const Dashboard = ({
    financialData = [],
    ordersData = []
}: DashboardProps) => {
    // Safe calculations with default empty arrays
    const totalRevenue = financialData
        .filter(r => r?.type === 'revenue')
        .reduce((sum, r) => sum + (r?.amount || 0), 0);

    const totalOrders = ordersData.length;
    const pendingOrders = ordersData.filter(o => o?.status === 'pending').length;
    const completedOrders = ordersData.filter(o => o?.status === 'completed').length;

    // Revenue trend data with null checks
    const revenueTrendData = financialData
        .filter(r => r?.type === 'revenue')
        .reduce((acc, record) => {
            if (!record?.date) return acc;
            const date = new Date(record.date).toLocaleDateString();
            acc[date] = (acc[date] || 0) + (record?.amount || 0);
            return acc;
        }, {} as Record<string, number>);

    const formattedTrendData = Object.entries(revenueTrendData).map(([date, amount]) => ({
        date,
        amount,
    }));

    const orderStatusData = [
        { type: 'Completed', value: completedOrders },
        { type: 'Pending', value: pendingOrders },
    ];

    return (
        <ConfigProvider theme={theme}>
            <div style={{ padding: '24px' }}>
                <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <Statistic
                                title="Total Revenue"
                                value={totalRevenue}
                                precision={2}
                                prefix={<DollarOutlined />}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="USD"
                            />
                            <Space style={{ marginTop: 8 }}>
                                <ArrowUpOutlined style={{ color: '#3f8600' }} />
                                <span>12% vs last month</span>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <Statistic
                                title="Total Orders"
                                value={totalOrders}
                                prefix={<ShoppingCartOutlined />}
                            />
                            <Space style={{ marginTop: 8 }}>
                                <ArrowUpOutlined style={{ color: '#3f8600' }} />
                                <span>8% vs last month</span>
                            </Space>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card>
                            <Statistic
                                title="Active Customers"
                                value={1242}
                                prefix={<UserOutlined />}
                            />
                            <Space style={{ marginTop: 8 }}>
                                <ArrowUpOutlined style={{ color: '#3f8600' }} />
                                <span>5% vs last month</span>
                            </Space>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
                    <Col xs={24} md={16}>
                        <Card title="Revenue Trend (Last 30 Days)">
                            {financialData.length > 0 ? (
                                <Line
                                    data={formattedTrendData}
                                    xField="date"
                                    yField="amount"
                                    yAxis={{
                                        label: {
                                            formatter: (v: unknown) => `$${v}`,
                                        },
                                    }}
                                    height={300}
                                />
                            ) : (
                                <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    No revenue data available
                                </div>
                            )}
                        </Card>
                    </Col>

                    <Col xs={24} md={8}>
                        <Card title="Order Status">
                            {ordersData.length > 0 ? (
                                <Pie
                                    data={orderStatusData}
                                    angleField="value"
                                    colorField="type"
                                    height={300}
                                />
                            ) : (
                                <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    No order data available
                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card title="Recent Orders">
                            <Table
                                columns={[
                                    { title: 'Order ID', dataIndex: 'orderNumber' },
                                    { title: 'Customer', dataIndex: 'customer' },
                                    { title: 'Amount', dataIndex: 'total', render: v => `$${v}` },
                                    {
                                        title: 'Status',
                                        dataIndex: 'status',
                                        render: (status: string) => (
                                            <Tag color={
                                                status === 'completed' ? 'green' :
                                                    status === 'pending' ? 'orange' : 'red'
                                            }>
                                                {status.toUpperCase()}
                                            </Tag>
                                        )
                                    },
                                ]}
                                dataSource={ordersData.slice(0, 5)}
                                rowKey="id"
                                pagination={false}
                                locale={{ emptyText: 'No recent orders' }}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </ConfigProvider>
    );
};