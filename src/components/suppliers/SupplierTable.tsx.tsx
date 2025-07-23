import { Table, Button, Space } from 'antd';
import type { Supplier } from '../../utils/types';
import { useState } from 'react';

const columns = [
    {
        title: 'Supplier',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left' as const,
    },
    {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
    },
    {
        title: 'Items Supplied',
        dataIndex: 'items',
        key: 'items',
        render: (items: string[]) => items.join(', '),
    },
    {
        title: 'Action',
        key: 'action',
        fixed: 'right' as const,

        render: (_: unknown, record: Supplier) => (
            <Space>
                <Button
                    size="small"
                    onClick={() => console.log('Edit:', record.id)}
                >
                    Edit
                </Button>
                <Button
                    size="small"
                    danger
                    onClick={() => console.log('Delete:', record.id)}
                >
                    Delete
                </Button>
            </Space>
        ),
    },
];

export const SupplierTable = ({ data, loading }: { data: Supplier[]; loading?: boolean }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    return (
        <Table
            rowSelection={{
                selectedRowKeys,
                onChange: (keys) => setSelectedRowKeys(keys),
            }}
            columns={columns}
            dataSource={data}
            rowKey="id"
            bordered
            loading={loading}
            scroll={{ x: 'max-content' }}
            pagination={{
                pageSize: 5,
                showSizeChanger: true,
            }}
        />
    );
};