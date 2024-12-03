import React from "react";

function CookingTips() {
  const tips = [
    "Always preheat your oven before baking.",
    "Use fresh herbs to enhance flavor.",
    "Let meat rest after cooking for juicier results.",
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold">Cooking Tips</h2>
      <ul className="list-disc list-inside mt-4">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default CookingTips;

