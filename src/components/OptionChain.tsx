import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const OptionChain: React.FC = () => {
  const dummyOptions = [
    { strike: 100, callBid: 2.5, callAsk: 2.7, putBid: 1.8, putAsk: 2.0 },
    { strike: 105, callBid: 1.8, callAsk: 2.0, putBid: 2.3, putAsk: 2.5 },
    { strike: 110, callBid: 1.2, callAsk: 1.4, putBid: 3.0, putAsk: 3.2 },
  ]

  return (
    <div className="h-full overflow-y-auto">
      <h3 className="text-lg font-semibold mb-2">Option Chain</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Strike</TableHead>
            <TableHead>Call Bid</TableHead>
            <TableHead>Call Ask</TableHead>
            <TableHead>Put Bid</TableHead>
            <TableHead>Put Ask</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyOptions.map((option, index) => (
            <TableRow key={index}>
              <TableCell>{option.strike}</TableCell>
              <TableCell>{option.callBid}</TableCell>
              <TableCell>{option.callAsk}</TableCell>
              <TableCell>{option.putBid}</TableCell>
              <TableCell>{option.putAsk}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OptionChain