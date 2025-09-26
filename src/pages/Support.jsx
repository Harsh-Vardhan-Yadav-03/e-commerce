function Support() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Support & FAQ</h2>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold">How can I track my order?</h3>
          <p className="text-gray-600">
            You will receive a tracking link once your order is shipped.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">What is your return policy?</h3>
          <p className="text-gray-600">
            Returns are accepted within 30 days of purchase.
          </p>
        </li>
        <li>
          <h3 className="font-semibold">Do you offer international shipping?</h3>
          <p className="text-gray-600">
            Yes, we ship to select countries worldwide.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Support;
