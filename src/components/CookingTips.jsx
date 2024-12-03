import React, { useState } from "react";

function CookingTips() {
  const tips = [
    "Always preheat your oven before baking.",
    "Use fresh herbs to enhance flavor.",
    "Let meat rest after cooking for juicier results.",
    "Invest in a good chef's knife for better precision and safety.",
    "Don't overcrowd the pan to ensure even cooking.",
    "Taste as you cook and adjust seasoning gradually.",
    "Use a thermometer to check meat temperature for perfection.",
    "Let dough rise in a warm, draft-free place for best results.",
    "Rest pasta briefly before serving to enhance flavor absorption.",
    "When grilling, clean your grill grates to prevent sticking."
  ];

  const faqs = [
    {
      question: "How can I make my pasta less sticky?",
      answer: "Ensure you use enough water when boiling and stir occasionally. Adding a little olive oil to the water can also help."
    },
    {
      question: "What's the best way to store fresh herbs?",
      answer: "Store herbs like basil and parsley in a glass of water at room temperature or refrigerate others like rosemary in a damp paper towel inside a bag."
    },
    {
      question: "How do I know if my steak is done without cutting it?",
      answer: "Use a meat thermometer to check the internal temperature. For medium-rare, it should be 130°F to 135°F."
    }
  ];

  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert("Your query has been submitted!");
      setQuery("");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Cooking Tips Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Cooking Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="text-gray-700 text-sm">{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="text-gray-700">
                <h4 className="font-semibold">{faq.question}</h4>
                <p className="text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ask a Query Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-pink-600 mb-4">Have a Query?</h3>
          <form onSubmit={handleQuerySubmit}>
            <div className="mb-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                rows="4"
                value={query}
                onChange={handleQueryChange}
                placeholder="Ask a question about cooking..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 focus:outline-none"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CookingTips;
