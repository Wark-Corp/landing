'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiChevronDown } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { useLanguage } from '@/context/LanguageContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLang = (newLang: 'ES' | 'EN') => {
        setLanguage(newLang);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/wark-logo.png"
                            alt={siteDetails.siteName}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-lg"
                        />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        <li>
                            <Link href="#features" className="text-foreground hover:text-foreground-accent transition-colors">
                                {t.menu.features}
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-foreground hover:text-foreground-accent transition-colors">
                                {t.menu.pricing}
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className="text-foreground hover:text-foreground-accent transition-colors">
                                {t.menu.testimonials}
                            </Link>
                        </li>
                        <li>
                            <Link href="https://discord.gg/tJ8gp389EB" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-3 rounded-full transition-colors font-medium">
                                {t.menu.discord}
                            </Link>
                        </li>
                        <li className="relative z-50">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex items-center justify-center gap-1 rounded-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900">
                                        <span className="text-xl">{language === 'ES' ? '🇪🇸' : '🇺🇸'}</span>
                                        <HiChevronDown className="h-4 w-4 text-gray-500" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-800 rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100 dark:border-gray-800">
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => changeLang('EN')}
                                                        className={`${active ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                            } group flex w-full items-center rounded-lg px-2 py-2 text-sm gap-2`}
                                                    >
                                                        <span className="text-xl">🇺🇸</span>
                                                        English
                                                        {language === 'EN' && <span className="ml-auto text-black dark:text-white">✓</span>}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => changeLang('ES')}
                                                        className={`${active ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                            } group flex w-full items-center rounded-lg px-2 py-2 text-sm gap-2`}
                                                    >
                                                        <span className="text-xl">🇪🇸</span>
                                                        Español
                                                        {language === 'ES' && <span className="ml-auto text-black dark:text-white">✓</span>}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => changeLang(language === 'ES' ? 'EN' : 'ES')}
                            className="text-foreground hover:text-foreground-accent transition-colors font-medium text-2xl"
                        >
                            {language === 'ES' ? '🇪🇸' : '🇺🇸'}
                        </button>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Activar/desactivar menú</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-b border-gray-100 dark:border-gray-800">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        <li>
                            <Link href="#features" className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                {t.menu.features}
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                {t.menu.pricing}
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                {t.menu.testimonials}
                            </Link>
                        </li>
                        <li>
                            <Link href="https://discord.gg/tJ8gp389EB" target="_blank" rel="noopener noreferrer" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                {t.menu.discord}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
