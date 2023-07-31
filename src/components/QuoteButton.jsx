import "./styles/QuoteButton.css";
const QuoteButton = ({handleQuoteChange}) => {
  return (
    <div className="change__container">
        <button className= "change__button" onClick={handleQuoteChange}>New Quote</button>
    </div>
  )
}
export default QuoteButton