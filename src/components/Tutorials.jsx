import React from "react";

function Tutorials() {
  const tutorials = [
    { title: "Knife Skills", link: "https://example.com/knife-skills" },
    { title: "Baking Basics", link: "https://example.com/baking-basics" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold">Tutorials</h2>
      <ul className="list-disc list-inside mt-4">
        {tutorials.map((tutorial, index) => (
          <li key={index}>
            <a
              href={tutorial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {tutorial.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tutorials;
