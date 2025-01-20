import React from "react";
import "./App.css";

function App() {

  return (
    <>
      <>
  {/* Pricing cards */}
  <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-9">
    {/* Basic Plan */}
    <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Standard</h3>
      <img src="./public/assets/Standard-Plan.png"></img>
      <p className="text-4xl font-bold text-gray-900 mb-6 text-center">
        $10 <span className="text-gray-900 text-4xl font-bold">/month</span>
      </p>
      <ul className="space-y-4 mb-6 text-center">
        <li className="flex items-center gap-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          3 Accounts
        </li>
        <li className="flex items-center gap-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Database Up to 50 GB
        </li>
        <li className="flex items-center gap-2 text-gray-600 pb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Bot Chat trial for 15 Days
        </li>
      </ul>
      <button className="w-full py-3 bg-black text-white rounded-3xl hover:bg-gray-800">
        Get Started
      </button>
    </div>
    {/* Pro Plan */}
    <div className="bg-white text-black rounded-2xl shadow-lg p-8 transition hover:scale-110 relative">
      <h3 className="text-xl font-semibold mb-4 text-center">Professional</h3>
      <img src="./public/assets/Professional-Plan.png"></img>
      <p className="text-4xl font-bold mb-6 text-center">
        $15 <span className="text-gray-900 text-4xl font-bold">/month</span>
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          10 accounts
        </li>
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Database Upto 100 GB
        </li>
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Bot Chat 2 month trial 
        </li>
        <li className="flex items-center gap-2 pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Free Training 
        </li>
      </ul>
      <button className="w-full py-3 bg-black text-white rounded-3xl hover:bg-gray-800">
        Get Started
      </button>
    </div>
    {/* Enterprise Plan */}
    <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Enterprise</h3>
      <img src="./public/assets/Enterprise-Plan.png"></img>
      <p className="text-4xl font-bold text-gray-900 mb-6 text-center">
        $25 <span className="text-gray-900 text-4xl font-bold">/month</span>
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex items-center gap-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          15+ Accounts
        </li>
        <li className="flex items-center gap-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Database upto 1 TB
        </li>
        <li className="flex items-center gap-2 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Bot Chat free forever
        </li>
        <li className="flex items-center gap-2 text-gray-600 pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-green-500 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          Free Training
        </li>
      </ul>
      <button className="w-full py-3 bg-black text-white rounded-3xl hover:bg-gray-800">
        Get Started
      </button>
    </div>
  </div>
</>

    </>
  );
}

export default App;
