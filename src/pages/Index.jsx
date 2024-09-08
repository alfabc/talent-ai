import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, FileText, BrainCircuit, Linkedin, Briefcase, Code } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrialForm';
import { SignupModal } from '@/components/SignupModal';
import { LoginModal } from '@/components/LoginModal';
import { VideoModal } from '@/components/VideoModal';
import { SlideShowModal } from '@/components/SlideShowModal';
import { QuizExampleModal } from '@/components/QuizExampleModal';
import { PricingSection } from '@/components/PricingSection';
import VideoSection from '@/components/VideoSection';
import LanguageSelector from '@/components/LanguageSelector';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { translations } from '@/translations';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSlideShowModalOpen, setIsSlideShowModalOpen] = useState(false);
  const [isQuizExampleModalOpen, setIsQuizExampleModalOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('de')) setLanguage('de');
    else if (browserLang.startsWith('es')) setLanguage('es');
    else setLanguage('en');
  }, []);

  const t = translations[language] || translations.en;

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);
  const openSlideShowModal = () => setIsSlideShowModalOpen(true);
  const closeSlideShowModal = () => setIsSlideShowModalOpen(false);
  const openQuizExampleModal = () => setIsQuizExampleModalOpen(true);
  const closeQuizExampleModal = () => setIsQuizExampleModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header t={t} language={language} setLanguage={setLanguage} openLoginModal={openLoginModal} />
      <main className="container mx-auto px-4 py-16">
        <Hero t={t} openSignupModal={openSignupModal} />
        <FeatureSection
          t={t}
          openVideoModal={openVideoModal}
          openSlideShowModal={openSlideShowModal}
          openQuizExampleModal={openQuizExampleModal}
        />
        <VideoSection t={t} />
        <PricingSection t={t} />
        <CallToAction t={t} openSignupModal={openSignupModal} />
      </main>
      <Footer t={t} />
      <FreeTrialForm isOpen={isFormOpen} onClose={closeForm} />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} t={t} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} t={t} />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
      <SlideShowModal isOpen={isSlideShowModalOpen} onClose={closeSlideShowModal} />
      <QuizExampleModal isOpen={isQuizExampleModalOpen} onClose={closeQuizExampleModal} />
    </div>
  );
};

export default Index;