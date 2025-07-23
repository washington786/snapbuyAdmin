import { Card, Row, Col } from 'antd';
import { OrdersTable } from './OrdersTable';
import { orderData } from '../../utils/mockData';

export const OrdersPage = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Card title="Recent Orders">
                    <OrdersTable data={orderData} />
                </Card>
            </Col>
        </Row>
    );
};