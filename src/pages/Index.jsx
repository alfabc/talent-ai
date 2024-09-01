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
      <p>{description}</p>
      {action && (
        <Button variant="link" className="ml-1 p-0" onClick={action.onClick}>
          {action.text}
        </Button>
      )}
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
  en: {
    login: "Login",
    title: "AI-Powered Talent Acquisition",
    subtitle: "Streamline your hiring process with advanced AI technology",
    startNow: "Start Now",
    noCreditCard: "No credit card required",
    features: {
      evaluation: {
        title: "AI-Powered Candidate Evaluation",
        description: "Evaluate candidates quickly and accurately with our AI technology.",
        action: "See how it works"
      },
      cvParsing: {
        title: "Intelligent CV Parsing",
        description: "Extract key information from resumes automatically.",
        action: "Watch demo"
      },
      ats: {
        title: "Applicant Tracking System",
        description: "Manage your entire recruitment process in one place."
      },
      quiz: {
        title: "AI-Generated Quizzes",
        description: "Create custom quizzes to assess candidate skills.",
        action: "View example"
      },
      linkedin: {
        title: "LinkedIn Integration",
        description: "Seamlessly import candidates and job postings from LinkedIn."
      },
      integration: {
        title: "API Integration",
        description: "Easily integrate with your existing HR systems."
      }
    },
    cta: {
      title: "Ready to Transform Your Recruiting?",
      subtitle: "Join thousands of companies using Talent AI to hire smarter."
    },
    footer: {
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  es: {
    login: "Iniciar sesión",
    title: "Adquisición de Talento Impulsada por IA",
    subtitle: "Optimice su proceso de contratación con tecnología de IA avanzada",
    startNow: "Comenzar ahora",
    noCreditCard: "No se requiere tarjeta de crédito",
    features: {
      evaluation: {
        title: "Evaluación de Candidatos con IA",
        description: "Evalúe candidatos de forma rápida y precisa con nuestra tecnología de IA.",
        action: "Ver cómo funciona"
      },
      cvParsing: {
        title: "Análisis Inteligente de CV",
        description: "Extraiga información clave de los currículos automáticamente.",
        action: "Ver demostración"
      },
      ats: {
        title: "Sistema de Seguimiento de Candidatos",
        description: "Gestione todo su proceso de reclutamiento en un solo lugar."
      },
      quiz: {
        title: "Cuestionarios Generados por IA",
        description: "Cree cuestionarios personalizados para evaluar las habilidades de los candidatos.",
        action: "Ver ejemplo"
      },
      linkedin: {
        title: "Integración con LinkedIn",
        description: "Importe sin problemas candidatos y ofertas de trabajo desde LinkedIn."
      },
      integration: {
        title: "Integración API",
        description: "Integre fácilmente con sus sistemas de RRHH existentes."
      }
    },
    cta: {
      title: "¿Listo para Transformar su Reclutamiento?",
      subtitle: "Únase a miles de empresas que usan Talent AI para contratar de manera más inteligente."
    },
    footer: {
      privacyPolicy: "Política de Privacidad",
      terms: "Términos de Servicio"
    }
  },
  de: {
    login: "Anmelden",
    title: "KI-gestützte Talentakquise",
    subtitle: "Optimieren Sie Ihren Einstellungsprozess mit fortschrittlicher KI-Technologie",
    startNow: "Jetzt starten",
    noCreditCard: "Keine Kreditkarte erforderlich",
    features: {
      evaluation: {
        title: "KI-gestützte Kandidatenbewertung",
        description: "Bewerten Sie Kandidaten schnell und genau mit unserer KI-Technologie.",
        action: "Sehen Sie, wie es funktioniert"
      },
      cvParsing: {
        title: "Intelligentes Lebenslauf-Parsing",
        description: "Extrahieren Sie automatisch wichtige Informationen aus Lebensläufen.",
        action: "Demo ansehen"
      },
      ats: {
        title: "Bewerbermanagementsystem",
        description: "Verwalten Sie Ihren gesamten Rekrutierungsprozess an einem Ort."
      },
      quiz: {
        title: "KI-generierte Quizze",
        description: "Erstellen Sie benutzerdefinierte Quizze zur Bewertung der Fähigkeiten von Kandidaten.",
        action: "Beispiel anzeigen"
      },
      linkedin: {
        title: "LinkedIn-Integration",
        description: "Importieren Sie nahtlos Kandidaten und Stellenausschreibungen von LinkedIn."
      },
      integration: {
        title: "API-Integration",
        description: "Einfache Integration in Ihre bestehenden HR-Systeme."
      }
    },
    cta: {
      title: "Bereit, Ihre Rekrutierung zu transformieren?",
      subtitle: "Schließen Sie sich Tausenden von Unternehmen an, die Talent AI für intelligentere Einstellungen nutzen."
    },
    footer: {
      privacyPolicy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen"
    }
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
            description={t.features.evaluation.description}
            action={{
              text: t.features.evaluation.action,
              onClick: openSlideShowModal
            }}
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
            description={t.features.quiz.description}
            action={{
              text: t.features.quiz.action,
              onClick: openQuizExampleModal
            }}
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