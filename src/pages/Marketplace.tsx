import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon } from 'lucide-react';

const items = [
  {
    name: "Legendary Sword",
    game: "Dragon's Legacy",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800"
  },
  {
    name: "Cyber Armor",
    game: "Neon Warriors",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1636489953081-c4ebbd50fa3a?w=800"
  }
];

export const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.game}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white">{item.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <ShoppingCartIcon size={16} />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};