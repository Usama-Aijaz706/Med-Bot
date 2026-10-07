import type { ComponentType } from 'react';

import { AssistantSlide } from '@/components/onboarding/slides/AssistantSlide';
import { SupportSlide } from '@/components/onboarding/slides/SupportSlide';
import { VerifiedSlide } from '@/components/onboarding/slides/VerifiedSlide';

export type OnboardingSlide = {
  key: string;
  step: string;
  title: string;
  body: string;
  Illustration: ComponentType;
};

export const onboardingSlides: OnboardingSlide[] = [
  {
    key: 'assistant',
    step: '1/3',
    title: 'Your Personal\nMedical Assistant',
    body: 'Get reliable, easy-to-understand answers to your health questions using the latest medical knowledge (RAG powered).',
    Illustration: AssistantSlide,
  },
  {
    key: 'verified',
    step: '2/3',
    title: 'Accurate & Verified\nMedical Information',
    body: 'Powered by RAG technology, Medbot gathers information from trusted medical sources to give you safe and up-to-date answers.',
    Illustration: VerifiedSlide,
  },
  {
    key: 'support',
    step: '3/3',
    title: 'Health Support\nEvery Day',
    body: 'From symptom checks to wellness tips, Medbot is here to support you and your family — anytime, anywhere.',
    Illustration: SupportSlide,
  },
];
