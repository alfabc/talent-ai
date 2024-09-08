import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrialForm';
import { SignupModal } from '@/components/SignupModal';
import { LoginModal } from '@/components/LoginModal';
import { VideoModal } from '@/components/VideoModal';
import { SlideShowModal } from '@/components/SlideShowModal';
import { QuizExampleModal } from '@/components/QuizExampleModal';
import { PricingSection } from '@/components/PricingSection';
import { Feature } from '@/components/Feature';
import { VideoSection } from '@/components/VideoSection';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';
import { QuestionsSection } from '@/components/QuestionsSection';
import { CTASection } from '@/components/CTASection';
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
    const detectBrowserLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('de')) return 'de';
      if (browserLang.startsWith('es')) return 'es';
      return 'en';
    };
    setLanguage(detectBrowserLanguage());
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header language={language} setLanguage={setLanguage} openLoginModal={openLoginModal} t={t} />
      <main className="container mx-auto px-4 py-16">
        <HeroSection t={t} openSignupModal={openSignupModal} />
        <FeatureSection t={t} openSlideShowModal={openSlideShowModal} openVideoModal={openVideoModal} openQuizExampleModal={openQuizExampleModal} />
        <VideoSection openVideoModal={openVideoModal} />
        <PricingSection t={t} />
        <QuestionsSection t={t} />
        <CTASection t={t} openSignupModal={openSignupModal} />
      </main>
      <Footer t={t} />
      <FreeTrialForm isOpen={isFormOpen} onClose={closeForm} />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} t={t} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} t={t} />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} videoId="fVVG_vpH6ag" />
      <SlideShowModal isOpen={isSlideShowModalOpen} onClose={closeSlideShowModal} />
      <QuizExampleModal isOpen={isQuizExampleModalOpen} onClose={closeQuizExampleModal} />
    </div>
  );
};

export default Index;