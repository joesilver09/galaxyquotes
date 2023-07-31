import "./styles/QuoteBox.css";

const QuoteBox = ({ quote }) => {
  return (
    <section className="quoteBox">
      <h1 className="quoteBox__title">
        Galaxy
        <box-icon className="planet__icon"
          name="planet"
          type="solid"
          animation="flashing"
          color="whitesmoke"
          size="35px"
        ></box-icon>
        Quotes
      </h1>
      <section className="quoteBox__container">
        <article>{quote.phrase}</article>
      </section>
      <section className="quoteBox__source">
        <h2 className="source">Source:</h2>
        <p className="author">{quote.author}</p>
      </section>
    </section>
  );
};

export default QuoteBox;
