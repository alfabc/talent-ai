import React from 'react';

const PricingItem = ({ feature, price }) => (
  <div className="flex justify-between py-2 border-b border-gray-200">
    <span>{feature}</span>
    <span className="font-semibold">{price}</span>
  </div>
);

export const PricingSection = ({ t }) => (
  <section className="mb-16">
    <h3 className="text-3xl font-semibold mb-6 text-center">{t.pricing.title}</h3>
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h4 className="text-xl font-semibold mb-4">{t.pricing.subtitle}</h4>
      <div className="space-y-2">
        <PricingItem feature={t.pricing.items.publishing} price={t.pricing.free} />
        <PricingItem feature={t.pricing.items.brandedPage} price={t.pricing.free} />
        <PricingItem feature={t.pricing.items.managing} price={t.pricing.free} />
        <PricingItem feature={t.pricing.items.linkedInConnector} price={t.pricing.free} />
        <PricingItem feature={t.pricing.items.atsIntegration} price={t.pricing.free} />
        <PricingItem feature={t.pricing.items.downloadingPDF} price={t.pricing.free} />
        <PricingItem feature={t.pricing.items.aiParsing} price="10 credits" />
        <PricingItem feature={t.pricing.items.downloadingJSON} price="5 credits" />
        <PricingItem feature={t.pricing.items.aiEvaluationResume} price="10 credits" />
        <PricingItem feature={t.pricing.items.aiEvaluationApplication} price="30 credits" />
        <PricingItem feature={t.pricing.items.quizCreation} price="2 credits/question" />
        <PricingItem feature={t.pricing.items.quizEvaluation} price="8 credits/question" />
        <PricingItem feature={t.pricing.items.brandedQuizPage} price={t.pricing.free} />
      </div>
    </div>
  </section>
);