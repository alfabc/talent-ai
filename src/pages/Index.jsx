import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, FileText, BrainCircuit, Linkedin } from 'lucide-react';
import { FreeTrialForm } from '@/components/FreeTrialForm';

const Feature = ({ icon, title, description }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Talent AI</h1>
          <a href="mailto:info@talent24.ai" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Contact Us
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Revolutionize Your Recruiting Process</h2>
          <p className="text-xl text-gray-600 mb-8">Talent AI streamlines recruitment, saving you time and helping you find the best candidates.</p>
          <Button size="lg" className="text-lg" onClick={() => window.location.href = '/login'}>
            Login <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
            title="Smart Candidate Matching"
            description="AI-powered algorithms match candidates to job requirements with high accuracy."
          />
          <Feature 
            icon={<FileText className="h-6 w-6 text-blue-500" />}
            title="AI-powered CV Parsing"
            description="Automatically extract and analyze key information from resumes with advanced AI technology."
          />
          <Feature 
            icon={<BrainCircuit className="h-6 w-6 text-blue-500" />}
            title="AI-powered Quiz Generation"
            description="Create tailored assessments for candidates with our intelligent quiz generation system."
          />
          <Feature 
            icon={<Linkedin className="h-6 w-6 text-blue-500" />}
            title="LinkedIn Integration"
            description="Seamlessly connect with LinkedIn to source and evaluate potential candidates."
          />
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Ready to Transform Your Recruiting?</h3>
          <p className="text-xl text-gray-600 mb-8">Join thousands of recruiters who have streamlined their hiring process with Talent AI.</p>
          <Button size="lg" className="text-lg" onClick={openForm}>
            Start Free Trial
          </Button>
        </section>
      </main>

      <FreeTrialForm isOpen={isFormOpen} onClose={closeForm} />

      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            &copy; Alfa - {" "}
            <a 
              href="https://www.alfabc.io/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </a> - {" "}
            <a 
              href="https://talent24.ai/terms-of-service.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Terms & Conditions
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
