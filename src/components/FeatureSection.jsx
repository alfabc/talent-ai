import React from 'react';
import { Feature } from '@/components/Feature';

export const FeatureSection = ({ t, openSlideShowModal, openVideoModal, openQuizExampleModal }) => (
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-8 text-center">{t?.features?.title || 'Key Features'}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Feature
        title={t?.features?.matchEvaluation?.title || 'Match Evaluation'}
        description={t?.features?.matchEvaluation?.description || 'AI-powered evaluation of candidate-job matches.'}
        buttonText={t?.features?.matchEvaluation?.buttonText || 'See Example'}
        onClick={openSlideShowModal}
      />
      <Feature
        title={t?.features?.resumeEvaluation?.title || 'Resume Evaluation'}
        description={t?.features?.resumeEvaluation?.description || 'Detailed AI analysis of candidate resumes.'}
        buttonText={t?.features?.resumeEvaluation?.buttonText || 'Watch Demo'}
        onClick={openVideoModal}
      />
      <Feature
        title={t?.features?.quizGeneration?.title || 'Quiz Generation'}
        description={t?.features?.quizGeneration?.description || 'Create custom quizzes for candidate assessment.'}
        buttonText={t?.features?.quizGeneration?.buttonText || 'View Sample'}
        onClick={openQuizExampleModal}
      />
    </div>
  </section>
);