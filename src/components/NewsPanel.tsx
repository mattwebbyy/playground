import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

const NewsPanel: React.FC = () => {
  const dummyNews = [
    { id: 1, title: 'Stock Market Reaches New Heights', source: 'Financial Times', date: '2023-05-01' },
    { id: 2, title: 'Tech Stocks Surge Amid Positive Earnings', source: 'Wall Street Journal', date: '2023-05-02' },
    { id: 3, title: 'Federal Reserve Announces Interest Rate Decision', source: 'CNBC', date: '2023-05-03' },
  ]

  return (
    <div className="h-full">
      <h3 className="text-lg font-semibold mb-2">Latest News</h3>
      <ScrollArea className="h-[calc(100%-2rem)]">
        <div className="space-y-4">
          {dummyNews.map((news) => (
            <div key={news.id} className="border-b border-border pb-2">
              <h4 className="font-semibold">{news.title}</h4>
              <p className="text-sm text-muted-foreground">{news.source} - {news.date}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default NewsPanel