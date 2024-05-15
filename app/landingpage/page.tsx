"use client";

import React from 'react';
import Map from '@/components/map';
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Hero() {
  return (
    <div>
    <main>



      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Your Handyman AI Assistant
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Let our AI-powered handyman assist you with all your tasks.
        </p>
        <div className="flex">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full mr-4">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <LazyMap />
    </main>
    </div>
  )
}