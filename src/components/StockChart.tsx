import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface StockChartProps {
  selectedStock: string | null
}

const StockChart: React.FC<StockChartProps> = ({ selectedStock }) => {
  const dummyData = [
    { date: '2023-01-01', price: 100 },
    { date: '2023-02-01', price: 120 },
    { date: '2023-03-01', price: 110 },
    { date: '2023-04-01', price: 130 },
    { date: '2023-05-01', price: 140 },
  ]

  if (!selectedStock) {
    return <div className="text-gray-400">Select a stock to view its chart</div>
  }

  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-2">{selectedStock} Stock Chart</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={dummyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StockChart