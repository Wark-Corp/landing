import clsx from "clsx";
import Link from 'next/link';
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, url } = tier;
    const { t } = useLanguage();

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 lg:max-w-full", { "shadow-lg": highlight })}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-800 rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4">{name}</h3>
                <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-600 dark:text-gray-400">{t.pricing.perMonth}</span>}
                </p>
                <Link
                    href={url || '#'}
                    className={clsx("w-full py-3 px-4 rounded-full transition-colors block text-center font-medium", { "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200": highlight, "bg-hero-background hover:bg-gray-200 dark:hover:bg-gray-800": !highlight })}
                >
                    {t.pricing.cta}
                </Link>
            </div>
            <div className="p-6 mt-1">
                <p className="font-bold mb-0">{t.pricing.included}</p>
                <p className="text-foreground-accent mb-5">{t.pricing.checkFeatures}</p>
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn
