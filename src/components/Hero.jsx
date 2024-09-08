import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = ({ t, openSignupModal }) => {
  return (
    <section className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">{t.title}</h2>
      <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
      <Button size="lg" className="text-lg" onClick={openSignupModal}>
        {t.startNow} <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="text-sm text-gray-500 mt-2">{t.noCreditCard}</p>
    </section>
  );
};

export default Hero;