import { useState } from "react";
import "./App.css";
import "./components/styles/Planets.css";
import getRandom from "./utils/randomize";
import QuoteBox from "./components/QuoteBox";
import quotes from "./db/quote.json";
import QuoteButton from "./components/QuoteButton";
import QuoteFooter from "./components/QuoteFooter";
const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"];
const pls = [
  "pl1",
  "pl2",
  "pl3",
  "pl4",
  "pl5",
  "pl6",
  "pl7",
  "pl8",
  "pl9",
  "pl10",
  "pl11",
  "pl12",
  "pl13",
  "pl14",
  "pl15",
];

function App() {
  const [quote, setQuote] = useState(getRandom(quotes));
  const [currentBg, setCurrentBg] = useState(getRandom(bgs));
  const [currentPl, setCurrentPL] = useState(getRandom(pls));

  const handleQuoteChange = () => {
    setQuote(getRandom(quotes));
    setCurrentBg(getRandom(bgs));
    setCurrentPL(getRandom(pls));
  };
  return (
    <>
      <main className={`App ${currentBg}`}>
        <QuoteBox quote={quote} />
        <QuoteButton handleQuoteChange={handleQuoteChange} />
        <QuoteFooter />
        <div className="planet__container">
          <div className={`planet ${currentPl}`} />
        </div>
      </main>
    </>
  );
}

export default App;
