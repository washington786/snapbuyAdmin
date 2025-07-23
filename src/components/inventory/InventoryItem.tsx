import { Card, Descriptions, Tag, Button } from 'antd';
import type { InventoryItem } from '../../utils/types';


export const InventoryItemDetail = ({ item }: { item: InventoryItem }) => (
    <Card
        title={item.name}
        extra={<Tag color={item.stock < 10 ? 'red' : 'green'}>{item.stock} left</Tag>}
    >
        <Descriptions bordered column={1}>
            <Descriptions.Item label="Category">{item.category}</Descriptions.Item>
            <Descriptions.Item label="Expiry Date">{item.expiry}</Descriptions.Item>
            <Descriptions.Item label="Last Restocked">2023-11-01</Descriptions.Item>
        </Descriptions>
        <Button type="primary" style={{ marginTop: '16px' }}>Restock</Button>
    </Card>
);