import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <div className="faq-page">
      <Helmet>
        <title>FAQ - Freshcrate</title>
        <meta name="description" content="Frequently Asked Questions about Freshcrate." />
      </Helmet>
      <h1 className="py-8 text-4xl text-center">Frequently Asked Questions</h1>
      {/* Rest of the FAQ content */}
    </div>
  );
};

export default FAQ;