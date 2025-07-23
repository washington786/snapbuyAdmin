import { Line } from '@ant-design/charts';
import type { FinancialRecord } from '../../utils/types';

interface RevenueChartProps {
    data: FinancialRecord[];
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
    const config = {
        data: data.filter(d => d.type === 'revenue'),
        xField: 'date',
        yField: 'amount',
        seriesField: 'category',
        yAxis: {
            label: {
                formatter: (v: number) => `$${v}`,
            },
        },
        tooltip: {
            formatter: (datum: { category: string, amount: number }) => ({
                name: datum.category,
                value: `$${datum.amount}`,
            }),
        },
        legend: {
            position: 'top',
        },
        smooth: true,
    };

    return <Line {...config} />;
};