'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ThemeToggle from './ThemeToggle';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/wark-logo.png"
                            alt={siteDetails.siteName}
                            width={28}
                            height={28}
                            className="min-w-fit w-5 h-5 md:w-7 md:h-7 rounded-md"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {t.hero.subheading}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">{t.footer.links}</h4>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href="#features" className="hover:text-foreground">{t.menu.features}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#pricing" className="hover:text-foreground">{t.menu.pricing}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#testimonials" className="hover:text-foreground">{t.menu.testimonials}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/sobre-nosotros" className="hover:text-foreground">{t.menu.about}</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">Discord: {footerDetails.telephone}</a>}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                    <div className="mt-5">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. {t.footer.rights}</p>
                <p className="text-sm mt-2 text-gray-500">Hecho con &hearts; por <a href="https://dario.warkcorp.com" target="_blank">Darío Arto</a></p>
            </div>
        </footer>
    );
};

export default Footer;
