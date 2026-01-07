'use client';

import { useLanguage } from "@/context/LanguageContext";
import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import BenefitSection from "./BenefitSection"

const Benefits: React.FC = () => {
    const { t } = useLanguage();

    const benefitsData = [
        {
            ...t.benefits.item1,
            bullets: [
                { ...t.benefits.item1.bullets[0], icon: <FiBarChart2 size={26} /> },
                { ...t.benefits.item1.bullets[1], icon: <FiTarget size={26} /> },
                { ...t.benefits.item1.bullets[2], icon: <FiTrendingUp size={26} /> }
            ],
            imageSrc: "/images/warkguard-icon.png"
        },
        {
            ...t.benefits.item2,
            bullets: [
                { ...t.benefits.item2.bullets[0], icon: <FiDollarSign size={26} /> },
                { ...t.benefits.item2.bullets[1], icon: <FiBriefcase size={26} /> },
                { ...t.benefits.item2.bullets[2], icon: <FiPieChart size={26} /> }
            ],
            imageSrc: "/images/warkguard-icon.png"
        },
        {
            ...t.benefits.item3,
            bullets: [
                { ...t.benefits.item3.bullets[0], icon: <FiLock size={26} /> },
                { ...t.benefits.item3.bullets[1], icon: <FiUser size={26} /> },
                { ...t.benefits.item3.bullets[2], icon: <FiShield size={26} /> }
            ],
            imageSrc: "/images/wark-icon.png"
        },
    ];

    return (
        <div id="features" className="pt-10 md:pt-16">
            <h2 className="sr-only">INCLUÍDO</h2>
            {benefitsData.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits
