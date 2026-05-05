import React from 'react';

const WhatsNew = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold">What's</h2>
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">✦</span> {/* তোমার আইকন অনুযায়ী পরিবর্তন করতে পারো */}
          </div>
          <h2 className="text-3xl font-bold">New</h2>
        </div>
        <button className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50">
          Explore More Thoughts →
        </button>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="relative">
            <img 
              src="https://i.imgur.com/3vJ5kL2.jpg" 
              alt="Ryan McNamara" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-3 left-3 bg-white text-xs px-2 py-1 rounded">News</div>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span>Carrie Rose</span>
              <span>· 2 mins</span>
            </div>
            <h3 className="font-semibold leading-tight">
              Ryan McNamara Is Now Rise at Seven's Global Operations Director
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="relative">
            <img 
              src="https://i.imgur.com/8zK7pL9.jpg" 
              alt="Chocolate" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-white/90 text-xs px-2 py-1 rounded">7°</div>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span>Ray Saddiq</span>
              <span>· 2 mins</span>
            </div>
            <h3 className="font-semibold leading-tight">
              Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden relative">
          <img 
            src="https://i.imgur.com/XpL9mN2.jpg" 
            alt="Noomz Candy" 
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <span>Carrie Rose</span>
              <span>· 2 mins</span>
            </div>
            <h3 className="font-semibold leading-tight">
              Rise at Seven Appointed by for Noomz
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhatsNew;