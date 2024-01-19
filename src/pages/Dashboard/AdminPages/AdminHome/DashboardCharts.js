import React from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    Legend,
    Line,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const DashboardCharts = () => {
    const colors = ['#0088FE', '#7BB13C', '#FFBB28', '#FF8042', 'red', 'pink'];

    const appointmentData = [
        {
            name: 'Teeth Orthodontics',
            value: 100,
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Cavity Protection',
            value: 70,
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Teeth Cleaning',
            value: 90,
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Cosmetic Dentistry',
            value: 80,
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Oral Surgery',
            value: 60,
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Pediatric Dental',
            value: 50,
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const data = [
        {
            name: '2019',
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: '2020',
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: '2021',
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: '2022',
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: '2023',
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: '2024',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white rounded-lg p-5'>
                <h2 className='text-accent text-xl font-semibold border-b pb-3'>Patients Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart
                        width={"100%"}
                        height={400}
                        data={data}
                        margin={{
                            top: 30,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#ffbc34a1" stroke="#FFBC34" />
                        <Bar dataKey="pv" barSize={20} fill="#F7A582" />
                        <Line type="monotone" dataKey="uv" stroke="#7BB13C" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-accent text-xl font-semibold border-b pb-3'>Appointment Overview</h2>
                <ResponsiveContainer width={'100%'} height={300}>
                    <PieChart>
                        <Pie
                            data={appointmentData}
                            cx="50%"
                            cy="50%"
                            // labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {appointmentData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashboardCharts;