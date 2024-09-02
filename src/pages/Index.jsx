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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
      },
      creditPricing: {
        title: 'Pricing of credits',
        description: 'The more credits you purchase, the cheaper the credit-price. The minimum number of credits that needs to be purchased is 5.000 credits (equivalent to 200 EUR). Each new and verified customer gets 200 credits for free, verification requires video call with us.',
        table: {
          header: {
            amount: 'Purchase amount',
            credits: 'Credits received',
            price: 'Credit-price'
          },
          rows: [
            {
              amount: '200 EUR',
              credits: '5.000 credits',
              price: '1 credit = 4,0 Cent'
            },
            {
              amount: '1.000 EUR',
              credits: '50.000 credits',
              price: '1 credit = 2,0 Cent (50% discount)'
            },
            {
              amount: '5.000 EUR',
              credits: '500.000 credits',
              price: '1 credit = 1,0 Cent (75% discount)'
            }
          ]
        }
      }
    },
    questions: {
      title: 'Do you have more questions about Talent AI?',
      scheduleButton: 'Schedule a meeting with us'
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
    subtitle: 'Talent AI optimiza el reclutamiento, ahorrándote tiempo y ayudándote a encontrar los mejores candidatos.',
    startNow: 'Comienza ahora',
    noCreditCard: 'No se requiere tarjeta de crédito',
    features: {
      ats: {
        title: 'Sistema de seguimiento de candidatos gratuito',
        description: 'Publica tus ofertas de trabajo y gestiona candidatos con Talent AI completamente gratis, sin necesidad de tarjeta de crédito.'
      },
      cvParsing: {
        title: 'Análisis de CV con IA',
        description: 'Extrae y analiza automáticamente información clave de los currículums con tecnología de IA avanzada.',
        action: 'Ver un video corto de cómo funciona'
      },
      evaluation: {
        title: 'Evaluación y emparejamiento de candidatos con IA',
        description: 'Talent AI evalúa los currículums sin sesgos y encuentra la combinación perfecta para tu oferta de trabajo. Nuestra poderosa IA ha sido entrenada específicamente y comprende el significado y la semántica tanto de los currículums como de las ofertas de trabajo.',
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
        description: 'Se puede acceder a las características de Talent AI a través de una API para que puedas integrarlo fácilmente con tu ATS.'
      }
    },
    pricing: {
      title: 'Precios',
      subtitle: 'Paga por uso de Talent AI',
      free: 'Gratis',
      items: {
        publishing: 'Publicación de trabajos ilimitados con candidatos ilimitados',
        brandedPage: 'Tu página de empresa personalizada que lista tus trabajos',
        managing: 'Gestión de talentos y trabajos ilimitados en Talent AI',
        linkedInConnector: 'Conector de LinkedIn para descargar trabajos y candidatos',
        atsIntegration: 'Integra tu ATS con Talent AI usando nuestra API',
        downloadingPDF: 'Descarga de CV en PDF de candidatos',
        aiParsing: 'Análisis de CV en PDF con IA',
        downloadingJSON: 'Descarga de CV en formato JSON (solo API)',
        aiEvaluationResume: 'Evaluación con IA del CV de un candidato',
        aiEvaluationApplication: 'Evaluación con IA de una solicitud de trabajo',
        quizCreation: 'Creación de un cuestionario individualizado para candidatos con IA',
        quizEvaluation: 'Evaluación de un cuestionario individualizado para candidatos con IA',
        brandedQuizPage: 'Página de cuestionario personalizada para candidatos'
      },
      creditPricing: {
        title: 'Precios de los créditos',
        description: 'Cuantos más créditos compres, más barato será el precio por crédito. El número mínimo de créditos que se deben comprar es de 5.000 créditos (equivalente a 200 EUR). Cada cliente nuevo y verificado recibe 200 créditos gratis, la verificación requiere una videollamada con nosotros.',
        table: {
          header: {
            amount: 'Monto de compra',
            credits: 'Créditos recibidos',
            price: 'Precio por crédito'
          },
          rows: [
            {
              amount: '200 EUR',
              credits: '5.000 créditos',
              price: '1 crédito = 4,0 céntimos'
            },
            {
              amount: '1.000 EUR',
              credits: '50.000 créditos',
              price: '1 crédito = 2,0 céntimos (50% de descuento)'
            },
            {
              amount: '5.000 EUR',
              credits: '500.000 créditos',
              price: '1 crédito = 1,0 céntimo (75% de descuento)'
            }
          ]
        }
      }
    },
    questions: {
      title: '¿Tienes más preguntas sobre Talent AI?',
      scheduleButton: 'Programa una reunión con nosotros'
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
      email: 'Dirección de correo electrónico',
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
        description: 'Veröffentlichen Sie Ihre Stellenangebote und verwalten Sie Kandidaten mit Talent AI völlig kostenlos, keine Kreditkarte erforderlich.'
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
        title: 'KI-gestützte Quiz-Erstellung',
        description: 'Erstellen Sie maßgeschneiderte Bewertungen für Kandidaten mit unserem intelligenten Quiz-Erstellungssystem. Und lassen Sie Talent AI die Antworten auswerten - angetrieben von KI.',
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
    pricing: {
      title: 'Preise',
      subtitle: 'Bezahlen Sie pro Nutzung von Talent AI',
      free: 'Kostenlos',
      items: {
        publishing: 'Veröffentlichung unbegrenzter Jobs mit unbegrenzten Kandidaten',
        brandedPage: 'Ihre gebrandete Unternehmensseite mit Ihren Jobs',
        managing: 'Verwaltung unbegrenzter Talente und Jobs in Talent AI',
        linkedInConnector: 'LinkedIn-Connector zum Herunterladen von Jobs und Kandidaten',
        atsIntegration: 'Integrieren Sie Ihr ATS mit Talent AI über unsere API',
        downloadingPDF: 'Herunterladen von PDF-Lebensläufen von Kandidaten',
        aiParsing: 'KI-Parsing eines PDF-Lebenslaufs',
        downloadingJSON: 'Herunterladen des Lebenslaufs im JSON-Format (nur API)',
        aiEvaluationResume: 'KI-Bewertung eines Lebenslaufs eines Kandidaten',
        aiEvaluationApplication: 'KI-Bewertung einer Bewerbung',
        quizCreation: 'Erstellung eines individualisierten Kandidaten-Quiz mit KI',
        quizEvaluation: 'Auswertung eines individualisierten Kandidaten-Quiz mit KI',
        brandedQuizPage: 'Gebrandete Quiz-Seite für Kandidaten'
      },
      creditPricing: {
        title: 'Preise für Credits',
        description: 'Je mehr Credits Sie kaufen, desto günstiger wird der Credit-Preis. Die Mindestanzahl an Credits, die gekauft werden muss, beträgt 5.000 Credits (entspricht 200 EUR). Jeder neue und verifizierte Kunde erhält 200 Credits kostenlos, die Verifizierung erfordert einen Videoanruf mit uns.',
        table: {
          header: {
            amount: 'Kaufbetrag',
            credits: 'Erhaltene Credits',
            price: 'Credit-Preis'
          },
          rows: [
            {
              amount: '200 EUR',
              credits: '5.000 Credits',
              price: '1 Credit = 4,0 Cent'
            },
            {
              amount: '1.000 EUR',
              credits: '50.000 Credits',
              price: '1 Credit = 2,0 Cent (50% Rabatt)'
            },
            {
              amount: '5.000 EUR',
              credits: '500.000 Credits',
              price: '1 Credit = 1,0 Cent (75% Rabatt)'
            }
          ]
        }
      }
    },
    questions: {
      title: 'Haben Sie weitere Fragen zu Talent AI?',
      scheduleButton: 'Vereinbaren Sie ein Gespräch mit uns'
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
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
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
  const openCalendlyModal = () => setIsCalendlyModalOpen(true);
  const closeCalendlyModal = () => setIsCalendlyModalOpen(false);

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
            title={t.features?.evaluation?.title || 'Evaluation'}
            description={
              <>
                {t.features?.evaluation?.description || 'Description not available'}
                <Button variant="link" className="ml-1 p-0" onClick={openSlideShowModal}>
                  {t.features?.evaluation?.action || 'See examples'}
                </Button>
              </>
            }
          />
          <Feature 
            icon={<FileText className="h-6 w-6 text-blue-500" />}
            title={t.features?.cvParsing?.title || 'CV Parsing'}
            description={t.features?.cvParsing?.description || 'Description not available'}
            action={{
              text: t.features?.cvParsing?.action || 'Watch video',
              onClick: openVideoModal
            }}
          />
          <Feature 
            icon={<Briefcase className="h-6 w-6 text-blue-500" />}
            title={t.features?.ats?.title || 'ATS'}
            description={t.features?.ats?.description || 'Description not available'}
          />
          <Feature 
            icon={<BrainCircuit className="h-6 w-6 text-blue-500" />}
            title={t.features?.quiz?.title || 'Quiz'}
            description={
              <>
                {t.features?.quiz?.description || 'Description not available'}
                <Button variant="link" className="ml-1 p-0" onClick={openQuizExampleModal}>
                  {t.features?.quiz?.action || 'Example'}
                </Button>
              </>
            }
          />
          <Feature 
            icon={<Linkedin className="h-6 w-6 text-blue-500" />}
            title={t.features?.linkedin?.title || 'LinkedIn'}
            description={t.features?.linkedin?.description || 'Description not available'}
          />
          <Feature 
            icon={<Code className="h-6 w-6 text-blue-500" />}
            title={t.features?.integration?.title || 'Integration'}
            description={t.features?.integration?.description || 'Description not available'}
          />
        </section>

        <PricingSection t={t} />

        <section className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-4">{t.questions?.title || 'Do you have more questions about Talent AI?'}</h3>
          <Button size="lg" className="text-lg" onClick={openCalendlyModal}>
            {t.questions?.scheduleButton || 'Schedule a meeting with us'}
          </Button>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-semibold mb-4">{t.cta?.title || 'Ready to Transform Your Recruiting?'}</h3>
          <p className="text-xl text-gray-600 mb-8">{t.cta?.subtitle || 'Join thousands of recruiters who have streamlined their hiring process with Talent AI.'}</p>
          <Button size="lg" className="text-lg" onClick={openSignupModal}>
            {t.startNow || 'Start now'} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-2">{t.noCreditCard || 'No credit card required'}</p>
        </section>
      </main>

      <FreeTrialForm isOpen={isFormOpen} onClose={closeForm} />
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} t={t} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} t={t} />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
      <SlideShowModal isOpen={isSlideShowModalOpen} onClose={closeSlideShowModal} />
      <QuizExampleModal isOpen={isQuizExampleModalOpen} onClose={closeQuizExampleModal} />

      <Dialog open={isCalendlyModalOpen} onOpenChange={closeCalendlyModal}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <DialogHeader>
            <DialogTitle className="p-4">{t.questions?.scheduleButton || 'Schedule a meeting with us'}</DialogTitle>
          </DialogHeader>
          <div className="calendly-inline-widget" data-url="https://calendly.com/alfabcn?hide_gdpr_banner=1" style={{minWidth: "320px", height: "700px"}}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </DialogContent>
      </Dialog>

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
              {t.footer?.privacyPolicy || 'Privacy Policy'}
            </a> - {" "}
            <a 
              href="https://talent24.ai/terms-of-service.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t.footer?.terms || 'Terms & Conditions'}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;