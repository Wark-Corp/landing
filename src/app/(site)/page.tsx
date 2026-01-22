'use client';

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title={t.pricing.title}
          description={t.pricing.subtitle}
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title={t.testimonials.title}
          description={t.testimonials.subtitle}
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
