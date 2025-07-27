import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function DashboardHome() {
  // Sample chart data
  const chartData = [
    { month: 'January', desktop: 1200, mobile: 800 },
    { month: 'February', desktop: 1400, mobile: 900 },
    { month: 'March', desktop: 1100, mobile: 700 },
    { month: 'April', desktop: 1600, mobile: 1000 },
    { month: 'May', desktop: 1800, mobile: 1200 },
    { month: 'June', desktop: 2200, mobile: 1400 },
    { month: 'July', desktop: 2000, mobile: 1300 },
    { month: 'August', desktop: 2400, mobile: 1600 },
    { month: 'September', desktop: 2800, mobile: 1800 },
    { month: 'October', desktop: 3200, mobile: 2000 },
    { month: 'November', desktop: 3000, mobile: 1900 },
    { month: 'December', desktop: 3500, mobile: 2200 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 dark:text-gray-100">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-none">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-muted-foreground mb-6">Welcome to your dashboard! Here are your key metrics and insights.</p>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users Card */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Users</p>
              <p className="text-3xl font-bold text-primary mt-1">1,234</p>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <p className="text-3xl font-bold text-primary mt-1">$45,678</p>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
              <p className="text-3xl font-bold text-primary mt-1">567</p>
            </div>
          </div>
        </div>

        {/* Growth Card */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
              <p className="text-3xl font-bold text-primary mt-1">+12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mb-8 w-full">
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border w-full">
          <h3 className="text-lg font-semibold mb-4">Monthly Traffic Overview</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis 
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => `${value}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="desktop" 
                fill="#3b82f6" 
                radius={[4, 4, 0, 0]}
                name="Desktop"
              />
              <Bar 
                dataKey="mobile" 
                fill="#10b981" 
                radius={[4, 4, 0, 0]}
                name="Mobile"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Conversion Rate */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
              <p className="text-2xl font-bold text-primary mt-1">3.2%</p>
            </div>
          </div>
        </div>

        {/* Average Order Value */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
              <p className="text-2xl font-bold text-primary mt-1">$89.45</p>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white dark:bg-dark-2 p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Customer Satisfaction</p>
              <p className="text-2xl font-bold text-primary mt-1">4.8/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
          <p className="text-sm opacity-90">Active Sessions</p>
          <p className="text-2xl font-bold">342</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
          <p className="text-sm opacity-90">New Signups</p>
          <p className="text-2xl font-bold">28</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
          <p className="text-sm opacity-90">Pending Orders</p>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
          <p className="text-sm opacity-90">Support Tickets</p>
          <p className="text-2xl font-bold">7</p>
        </div>
      </div>
    </div>
  );
} 