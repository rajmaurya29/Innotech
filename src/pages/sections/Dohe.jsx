import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const doheList = [
  {
    text: "काल करै सो आज कर, आज करै सो अब। \nपल में परलय होयगी, बहुरि करैगो कब।",
    meaning: "What you plan to do tomorrow, do it today. What you plan to do today, do it now. \nWho knows when the end might come, then how will you complete your tasks?"
  },
  {
    text: "दया धरम का मूल है, पाप मूल अभिमान। \nतुलसी दया न छोड़िये, जब लग घट में प्रान।",
    meaning: "Compassion is the root of righteousness, pride is the root of sin. \nTulsi says never abandon compassion as long as there is life in your body."
  },
  {
    text: "रहिमन धागा प्रेम का, मत तोड़ो चटकाय। \nटूटे से फिर ना जुड़े, जुड़े गाँठ पड़ जाय।",
    meaning: "O Rahim, don't break the thread of love hastily. \nOnce broken it cannot be joined, if joined, a knot remains."
  },
  {
    text: "तिनका कबहुँ ना निन्दिए, जो पाँवन तर होय। \nकबहुँ उड़ी आँखिन पड़े, तो पीर घनेरी होय।",
    meaning: "Never insult even a straw that lies beneath your feet. \nIf it flies and gets into your eye, it causes immense pain."
  },
  {
    text: "बड़े बड़ाई ना करें, बड़े ना बोलें बोल। \nरहिमन हीरा कब कहे, लाख टका मेरो मोल।",
    meaning: "The truly great never proclaim their greatness, nor speak of their worth. \nRahim says, does a diamond ever declare its worth to be hundreds of thousands?"
  },
  {
    text: "धीरज धरम मित्र अरु नारी। \nआपद काल परखिये चारी।",
    meaning: "Patience, faith, friends and wife. \nAll four are tested in times of adversity."
  }
];

const Dohe = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.button
          onClick={() => navigate('/activities/reading')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors mb-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Reading
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-violet-900"
        >
          Classic Hindi Dohe
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {doheList.map((doha, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-xl font-medium text-gray-800 mb-4 whitespace-pre-line">
                {doha.text}
              </p>
              <div className="h-px bg-gradient-to-r from-violet-200 to-purple-200 my-4" />
              <p className="text-gray-600 italic">
                {doha.meaning}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Dohe;