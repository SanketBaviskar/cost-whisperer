"use client";

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

  const handleAnalyse = () => {
    console.log(link);
  };
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Cost Whisperer</h1>
      <p className="text-lg">Your AI-powered cost optimization tool.</p>
      <div className="mt-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your query..."
          className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setLink(e.target.value)}
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleAnalyse}
        >
          Analyse
        </button>
      </div>
    </main>
  );
}
