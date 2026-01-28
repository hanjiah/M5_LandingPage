
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventSection from './components/EventSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import SuccessToast from './components/SuccessToast';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSuccess = () => {
    closeModal();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="min-h-screen relative">
      <Header onCtaClick={openModal} />
      <main>
        <Hero onCtaClick={openModal} />
        <EventSection onCtaClick={openModal} />
        <Features />
        <Testimonials />
      </main>
      <Footer />
      
      {isModalOpen && (
        <ApplicationModal onClose={closeModal} onSuccess={handleSuccess} />
      )}
      
      {showToast && (
        <SuccessToast message="쿠폰 신청이 완료되었습니다! 문자를 확인해주세요." />
      )}
    </div>
  );
};

export default App;
