'use client';

import { useLanguage } from "@/context/LanguageContext";
import { BsBarChartFill, BsStarFill, BsGlobe } from "react-icons/bs";

const Stats: React.FC = () => {
    const { t } = useLanguage();

    const stats = [
        {
            title: t.stats.servers.title,
            description: t.stats.servers.description,
            icon: <BsBarChartFill className="text-3xl sm:text-4xl text-black dark:text-white" />,
        },
        {
            title: t.stats.ratings.title,
            description: t.stats.ratings.description,
            icon: <BsStarFill className="text-3xl sm:text-4xl text-black dark:text-white" />,
        },
        {
            title: t.stats.companies.title,
            description: t.stats.companies.description,
            icon: <BsGlobe className="text-3xl sm:text-4xl text-black dark:text-white" />,
        },
    ];

    return (
        <section id="stats" className="py-10 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map(stat => (
                    <div key={stat.title} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
                            {stat.icon}
                            {stat.title}
                        </h3>
                        <p className="text-foreground-accent">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
