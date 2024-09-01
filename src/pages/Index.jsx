import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, FileText, BrainCircuit, Linkedin, Briefcase, Code } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrialForm';
import { SignupModal } from '@/components/SignupModal';
import { LoginModal } from '@/components/LoginModal';
import { VideoModal } from '@/components/VideoModal';
import { SlideShowModal } from '@/components/SlideShowModal';
import { QuizExampleModal } from '@/components/QuizExampleModal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Feature = ({ icon, title, description, action }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>
        {description}
        {action && (
          <Button variant="link" className="ml-1 p-0" onClick={action.onClick}>
            {action.text}
          </Button>
        )}
      </CardDescription>
    </CardContent>
  </Card>
);

const PricingSection = () => (
  <section className="mb-16">
    <h3 className="text-3xl font-semibold mb-6 text-center">Pricing</h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-2 text-left">Feature</th>
            <th className="border p-2 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Publishing unlimited jobs with unlimited candidates</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
          <tr>
            <td className="border p-2">Your branded company page listing your jobs</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
          <tr>
            <td className="border p-2">Managing of unlimited talents and jobs in Talent AI</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
          <tr>
            <td className="border p-2">LinkedIn Connector to download jobs and candidates</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
          <tr>
            <td className="border p-2">Integrate your ATS with Talent AI using our API</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
          <tr>
            <td className="border p-2">Downloading PDF-Resumes of candidates</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
          <tr>
            <td className="border p-2">AI-Parsing of a PDF-Resume</td>
            <td className="border p-2 text-right">10 credits</td>
          </tr>
          <tr>
            <td className="border p-2">Downloading Resume in JSON-format (API-only)</td>
            <td className="border p-2 text-right">5 credits</td>
          </tr>
          <tr>
            <td className="border p-2">AI-Evaluation of a Resume of a Candidate</td>
            <td className="border p-2 text-right">10 credits</td>
          </tr>
          <tr>
            <td className="border p-2">AI-Evaluation of a Job-Application</td>
            <td className="border p-2 text-right">30 credits</td>
          </tr>
          <tr>
            <td className="border p-2">Creation of an individualized candidate quiz with AI</td>
            <td className="border p-2 text-right">2 credits/question</td>
          </tr>
          <tr>
            <td className="border p-2">Evaluation of an individualized candidate quiz with AI</td>
            <td className="border p-2 text-right">8 credits/question</td>
          </tr>
          <tr>
            <td className="border p-2">Branded quiz page for candidates</td>
            <td className="border p-2 text-right">Free</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-4 text-sm text-gray-600 text-center">
      Pay per use of Talent AI - <a href="https://talent24.ai" className="text-blue-600 hover:underline">https://talent24.ai</a>
    </p>
  </section>
);

const translations = {
  // ... (keep existing translations)
};

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSlideShowModalOpen, setIsSlideShowModalOpen] = useState(false);
  const [isQuizExampleModalOpen, setIsQuizExampleModalOpen] = useState(false);
  const detectBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('es')) return 'es';
    return 'en';
  };

  const [language, setLanguage] = useState(detectBrowserLanguage());

  useEffect(() => {
    setLanguage(detectBrowserLanguage());
  }, []);

  const t = translations[language];

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
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Talent AI</h1>
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[60px]">
                <SelectValue>
                  {language === 'en' ? '🇬🇧' : language === 'es' ? '🇪🇸' : '🇩🇪'}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇬🇧</SelectItem>
                <SelectItem value="es">🇪🇸</SelectItem>
                <SelectItem value="de">🇩🇪</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={openLoginModal}>
              {t.login}
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          <Button size="lg" className="text-lg" onClick={openSignupModal}>
            {t.startNow} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-2">{t.noCreditCard}</p>
        </section>

        <section className="mb-16 flex justify-center">
          <img 
            src="https://talent24.ai/screening.png" 
            alt="Talent AI Screening Process" 
            className="w-3/5 h-auto rounded-lg shadow-lg mx-auto object-cover"
          />
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Feature 
            icon={<Search className="h-6 w-6 text-blue-500" />}
            title={t.features.evaluation.title}
            description={
              <>
                {t.features.evaluation.description}
                <Button variant="link" className="ml-1 p-0" onClick={openSlideShowModal}>
                  {t.features.evaluation.action}
                </Button>
              </>
            }
          />
          <Feature 
            icon={<FileText className="h-6 w-6 text-blue-500" />}
            title={t.features.cvParsing.title}
            description={t.features.cvParsing.description}
            action={{
              text: t.features.cvParsing.action,
              onClick: openVideoModal
            }}
          />
          <Feature 
            icon={<Briefcase className="h-6 w-6 text-blue-500" />}
            title={t.features.ats.title}
            description={t.features.ats.description}
          />
          <Feature 
            icon={<BrainCircuit className="h-6 w-6 text-blue-500" />}
            title={t.features.quiz.title}
            description={
              <>
                {t.features.quiz.description}
                <Button variant="link" className="ml-1 p-0" onClick={openQuizExampleModal}>
                  {t.features.quiz.action}
                </Button>
              </>
            }
          />
          <Feature 
            icon={<Linkedin className="h-6 w-6 text-blue-500" />}
            title={t.features.linkedin.title}
            description={t.features.linkedin.description}
          />
          <Feature 
            icon={<Code className="h-6 w-6 text-blue-500" />}
            title={t.features.integration.title}
            description={t.features.integration.description}
          />
        </section>

        <PricingSection />

        <section className="text-center">
          <h3 className="text-3xl font-semibold mb-4">{t.cta.title}</h3>
          <p className="text-xl text-gray-600 mb-8">{t.cta.subtitle}</p>
          <Button size="lg" className="text-lg" onClick={openSignupModal}>
            {t.startNow} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-2">{t.noCreditCard}</p>
        </section>
      </main>

      <FreeTrialForm isOpen={isFormOpen} onClose={closeForm} />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} t={t} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} t={t} />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
      <SlideShowModal isOpen={isSlideShowModalOpen} onClose={closeSlideShowModal} />
      <QuizExampleModal isOpen={isQuizExampleModalOpen} onClose={closeQuizExampleModal} />

      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            &copy; {" "}
            <a 
              href="https://www.alfabcn.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Alfa
            </a> - {" "}
            <a 
              href="https://www.alfabc.io/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t.footer.privacyPolicy}
            </a> - {" "}
            <a 
              href="https://talent24.ai/terms-of-service.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t.footer.terms}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;