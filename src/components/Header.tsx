'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiChevronDown } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('ES');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLang = (newLang: string) => {
        setLang(newLang);
    };

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
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
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="https://discord.gg/tJ8gp389EB" target="_blank" rel="noopener noreferrer" className="text-white bg-black hover:bg-gray-900 px-8 py-3 rounded-full transition-colors font-medium">
                                Discord
                            </Link>
                        </li>
                        <li className="relative z-50">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex items-center justify-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100">
                                        <span className="text-xl">{lang === 'ES' ? '🇪🇸' : '🇺🇸'}</span>
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
                                    <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => changeLang('EN')}
                                                        className={`${active ? 'bg-gray-100' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-lg px-2 py-2 text-sm gap-2`}
                                                    >
                                                        <span className="text-xl">🇺🇸</span>
                                                        English
                                                        {lang === 'EN' && <span className="ml-auto text-black">✓</span>}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => changeLang('ES')}
                                                        className={`${active ? 'bg-gray-100' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-lg px-2 py-2 text-sm gap-2`}
                                                    >
                                                        <span className="text-xl">🇪🇸</span>
                                                        Español
                                                        {lang === 'ES' && <span className="ml-auto text-black">✓</span>}
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
                            onClick={() => changeLang(lang === 'ES' ? 'EN' : 'ES')}
                            className="text-foreground hover:text-foreground-accent transition-colors font-medium text-2xl"
                        >
                            {lang === 'ES' ? '�🇸' : '�🇸'}
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
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="https://discord.gg/tJ8gp389EB" target="_blank" rel="noopener noreferrer" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Discord
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
