import React from 'react';
import SectionLayout from '../../components/SectionLayout';
import { motion } from 'framer-motion';

const pahelis = [
  {
    question: "Ek thaal moti se bhara, sabke sir par aundha dhara. Chaand diwara moti khol, yeh hai kaun sa khel anmol?",
    answer: "Aasman mein taare (Stars in the sky)",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "Safed mahel mein laal sipahi, bolo kon hai?",
    answer: "Daant aur jeebh (Teeth and tongue)",
    image: "https://images.unsplash.com/photo-1606819717115-9159c900370b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "Ek raja ki do raniya, dono chalti samay bataya. Bolo kon?",
    answer: "Ghadi ki suiyan (Clock hands)",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "Choti si almari, rang birangi sari. Bolo kon?",
    answer: "Pencil box",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "Upar se kaala, andar se laal, khaye use meetha, thuke use kaal?",
    answer: "Paan",
    image: "https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&q=80&w=1000"
  },
  {
    question: "Ek thaali chaand sitaare, bina pankhe ud jaaye. Bolo kon?",
    answer: "Patang (Kite)",
    image: "https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?auto=format&fit=crop&q=80&w=1000"
  }
];

const Paheli = () => {
  return (
    <SectionLayout
      title="Paheli"
      subtitle="Traditional Indian riddles that test your wit"
      gradient="bg-gradient-to-br from-rose-600 to-red-700"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pahelis.map((paheli, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
          >
            <div className="relative h-48">
              <img
                src={paheli.image}
                alt="Paheli"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            </div>
            <div className="p-6">
              <p className="text-lg font-medium text-gray-900 mb-4">{paheli.question}</p>
              <div className="overflow-hidden">
                <p className="text-rose-600 font-medium transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  उत्तर: {paheli.answer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Paheli;