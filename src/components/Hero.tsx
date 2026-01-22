'use client';

import React from 'react';

import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-20 pt-32 md:pt-40 md:pb-32 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] dark:hidden">
            </div>

            <div className="text-center z-10 relative">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto tracking-tight">
                    {t.hero.heading}
                </h1>
                <p className="mt-4 text-foreground/80 text-lg max-w-lg mx-auto">
                    {t.hero.subheading}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#pricing" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors w-full sm:w-auto">
                        {t.hero.ctaPrimary}
                    </a>
                    <a href="#features" className="bg-white text-black border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 transition-colors w-full sm:w-auto">
                        {t.hero.ctaSecondary}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
