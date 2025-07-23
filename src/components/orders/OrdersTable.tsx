import { Table, Tag, Space, Button } from 'antd';
import type { Order } from '../../utils/types';

interface OrdersTableProps {
    data: Order[];
}

const statusColors = {
    pending: 'orange',
    completed: 'green',
    cancelled: 'red',
};

export const OrdersTable = ({ data }: OrdersTableProps) => {
    const columns = [
        {
            title: 'Order #',
            dataIndex: 'orderNumber',
            key: 'orderNumber',
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
        },
        {
            title: 'Items',
            key: 'items',
            render: (_: unknown, record: Order) => (
                <span>{record.items.length} items</span>
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (total: number) => `$${total.toFixed(2)}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: Order['status']) => (
                <Tag color={statusColors[status]}>{status.toUpperCase()}</Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: unknown, record: Order) => (
                <Space>
                    <Button onClick={() => record.id}>View</Button>
                    <Button onClick={() => record.id}>Print Invoice</Button>
                </Space>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            pagination={{
                pageSizeOptions: ['5', '10', '20'],
                showSizeChanger: true,
            }}
        />
    );
};