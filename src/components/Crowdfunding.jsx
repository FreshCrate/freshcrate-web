const Crowdfunding = () => {
  const handlePaystack = () => {
    window.location.href = "https://paystack.com/pay/your-paystack-link"; // Replace with your Paystack payment link
  };

  return (
    <section className="max-w-3xl px-6 py-12 mx-auto text-center bg-gray-100 rounded-lg shadow-md">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-teal-600">
          🚀 Join the Movement
        </h2>
        <p className="text-lg text-gray-700">
          Take a stake in <span className="font-semibold">FreshCrate</span> and
          be part of the future of food delivery innovation. Invest now and
          watch us grow together!
        </p>
        <ul className="space-y-2 list-none">
          <li className="flex items-center justify-center text-gray-600">
            ✅ <span className="ml-2">High-growth potential</span>
          </li>
          <li className="flex items-center justify-center text-gray-600">
            ✅ <span className="ml-2">Early investor benefits</span>
          </li>
          <li className="flex items-center justify-center text-gray-600">
            ✅ <span className="ml-2">Secure your stake today</span>
          </li>
        </ul>
        <button
          onClick={handlePaystack}
          className="px-6 py-3 font-medium text-white transition duration-300 bg-teal-600 rounded-lg hover:bg-teal-700"
        >
          Invest Now
        </button>
        <p className="text-sm text-gray-500">
          *Your investment helps us scale and deliver more value.
        </p>
      </div>
    </section>
  );
};

export default Crowdfunding;
