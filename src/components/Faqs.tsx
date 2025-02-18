import { Helmet } from "react-helmet";
import faq_header from "/assets/images/faq_header.png";

const FAQ = () => {
  return (
    <div className="faq-page">
      <Helmet>
        <title>FAQ - Freshcrate</title>
        <meta name="description" content="Frequently Asked Questions about Freshcrate." />
      </Helmet>
      <h1 className="py-8 text-4xl text-center">Frequently Asked Questions</h1>
      {/* Rest of the FAQ content */}
      <img src={faq_header} alt="FAQ Icon" 
      className="w-9/12 mx-auto md:pt-9 pt-7" />

      Faq
    </div>
  );
};

export default FAQ;