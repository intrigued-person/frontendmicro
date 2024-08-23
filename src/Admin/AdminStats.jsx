import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    RadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    LineChart,
    Line,
    ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './AdminStats.css'; // Import custom CSS file
import AdminDashBoard from './AdminDashBoard';

// Define colors for different chart types
const PIE_COLORS = ['#FF8042', '#00C49F', '#0088FE'];
const BAR_COLOR = '#8884d8';
const RADAR_COLORS = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#8A2BE2'];
const LINE_COLORS = ['#FF4500', '#1E90FF'];

const AdminStats = () => {
    const [applicationData, setApplicationData] = useState([]);
    const [statusData, setStatusData] = useState([]);
    const [radarData, setRadarData] = useState([]);
    const [lineData, setLineData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [marksFilter, setMarksFilter] = useState('190-200');

    // Static counts data
    const staticData = [
        { category: 'Staff Count', count: 120 },
        { category: 'Department Count', count: 15 },
        { category: 'Approved Applications', count: 300 },
        { category: 'Rejected Applications', count: 50 },
        { category: 'Vacancies', count: 40 },
        { category: 'Seats Filled', count: 260 }
    ];

    useEffect(() => {
        // Fetch application data for 12th marks bar chart
        axios.get('http://localhost:9952/getAllApplications')
            .then(response => {
                const fetchedData = response.data;
                const chartData = fetchedData.map(item => ({
                    name: item.name,
                    twelthmark: item.twelthmark
                }));
                setApplicationData(chartData);
                setFilteredData(filterData(chartData, marksFilter));
            })
            .catch(error => {
                console.error('Error fetching application data:', error);
            });

        // Static status data for the pie chart
        const staticStatusData = [
            { status: 'Approved', count: 300 },
            { status: 'Rejected', count: 50 },
            { status: 'Pending', count: 100 }
        ];
        setStatusData(staticStatusData);

        // Static data for radar chart
        setRadarData([
            { category: 'Staff Count', value: 120 },
            { category: 'Department Count', value: 15 },
            { category: 'Approved Applications', value: 300 },
            { category: 'Rejected Applications', value: 50 },
            { category: 'Vacancies', value: 40 },
            { category: 'Seats Filled', value: 260 }
        ]);

        // Static data for line chart (declining status)
        setLineData([
            { name: 'Initial', vacancies: 40, seatsFilled: 0 },
            { name: 'After 1 Month', vacancies: 30, seatsFilled: 50 },
            { name: 'After 2 Months', vacancies: 20, seatsFilled: 100 },
            { name: 'After 3 Months', vacancies: 10, seatsFilled: 150 },
            { name: 'Final', vacancies: 0, seatsFilled: 200 }
        ]);
    }, [marksFilter]);

    const filterData = (data, range) => {
        const [min, max] = range.split('-').map(Number);
        return data.filter(item => item.twelthmark >= min && item.twelthmark < (max || Infinity));
    };

    const handleFilterChange = (event) => {
        setMarksFilter(event.target.value);
    };

    return (
        <div>
            <AdminDashBoard />
            <div className="admin-stats">
                <h2 className="text-center">Dashboard</h2>

                <div className="filter-container">
                    <label htmlFor="marks-filter">Filter by Cutoff Marks:</label>
                    <select
                        id="marks-filter"
                        className="marks-filter"
                        value={marksFilter}
                        onChange={handleFilterChange}
                    >
                        <option value="190-200">190-200</option>
                        <option value="180-190">180-190</option>
                        <option value="170-180">170-180</option>
                        <option value="160-170">160-170</option>
                        <option value="150-160">150-160</option>
                        <option value="150-">150 and above</option>
                    </select>
                </div>

                <div className="chart-container">
                    <h3>Student's Cutoff Marks (Bar Chart)</h3>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={filteredData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="twelthmark" fill={BAR_COLOR} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container">
                    <h3>Application Status (Pie Chart)</h3>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie data={statusData} dataKey="count" nameKey="status" outerRadius={150} label>
                                    {statusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container">
                    <h3>Counts Overview (Radar Chart)</h3>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={500}>
                            <RadarChart outerRadius={150} data={radarData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="category" />
                                <PolarRadiusAxis angle={30} domain={[0, 400]} />
                                <Radar name="Counts" dataKey="value" stroke="#FF6347" fill="#FF6347" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container">
                    <h3>Vacancy and Seat Status (Line Chart)</h3>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="vacancies" stroke={LINE_COLORS[0]} dot={false} />
                                <Line type="monotone" dataKey="seatsFilled" stroke={LINE_COLORS[1]} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStats;

