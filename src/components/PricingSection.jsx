import React from 'react';

const PricingItem = ({ feature, price }) => (
  <div className="flex justify-between py-2 border-b border-gray-200">
    <span>{feature}</span>
    <span className="font-semibold">{price}</span>
  </div>
);

export const PricingSection = ({ t }) => (
  <section className="mb-16">
    <h3 className="text-3xl font-semibold mb-6 text-center">{t?.pricing?.title || 'Pricing'}</h3>
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h4 className="text-xl font-semibold mb-4">{t?.pricing?.subtitle || 'Pay per use of Talent AI'}</h4>
      <div className="space-y-2">
        <PricingItem feature={t?.pricing?.items?.publishing || 'Publishing unlimited jobs with unlimited candidates'} price={t?.pricing?.free || 'Free'} />
        <PricingItem feature={t?.pricing?.items?.brandedPage || 'Your branded company page listing your jobs'} price={t?.pricing?.free || 'Free'} />
        <PricingItem feature={t?.pricing?.items?.managing || 'Managing of unlimited talents and jobs in Talent AI'} price={t?.pricing?.free || 'Free'} />
        <PricingItem feature={t?.pricing?.items?.linkedInConnector || 'LinkedIn Connector to download jobs and candidates'} price={t?.pricing?.free || 'Free'} />
        <PricingItem feature={t?.pricing?.items?.atsIntegration || 'Integrate your ATS with Talent AI using our API'} price={t?.pricing?.free || 'Free'} />
        <PricingItem feature={t?.pricing?.items?.downloadingPDF || 'Downloading PDF-Resumes of candidates'} price={t?.pricing?.free || 'Free'} />
        <PricingItem feature={t?.pricing?.items?.aiParsing || 'AI-Parsing of a PDF-Resume'} price="10 credits" />
        <PricingItem feature={t?.pricing?.items?.downloadingJSON || 'Downloading Resume in JSON-format (API-only)'} price="5 credits" />
        <PricingItem feature={t?.pricing?.items?.aiEvaluationResume || 'AI-Evaluation of a Resume of a Candidate'} price="10 credits" />
        <PricingItem feature={t?.pricing?.items?.aiEvaluationApplication || 'AI-Evaluation of a Job-Application'} price="30 credits" />
        <PricingItem feature={t?.pricing?.items?.quizCreation || 'Creation of an individualized candidate quiz with AI'} price="2 credits/question" />
        <PricingItem feature={t?.pricing?.items?.quizEvaluation || 'Evaluation of an individualized candidate quiz with AI'} price="8 credits/question" />
        <PricingItem feature={t?.pricing?.items?.brandedQuizPage || 'Branded quiz page for candidates'} price={t?.pricing?.free || 'Free'} />
      </div>
    </div>
  </section>
);