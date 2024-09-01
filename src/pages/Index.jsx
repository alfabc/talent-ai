import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, FileText, BrainCircuit, Linkedin, Briefcase, Code } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrialForm';
import { SignupModal } from '@/components/SignupModal';
import { LoginModal } from '@/components/LoginModal';
import { VideoModal } from '@/components/VideoModal';
import { SlideShowModal } from '@/components/SlideShowModal';
import { QuizExampleModal } from '@/components/QuizExampleModal';
import { PricingSection } from '@/components/PricingSection';
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

const translations = {
  en: {
    login: 'Login',
    title: 'Revolutionize Your Recruiting Process',
    subtitle: 'Talent AI streamlines recruitment, saving you time and helping you find the best candidates.',
    startNow: 'Start now',
    noCreditCard: 'No credit card required',
    features: {
      ats: {
        title: 'Free Applicant Tracking System',
        description: 'Publish your job offers and manage candidates with Talent AI completely free, no credit card required.'
      },
      cvParsing: {
        title: 'AI-powered CV Parsing',
        description: 'Automatically extract and analyze key information from resumes with advanced AI technology.',
        action: 'Watch a short video how it works'
      },
      evaluation: {
        title: 'AI-powered Candidate Evaluation and Matching',
        description: 'Talent AI evaluates resumes without bias and finds the perfect match for your job offer. Our powerful AI has been specifically trained and understands the meaning and semantic of both resumes and job offers.',
        action: 'See examples'
      },
      quiz: {
        title: 'AI-powered Quiz Generation',
        description: 'Create tailored assessments for candidates with our intelligent quiz generation system. And let Talent AI evaluate the answers - powered by AI.',
        action: 'Example'
      },
      linkedin: {
        title: 'LinkedIn Integration',
        description: 'Seamlessly connect with LinkedIn to download all job applicants and their CVs from all your job offers.'
      },
      integration: {
        title: 'Integrate Talent AI with your ATS',
        description: 'Talent AI features can be accessed via an API so you can integrate it easily with your ATS.'
      }
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Pay per use of Talent AI',
      free: 'Free',
      items: {
        publishing: 'Publishing unlimited jobs with unlimited candidates',
        brandedPage: 'Your branded company page listing your jobs',
        managing: 'Managing of unlimited talents and jobs in Talent AI',
        linkedInConnector: 'LinkedIn Connector to download jobs and candidates',
        atsIntegration: 'Integrate your ATS with Talent AI using our API',
        downloadingPDF: 'Downloading PDF-Resumes of candidates',
        aiParsing: 'AI-Parsing of a PDF-Resume',
        downloadingJSON: 'Downloading Resume in JSON-format (API-only)',
        aiEvaluationResume: 'AI-Evaluation of a Resume of a Candidate',
        aiEvaluationApplication: 'AI-Evaluation of a Job-Application',
        quizCreation: 'Creation of an individualized candidate quiz with AI',
        quizEvaluation: 'Evaluation of an individualized candidate quiz with AI',
        brandedQuizPage: 'Branded quiz page for candidates'
      }
    },
    cta: {
      title: 'Ready to Transform Your Recruiting?',
      subtitle: 'Join thousands of recruiters who have streamlined their hiring process with Talent AI.'
    },
    footer: {
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    },
    loginModal: {
      title: 'Login to Talent AI',
      email: 'Email',
      password: 'Password',
      loginButton: 'Login',
      googleLogin: 'Login with Google'
    },
    signupModal: {
      title: 'Create your account at Talent AI for free',
      name: 'Name',
      company: 'Company',
      email: 'Email Address',
      password: 'Password',
      repeatPassword: 'Repeat Password',
      createAccount: 'Create Account'
    }
  },
  es: {
    // ... (same structure as 'en', but with Spanish translations)
  },
  de: {
    // ... (same structure as 'en', but with German translations)
  }
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

        <PricingSection t={t} />

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