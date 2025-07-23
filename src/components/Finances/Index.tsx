import { Card, Row, Col, Statistic } from 'antd';
import { financialData } from '../../utils/mockData';
import { RevenueChart } from './RevenueChart';
import { TransactionList } from './TransactionList';

export const FinancesPage = () => {

    const totalRevenue = financialData
        .filter(r => r.type === 'revenue')
        .reduce((sum, r) => sum + r.amount, 0);

    const totalExpenses = financialData
        .filter(r => r.type === 'expense')
        .reduce((sum, r) => sum + r.amount, 0);

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Total Revenue"
                                value={totalRevenue}
                                precision={2}
                                prefix="$"
                                valueStyle={{ color: '#3f8600' }}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Total Expenses"
                                value={totalExpenses}
                                precision={2}
                                prefix="$"
                                valueStyle={{ color: '#cf1322' }}
                            />
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Card title="Revenue Trends">
                    <RevenueChart data={financialData} />
                </Card>
            </Col>
            <Col span={24}>
                <Card title="Transaction History">
                    <TransactionList data={financialData} />
                </Card>
            </Col>
        </Row>
    );
};