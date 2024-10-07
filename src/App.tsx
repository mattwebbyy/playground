import React, { useState, useEffect } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import StockTicker from './components/StockTicker'
import StockChart from './components/StockChart'
import NewsPanel from './components/NewsPanel'
import OptionChain from './components/OptionChain'
import ChatPanel from './components/ChatPanel'

const ResponsiveGridLayout = WidthProvider(Responsive)

function App() {
  const [stockData, setStockData] = useState<{ symbol: string; price: number; change: number }[]>([
    { symbol: 'AAPL', price: 150, change: 0 },
    { symbol: 'GOOGL', price: 2800, change: 0 },
    { symbol: 'MSFT', price: 300, change: 0 },
    { symbol: 'AMZN', price: 3300, change: 0 },
    { symbol: 'FB', price: 330, change: 0 },
  ])
  const [selectedStock, setSelectedStock] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setStockData(prevData => 
        prevData.map(stock => {
          const change = (Math.random() - 0.5) * 2
          return {
            ...stock,
            price: Math.max(0, stock.price * (1 + change / 100)),
            change: change
          }
        })
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const layout = [
    { i: 'ticker', x: 0, y: 0, w: 12, h: 4 },
    { i: 'chart', x: 0, y: 4, w: 6, h: 8 },
    { i: 'news', x: 6, y: 4, w: 6, h: 8 },
    { i: 'options', x: 0, y: 12, w: 12, h: 6 },
    { i: 'chat', x: 0, y: 18, w: 12, h: 6 },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Finance Terminal</h1>
      </header>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
      >
        <div key="ticker" className="bg-card p-4 rounded-lg shadow-md">
          <StockTicker stocks={stockData} onSelectStock={setSelectedStock} />
        </div>
        <div key="chart" className="bg-card p-4 rounded-lg shadow-md">
          <StockChart selectedStock={selectedStock} />
        </div>
        <div key="news" className="bg-card p-4 rounded-lg shadow-md">
          <NewsPanel />
        </div>
        <div key="options" className="bg-card p-4 rounded-lg shadow-md">
          <OptionChain />
        </div>
        <div key="chat" className="bg-card p-4 rounded-lg shadow-md">
          <ChatPanel />
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}

export default App