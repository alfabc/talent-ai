import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, FileText, BrainCircuit, Linkedin } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Talent AI</h1>
          <Button variant="outline">Contact Us</Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Revolutionize Your Recruiting Process</h2>
          <p className="text-xl text-gray-600 mb-8">Talent AI streamlines recruitment, saving you time and helping you find the best candidates.</p>
          <Button size="lg" className="text-lg">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
          <Button size="lg" className="text-lg">
            Start Free Trial
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Talent AI. All rights reserved.</p>
          <p>www.talent24.ai</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
