import { Helmet } from "react-helmet";
import faq_header from "/assets/images/faq_header.png";

const FAQ = () => {
  return (
    <div className="faq-page">
      <Helmet>
        <title>FAQ - Freshcrate</title>
        <meta name="description" content="Frequently Asked Questions about Freshcrate." />
      </Helmet>
      <h1 className="py-8 text-4xl text-center text-black">Frequently Asked Questions</h1>
      {/* Rest of the FAQ content */}

      <div className="w-9/12 justify-center items-center mx-auto">
      <img src={faq_header} alt="FAQ Icon" 
      className="md:pt-9 pt-7" />

      <div className="flex mt-10 mb-6 w-4/6 gap-8 justify-center items-center mx-auto">
          <button className="bg-green-600 p-4 rounded-xl w-1/2 text-white">Customer</button>
          <button className="bg-slate-200 border-slate-900 p-4 rounded-xl w-1/2 text-black">Investor</button>
      </div>
    </div>
    </div>
  );
};

export default FAQ;