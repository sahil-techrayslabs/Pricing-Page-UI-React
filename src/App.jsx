import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
        {/* Standard Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard</h3>
          <img
            src="./assets/Standard-Plan.png"
            alt="Standard Plan"
            className="w-20 h-20 mb-4"
          />
          <p className="text-4xl font-bold text-gray-900 mb-6">
            $10 <span className="text-xl font-medium">/month</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-500 flex-shrink-0"
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
                className="w-5 h-5 text-green-500 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Database Up to 50 GB
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-500 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Bot Chat Trial for 15 Days
            </li>
          </ul>
          <button className="w-full py-3 bg-black text-white rounded-3xl hover:bg-gray-800">
            Get Started
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
          <img
            src="./assets/Professional-Plan.png"
            alt="Professional Plan"
            className="w-20 h-20 mb-4"
          />
          <p className="text-4xl font-bold text-gray-900 mb-6">
            $15 <span className="text-xl font-medium">/month</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-500 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              10 Accounts
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-500 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Database Up to 100 GB
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-500 flex-shrink-0"
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
        <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:scale-105 flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
          <img
            src="./assets/Enterprise-Plan.png"
            alt="Enterprise Plan"
            className="w-20 h-20 mb-4"
          />
          <p className="text-4xl font-bold text-gray-900 mb-6">
            $25 <span className="text-xl font-medium">/month</span>
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-500 flex-shrink-0"
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
                className="w-5 h-5 text-green-500 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Database Up to 1 TB
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
    </div>
  );
}

export default App;
