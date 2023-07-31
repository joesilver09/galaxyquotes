import { useState } from 'react'
import './App.css'
import getRandom from './utils/randomize'
import QuoteBox from './components/QuoteBox'
import quotes from "./db/quote.json"
import QuoteButton from './components/QuoteButton'
import QuoteFooter from './components/QuoteFooter'
const bgs=  ["bg1","bg2", "bg3","bg4","bg5","bg6"]

function App() {
const [quote, setQuote] = useState(getRandom(quotes))
const [currentBg, setCurrentBg] = useState(getRandom(bgs))

const handleQuoteChange= () =>{
 setQuote(getRandom(quotes));
 setCurrentBg(getRandom(bgs))
}
  return (
    <>
    <main className={`App ${currentBg}`}>
      <QuoteBox quote={quote} />
      <QuoteButton handleQuoteChange={handleQuoteChange} />
      <QuoteFooter/>
    </main>
    </>
  )
}

export default App;
