import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const shayariList = [
  {
    text: "दिल की किताब में तेरा नाम है पहला,\nबाकी के पन्ने खाली हैं सारे।",
    meaning: "Your name is the first in the book of my heart,\nAll other pages remain blank."
  },
  {
    text: "तुम्हारी याद आती है तो आँखें भर आती हैं,\nकिसी मंज़र की तरह तुम दिल में उतर आते हो।",
    meaning: "When I remember you, my eyes fill with tears,\nLike a beautiful scene, you descend into my heart."
  },
  {
    text: "हम तो अकेले ही चले थे जानिब-ए-मंज़िल,\nलोग जुड़ते गए और कारवाँ बनता गया।",
    meaning: "I had started alone towards my destination,\nPeople kept joining and it became a caravan."
  },
  {
    text: "जिंदगी में कुछ तो लोग कहेंगे,\nलोगों का काम है कहना।\nछोड़ो बेकार की बातों को,\nछोड़ो नहीं अपना ठिकाना।",
    meaning: "People will always have something to say in life,\nIt's people's job to talk.\nIgnore unnecessary talks,\nDon't lose your ground."
  },
  {
    text: "हर शाम गज़ल की तरह ढलती है,\nहर रात कहानी बन जाती है।\nतन्हाई में याद तेरी आती है,\nहर साँस तेरी कहानी बन जाती है।",
    meaning: "Every evening fades like a ghazal,\nEvery night becomes a story.\nIn solitude, your memory comes to me,\nEvery breath becomes your story."
  },
  {
    text: "मैं उसे छू कर देख लेता हूँ,\nवो हवा जो तेरे पास से गुज़री है।",
    meaning: "I touch and feel the air,\nThat has passed by you."
  }
];

const Shayari = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-pink-50">
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
          className="text-4xl font-bold text-center mb-12 text-fuchsia-900"
        >
          Beautiful Shayari Collection
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {shayariList.map((shayari, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-xl font-medium text-gray-800 mb-4 whitespace-pre-line">
                {shayari.text}
              </p>
              <div className="h-px bg-gradient-to-r from-fuchsia-200 to-pink-200 my-4" />
              <p className="text-gray-600 italic">
                {shayari.meaning}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Shayari;