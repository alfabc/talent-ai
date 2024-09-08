import React from 'react';
import { Search, FileText, BrainCircuit, Linkedin, Briefcase, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

const FeatureSection = ({ t, openVideoModal, openSlideShowModal, openQuizExampleModal }) => {
  return (
    <section className="grid md:grid-cols-2 gap-8 mb-16">
      <Feature 
        icon={<Search className="h-6 w-6 text-blue-500" />}
        title={t.features?.evaluation?.title}
        description={t.features?.evaluation?.description}
        action={{
          text: t.features?.evaluation?.action,
          onClick: openSlideShowModal
        }}
      />
      <Feature 
        icon={<FileText className="h-6 w-6 text-blue-500" />}
        title={t.features?.cvParsing?.title}
        description={t.features?.cvParsing?.description}
        action={{
          text: t.features?.cvParsing?.action,
          onClick: openVideoModal
        }}
      />
      <Feature 
        icon={<Briefcase className="h-6 w-6 text-blue-500" />}
        title={t.features?.ats?.title}
        description={t.features?.ats?.description}
      />
      <Feature 
        icon={<BrainCircuit className="h-6 w-6 text-blue-500" />}
        title={t.features?.quiz?.title}
        description={t.features?.quiz?.description}
        action={{
          text: t.features?.quiz?.action,
          onClick: openQuizExampleModal
        }}
      />
      <Feature 
        icon={<Linkedin className="h-6 w-6 text-blue-500" />}
        title={t.features?.linkedin?.title}
        description={t.features?.linkedin?.description}
      />
      <Feature 
        icon={<Code className="h-6 w-6 text-blue-500" />}
        title={t.features?.integration?.title}
        description={t.features?.integration?.description}
      />
    </section>
  );
};

export default FeatureSection;