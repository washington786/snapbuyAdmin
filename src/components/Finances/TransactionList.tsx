import { Table, Button, Space, Tag } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { FinancialRecord } from '../../utils/types';
import { exportToCSV } from '../../utils/ExportCsv';

interface TransactionListProps {
    data: FinancialRecord[];
    loading?: boolean;
}

export const TransactionList = ({ data, loading }: TransactionListProps) => {
    const columns: ColumnsType<FinancialRecord> = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        },
        {
            title: 'Transaction ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
            render: (orderId: string) => orderId || 'N/A',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (type: FinancialRecord['type']) => (
                <Tag color={type === 'revenue' ? 'green' : 'red'}>
                    {type.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (amount: number, record: FinancialRecord) => (
                <span style={{
                    fontWeight: 500,
                    color: record.type === 'revenue' ? '#3f8600' : '#cf1322'
                }}>
                    {record.type === 'revenue' ? '+' : '-'}${amount.toFixed(2)}
                </span>
            ),
            sorter: (a, b) => a.amount - b.amount,
        },
    ];

    const handleExport = () => {
        const csvData = data.map(record => ({
            Date: record.date,
            'Transaction ID': record.id,
            'Order ID': record.orderId || 'N/A',
            Type: record.type.toUpperCase(),
            Category: record.category,
            Amount: `${record.type === 'revenue' ? '+' : '-'}$${record.amount.toFixed(2)}`,
        }));

        exportToCSV(csvData, `transactions-${new Date().toISOString()}.csv`);
    };

    return (
        <div>
            <Space style={{ marginBottom: 16 }}>
                <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    onClick={handleExport}
                >
                    Export to CSV
                </Button>
            </Space>

            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                loading={loading}
                pagination={{
                    pageSizeOptions: ['10', '25', '50'],
                    showSizeChanger: true,
                    showQuickJumper: true,
                }}
                bordered
            />
        </div>
    );
};