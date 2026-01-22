'use client';

import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import { ITeamMember } from "@/types";
import { BsCpu, BsShieldCheck, BsPersonCircle } from "react-icons/bs";
import Image from "next/image";


const AboutPage = () => {
    const { t } = useLanguage();

    const infrastructure = [
        {
            title: t.about.infrastructure.hardware.title,
            description: t.about.infrastructure.hardware.description,
            icon: <BsCpu className="text-4xl text-blue-500 mb-4" />,
        },
        {
            title: t.about.infrastructure.connectivity.title,
            description: t.about.infrastructure.connectivity.description,
            icon: <BsShieldCheck className="text-4xl text-blue-500 mb-4" />,
        }
    ];

    const teamGroups = [
        { key: 'executive', title: t.about.team.groups.executive },
        { key: 'management', title: t.about.team.groups.management },
        { key: 'support', title: t.about.team.groups.support },
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            {/* Infrastructure Section */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full border border-blue-900 bg-blue-900/20 text-blue-500 text-sm font-medium mb-4">
                            {t.about.infrastructure.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.infrastructure.title}</h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {infrastructure.map((item, index) => (
                            <div key={index} className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8 hover:border-blue-900/50 transition-colors duration-300">
                                {item.icon}
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full border border-blue-900 bg-blue-900/20 text-blue-500 text-sm font-medium mb-4">
                            {t.about.team.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.team.title}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t.about.team.subtitle}
                        </p>
                    </div>

                    <div className="space-y-20">
                        {teamGroups.map((group) => {
                            const members = t.about.team.members.filter((m: ITeamMember) => m.group === group.key);
                            if (members.length === 0) return null;

                            const isExecutive = group.key === 'executive';
                            const isManagement = group.key === 'management';

                            let badgeColorClass = "border-blue-900 bg-blue-900/10 text-blue-400";
                            let cardHoverClass = "hover:border-blue-900/30";
                            let iconHoverClass = "group-hover:border-blue-900/50";

                            if (isExecutive) {
                                badgeColorClass = "border-red-900 bg-red-900/10 text-red-400";
                                cardHoverClass = "hover:border-red-900/30";
                                iconHoverClass = "group-hover:border-red-900/50";
                            } else if (isManagement) {
                                badgeColorClass = "border-orange-900 bg-orange-900/10 text-orange-400";
                                cardHoverClass = "hover:border-orange-900/30";
                                iconHoverClass = "group-hover:border-orange-900/50";
                            }

                            return (
                                <div key={group.key}>
                                    <div className="flex items-center justify-center mb-10">
                                        <span className={`py-1 px-4 rounded-full border ${badgeColorClass} text-sm font-medium`}>
                                            {group.title}
                                        </span>
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                                        {members.map((member, idx: number) => (
                                            <div key={idx} className={`bg-zinc-950 border border-zinc-900 rounded-xl p-6 text-center transition-all duration-300 group ${cardHoverClass}`}>
                                                <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border-2 border-transparent transition-colors ${iconHoverClass}`}>
                                                    {member.avatar ? (
                                                        <Image
                                                            src={member.avatar}
                                                            alt={member.name}
                                                            width={96}
                                                            height={96}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <BsPersonCircle className="text-5xl text-zinc-700" />
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                                                {isExecutive && (
                                                    <span className="inline-block py-0.5 px-2 rounded-full bg-red-950 text-red-500 text-xs font-medium border border-red-900/30">
                                                        Executive
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default AboutPage;
