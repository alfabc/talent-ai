import React from 'react';

const Footer = ({ t }) => {
  return (
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
            {t.footer?.privacyPolicy}
          </a> - {" "}
          <a 
            href="https://talent24.ai/terms-of-service.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t.footer?.terms}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;