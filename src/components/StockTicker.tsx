import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Stock {
  symbol: string
  price: number
  change: number
}

interface StockTickerProps {
  stocks: Stock[]
  onSelectStock: (symbol: string) => void
}

const StockTicker: React.FC<StockTickerProps> = ({ stocks, onSelectStock }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Last</TableHead>
            <TableHead>Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow
              key={stock.symbol}
              onClick={() => onSelectStock(stock.symbol)}
              className="cursor-pointer hover:bg-muted"
            >
              <TableCell>{stock.symbol}</TableCell>
              <TableCell>${stock.price.toFixed(2)}</TableCell>
              <TableCell className={`flex items-center ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change >= 0 ? (
                  <ArrowUpRight className="mr-1" size={16} />
                ) : (
                  <ArrowDownRight className="mr-1" size={16} />
                )}
                {stock.change.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default StockTicker