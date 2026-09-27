import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Architecture } from './components/Architecture';
import { Biomechanics } from './components/Biomechanics';
import { Applications } from './components/Applications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SuccessModal } from './components/SuccessModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const handleSuccessSubmit = (refNum: string) => {
    setReferenceNumber(refNum);
    setModalOpen(true);
  };

  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-brand-500 selection:text-white flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Overview />
        <Architecture />
        <Biomechanics />
        <Applications />
        <Achievements />
        <Contact onSuccessSubmit={handleSuccessSubmit} />
      </main>
      <Footer />
      <SuccessModal
        isOpen={modalOpen}
        referenceNumber={referenceNumber}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default App;
