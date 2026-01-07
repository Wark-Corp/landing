'use client';

import { useLanguage } from "@/context/LanguageContext";
import PricingColumn from "./PricingColumn";

const Pricing: React.FC = () => {
    const { t } = useLanguage();

    // Convert object to array to match expected structure or map directly
    const tiers = [
        { ...t.pricing.tiers.lite, url: 'https://shop.warkcorp.com/l/lite' },
        { ...t.pricing.tiers.premium, url: 'https://shop.warkcorp.com/l/premium' },
        { ...t.pricing.tiers.enterprise, url: 'https://shop.warkcorp.com/l/enterprise' }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.name} tier={{ ...tier, price: index === 0 ? 1.99 : index === 1 ? 6.99 : 18.99 }} highlight={index === 1} />
            ))}
        </div>
    )
}

export default Pricing
