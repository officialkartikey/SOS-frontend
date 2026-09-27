import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductPositioning } from './components/ProductPositioning';
import { CoreFeatures } from './components/CoreFeatures';
import { Device3D } from './components/Device3D';
import { HowItWorks } from './components/HowItWorks';
import { RealTimeLocation } from './components/RealTimeLocation';
import { FallDetection } from './components/FallDetection';
import { Geofencing } from './components/Geofencing';
import { SosAlert } from './components/SosAlert';
import { MobileApp } from './components/MobileApp';
import { SafetyEcosystem } from './components/SafetyEcosystem';
import { UseCases } from './components/UseCases';
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

  const handleOpenDemoModal = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-purple-600 selection:text-white flex flex-col min-h-screen">
      {/* Initial Telemetry Loading Screen with official uploaded logo */}
      <LoadingScreen />

      {/* Main Navigation */}
      <Navbar onRequestDemo={handleOpenDemoModal} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Product Positioning: "One Safety Device. Multiple Possibilities." */}
        <ProductPositioning />

        {/* Core Product Capabilities: 6 Premium Interactive Cards */}
        <CoreFeatures />

        {/* Large Interactive 3D NIRVANA Device Section */}
        <Device3D />

        {/* How It Works: Glowing Data Packet Pipeline */}
        <HowItWorks />

        {/* Real-Time Location: Interactive Dark Map & Timeline */}
        <RealTimeLocation />

        {/* Fall Detection: Kinetic Sequence & Verification Safeguard */}
        <FallDetection />

        {/* Geofencing: Circular Safe Zone & Perimeter Alerts */}
        <Geofencing />

        {/* SOS Alert: "When Seconds Matter." */}
        <SosAlert />

        {/* Mobile App: Realistic Interactive Phone Mockups */}
        <MobileApp />

        {/* Safety Ecosystem: 6-Tier Architecture */}
        <SafetyEcosystem />

        {/* Use Cases Across 6 Scenarios */}
        <UseCases />

        {/* Product Journey & Verified Achievements */}
        <Achievements />

        {/* Final CTA & Demo Request */}
        <Contact onSuccessSubmit={handleSuccessSubmit} />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Success Confirmation Modal */}
      <SuccessModal
        isOpen={modalOpen}
        referenceNumber={referenceNumber}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default App;
