const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const stocks = [
  { symbol: 'AAPL', price: 150 },
  { symbol: 'GOOGL', price: 2800 },
  { symbol: 'MSFT', price: 300 },
  { symbol: 'AMZN', price: 3300 },
  { symbol: 'FB', price: 330 },
];

function updateStockPrices() {
  stocks.forEach(stock => {
    const change = (Math.random() - 0.5) * 2;
    stock.price = Math.max(0, stock.price * (1 + change / 100));
    stock.change = change;
  });
  return stocks;
}

wss.on('connection', (ws) => {
  console.log('Client connected');

  const interval = setInterval(() => {
    const updatedStocks = updateStockPrices();
    ws.send(JSON.stringify(updatedStocks));
  }, 2000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');