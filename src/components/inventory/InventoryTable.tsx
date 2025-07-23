import { Table, Space, Button, Row, Col } from 'antd';
import type { InventoryItem } from '../../utils/types';
import { InventoryActions } from './InventoryActions';
import { useState } from 'react';

interface InventoryTableProps {
    data: InventoryItem[];
    onEdit: (item: InventoryItem | null) => void;
    onDelete: (id: string) => void;
}

export const InventoryTable = ({ data, onEdit, onDelete }: InventoryTableProps) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const columns = [
        {
            title: 'Item',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: InventoryItem, b: InventoryItem) => a.name.localeCompare(b.name),
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            render: (stock: number) => (
                <span style={{ color: stock < 10 ? 'red' : 'green' }}>{stock}</span>
            ),
            sorter: (a: InventoryItem, b: InventoryItem) => a.stock - b.stock,
        },
        {
            title: 'Expiry',
            dataIndex: 'expiry',
            key: 'expiry',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: unknown, record: InventoryItem) => (
                <Space size="middle">
                    <Button onClick={() => onEdit(record)}>Edit</Button>
                    <Button danger onClick={() => onDelete(record.id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedKeys: React.Key[]) => {
            setSelectedRowKeys(newSelectedKeys);
        },
    };

    return (
        <>
            <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
                <Col>
                    {selectedRowKeys.length > 0 && (
                        <span style={{ marginLeft: 8 }}>
                            Selected {selectedRowKeys.length} items
                        </span>
                    )}
                </Col>
                <Col>
                    <Space>
                        <InventoryActions
                            onAdd={() => onEdit(null)}
                            onBulkDelete={(ids) => {
                                ids.forEach(onDelete);
                                setSelectedRowKeys([]);
                            }}
                            selectedCount={selectedRowKeys.length}
                        />
                    </Space>
                </Col>
            </Row>

            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                rowKey="id"
                bordered
                pagination={{
                    pageSizeOptions: ['5', '10', '20', '50'],
                    showSizeChanger: true,
                    showQuickJumper: true,
                    position: ['bottomRight'],
                }}
            />
        </>
    );
};