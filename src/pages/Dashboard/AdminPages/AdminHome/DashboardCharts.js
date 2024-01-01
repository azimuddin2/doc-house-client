import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { curveCardinal } from 'd3-shape';

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
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3000,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const cardinal = curveCardinal.tension(0.2);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

            <div className='bg-white rounded-lg p-5'>
                <h2 className='text-accent text-xl font-semibold border-b pb-3'>Patients 2023 Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        width={'100%'}
                        height={400}
                        data={data}
                        margin={{
                            top: 30,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#7BB13C" fillOpacity={0.3} />
                        <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-accent text-xl font-semibold border-b pb-3'>Appointment</h2>
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