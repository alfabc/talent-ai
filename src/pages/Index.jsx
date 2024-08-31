import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
    login: 'Iniciar sesión',
    title: 'Revoluciona tu proceso de reclutamiento',
    subtitle: 'Talent AI agiliza el reclutamiento, ahorrándote tiempo y ayudándote a encontrar los mejores candidatos.',
    startNow: 'Empieza ahora',
    noCreditCard: 'No se requiere tarjeta de crédito',
    features: {
      ats: {
        title: 'Sistema de seguimiento de candidatos gratuito',
        description: 'Publica tus ofertas de trabajo y gestiona candidatos con Talent AI completamente gratis, sin necesidad de tarjeta de crédito.'
      },
      cvParsing: {
        title: 'Análisis de CV con IA',
        description: 'Extrae y analiza automáticamente información clave de los currículos con tecnología de IA avanzada.',
        action: 'Ver un video corto de cómo funciona'
      },
      evaluation: {
        title: 'Evaluación y emparejamiento de candidatos con IA',
        description: 'Talent AI evalúa los currículos sin sesgos y encuentra la combinación perfecta para tu oferta de trabajo. Nuestra potente IA ha sido entrenada específicamente y entiende el significado y la semántica tanto de los currículos como de las ofertas de trabajo.',
        action: 'Ver ejemplos'
      },
      quiz: {
        title: 'Generación de cuestionarios con IA',
        description: 'Crea evaluaciones personalizadas para los candidatos con nuestro sistema inteligente de generación de cuestionarios. Y deja que Talent AI evalúe las respuestas, impulsado por IA.',
        action: 'Ejemplo'
      },
      linkedin: {
        title: 'Integración con LinkedIn',
        description: 'Conéctate sin problemas con LinkedIn para descargar todos los solicitantes de empleo y sus CV de todas tus ofertas de trabajo.'
      },
      integration: {
        title: 'Integra Talent AI con tu ATS',
        description: 'Las funciones de Talent AI se pueden acceder a través de una API para que puedas integrarlo fácilmente con tu ATS.'
      }
    },
    cta: {
      title: '¿Listo para transformar tu reclutamiento?',
      subtitle: 'Únete a miles de reclutadores que han optimizado su proceso de contratación con Talent AI.'
    },
    footer: {
      privacyPolicy: 'Política de privacidad',
      terms: 'Términos y condiciones'
    },
    loginModal: {
      title: 'Iniciar sesión en Talent AI',
      email: 'Correo electrónico',
      password: 'Contraseña',
      loginButton: 'Iniciar sesión',
      googleLogin: 'Iniciar sesión con Google'
    },
    signupModal: {
      title: 'Crea tu cuenta en Talent AI gratis',
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo electrónico',
      password: 'Contraseña',
      repeatPassword: 'Repetir contraseña',
      createAccount: 'Crear cuenta'
    }
  },
  de: {
    login: 'Anmelden',
    title: 'Revolutionieren Sie Ihren Rekrutierungsprozess',
    subtitle: 'Talent AI optimiert die Rekrutierung, spart Ihnen Zeit und hilft Ihnen, die besten Kandidaten zu finden.',
    startNow: 'Jetzt starten',
    noCreditCard: 'Keine Kreditkarte erforderlich',
    features: {
      ats: {
        title: 'Kostenloses Bewerbermanagementsystem',
        description: 'Veröffentlichen Sie Ihre Stellenangebote und verwalten Sie Kandidaten mit Talent AI völlig kostenlos, ohne Kreditkarte.'
      },
      cvParsing: {
        title: 'KI-gestütztes Lebenslauf-Parsing',
        description: 'Extrahieren und analysieren Sie automatisch wichtige Informationen aus Lebensläufen mit fortschrittlicher KI-Technologie.',
        action: 'Sehen Sie ein kurzes Video, wie es funktioniert'
      },
      evaluation: {
        title: 'KI-gestützte Kandidatenbewertung und -matching',
        description: 'Talent AI bewertet Lebensläufe unvoreingenommen und findet die perfekte Übereinstimmung für Ihr Stellenangebot. Unsere leistungsstarke KI wurde speziell trainiert und versteht die Bedeutung und Semantik sowohl von Lebensläufen als auch von Stellenangeboten.',
        action: 'Beispiele ansehen'
      },
      quiz: {
        title: 'KI-gestützte Quiz-Generierung',
        description: 'Erstellen Sie maßgeschneiderte Bewertungen für Kandidaten mit unserem intelligenten Quiz-Generierungssystem. Und lassen Sie Talent AI die Antworten auswerten - angetrieben von KI.',
        action: 'Beispiel'
      },
      linkedin: {
        title: 'LinkedIn-Integration',
        description: 'Verbinden Sie sich nahtlos mit LinkedIn, um alle Bewerber und ihre Lebensläufe von all Ihren Stellenangeboten herunterzuladen.'
      },
      integration: {
        title: 'Integrieren Sie Talent AI in Ihr ATS',
        description: 'Auf die Funktionen von Talent AI kann über eine API zugegriffen werden, sodass Sie es einfach in Ihr ATS integrieren können.'
      }
    },
    cta: {
      title: 'Bereit, Ihre Rekrutierung zu transformieren?',
      subtitle: 'Schließen Sie sich Tausenden von Recruitern an, die ihren Einstellungsprozess mit Talent AI optimiert haben.'
    },
    footer: {
      privacyPolicy: 'Datenschutzrichtlinie',
      terms: 'Allgemeine Geschäftsbedingungen'
    },
    loginModal: {
      title: 'Bei Talent AI anmelden',
      email: 'E-Mail',
      password: 'Passwort',
      loginButton: 'Anmelden',
      googleLogin: 'Mit Google anmelden'
    },
    signupModal: {
      title: 'Erstellen Sie Ihr kostenloses Konto bei Talent AI',
      name: 'Name',
      company: 'Unternehmen',
      email: 'E-Mail-Adresse',
      password: 'Passwort',
      repeatPassword: 'Passwort wiederholen',
      createAccount: 'Konto erstellen'
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
  const [language, setLanguage] = useState('en');

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
