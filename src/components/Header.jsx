import React from 'react';
import { Button } from "@/components/ui/button";
import LanguageSelector from './LanguageSelector';

const Header = ({ t, language, setLanguage, openLoginModal }) => {
  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Talent AI</h1>
        <div className="flex items-center space-x-4">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <Button variant="outline" onClick={openLoginModal}>
            {t.login}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;