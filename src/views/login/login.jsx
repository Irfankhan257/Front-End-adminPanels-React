import React from "react";

const InnovatorInvestorScreen = () => {
  return (
    <div className="relative flex h-screen">
      {/* Centered Box */}

      {/* Innovator Section */}
      <div className="relative flex flex-1 items-center justify-center bg-blue-200">
        <div className="from-90% via-30% to-10% absolute inset-0 bg-gradient-to-r from-black-950 via-slate-900 to-teal-500 text-gray-600"></div>
        <div className="relative text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Innovator</h2>
          <a href="/innovatorsignin">
            <button className="bg-transparent border border-white py-2 px-4 text-white transition duration-300 hover:bg-teal-500">
              LogIn
            </button>
          </a>
        </div>
      </div>

      {/* Investor Section */}
      <div className="relative flex flex-1 items-center justify-center bg-blue-400">
        <div className="from-10% via-30% to-90% absolute inset-0 bg-gradient-to-l from-black-950 via-slate-900 to-teal-500 text-gray-600"></div>
        <div className="relative text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Investor</h2>
          <a href="/investorsignin">
            <button className="bg-transparent border border-white py-2 px-4 text-white transition duration-300 hover:bg-teal-500">
              LogIn
            </button>
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-10 flex items-center justify-center">
        <a href="/signup">
          <button className="bg-transparent  flex h-16 w-40 items-center justify-center rounded border border-white text-center text-white transition duration-300 hover:bg-slate-900">
            <span className="text-xl font-semibold">SignUp</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default InnovatorInvestorScreen;
