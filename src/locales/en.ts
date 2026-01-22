import { Locale } from './es';

export const en: Locale = {
    hero: {
        heading: 'Fast, Secure and Simple',
        subheading: 'Security, protection, and moderation services for Discord servers powered by Wark and WarkGuard.',
        ctaPrimary: 'Get Started',
        ctaSecondary: 'Learn More',
    },
    menu: {
        features: 'Features',
        pricing: 'Pricing',
        testimonials: 'Reviews',
        discord: 'Discord',
        about: 'About Us',
    },
    benefits: {
        item1: {
            title: "Security and Protection",
            description: "Keep your server safe from potential bot attacks or raids with WarkGuard.",
            bullets: [
                { title: "Detects 99.9% of attacks", description: "Automatically reports every attack attempt on the server." },
                { title: "Stops spam or mass-ping", description: "Configure the service to halt mass pinging or mention spam." },
                { title: "Continuous updates", description: "Our team is constantly updating the system to eliminate bugs." }
            ]
        },
        item2: {
            title: "WarkVerify© Verification System",
            description: "Nothing better to start innovating in your community than our security system via local user verification.",
            bullets: [
                { title: "Control access to your server", description: "With the WarkVerify© Premium system, you can prevent bot attacks or spam." },
                { title: "WarkVerify© for Enterprise", description: "With this advanced version, you can even customize every message and user interaction." },
                { title: "Ultra-fast performance", description: "Our API usually responds in just 20ms, ensuring speed for every function." }
            ]
        },
        item3: {
            title: "Moderation Services",
            description: "With WarkApp, you can provide your community with an advanced moderation system featuring various functions.",
            bullets: [
                { title: "Kick members who break rules", description: "With Wark, you can ban or kick any member with a single click." },
                { title: "Manage users with Auto-Roles", description: "Configure Enterprise plan Auto-Roles to create an immersive environment for your users." },
                { title: "Lock/Unlock channels", description: "With our systems, you can forbid sending messages in specific channels to avoid chat saturation." }
            ]
        }
    },
    pricing: {
        title: "Pricing",
        subtitle: "Our pricing for Discord servers.",
        tiers: {
            lite: {
                name: 'Lite',
                features: ['Basic Wark commands', 'Basic WarkGuard commands', 'Basic AntiRaid system', '24/7 Personalized support']
            },
            premium: {
                name: 'Premium',
                features: ['Premium Wark commands', 'Premium WarkGuard commands', 'Discounts on future purchases', 'Verification system', 'Get updates before anyone else', '24/7 Personalized support']
            },
            enterprise: {
                name: 'Enterprise',
                features: ['Full access to Wark', 'Full access to WarkGuard', 'Custom feature creation', 'Custom AntiRaid system', 'Custom verification system', 'Get updates before anyone else', 'Up to 5 different servers', '24/7 Specialized support']
            }
        },
        cta: "Get Started",
        included: "INCLUDED",
        checkFeatures: "Check what is included in each plan:",
        perMonth: "/mo"
    },
    cta: {
        heading: "Upgrade your server with Wark and WarkGuard",
        subheading: "Start building the server of your dreams today.",
    },
    footer: {
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        links: "Links",
        contact: "Contact us"
    },
    stats: {
        servers: { title: "150+", description: "Total servers registered in Wark." },
        ratings: { title: "4.7", description: "In ratings from our clients." },
        companies: { title: "3+", description: "Companies managed by Wark Corp." }
    },
    testimonials: {
        title: "What our clients say",
        subtitle: "Reviews from our clients.",
        items: [
            {
                name: 'Rateing',
                role: 'Ex-Manager of MotionMC Network',
                message: `The best security and moderation bot I have tried, very good support system. I recommend it to all servers.`,
                avatar: '/images/testimonial-1.webp',
            },
            {
                name: 'crazyCat',
                role: 'Owner of Heat Community',
                message: `We really liked it for moderating our small community, we have been using it as our main bot for a while now.`,
                avatar: '/images/testimonial-2.webp',
            },
            {
                name: 'Magros',
                role: 'Owner of NeverCraft Network',
                message: `We just started our network and it has been very useful for Discord and Minecraft configuration. Very good.`,
                avatar: '/images/testimonial-3.webp',
            },
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "FAQS",
        moreQuestions: "Have more questions? Ask us directly!",
        items: [
            {
                question: `Need help?`,
                answer: 'You can join our official support Discord server. There you can open a ticket to communicate with a member of our team.',
            },
            {
                question: `Experiencing unexpected downtime or response issues?`,
                answer: 'If you are experiencing a lack of response from our services in interactions or commands, it may be due to maintenance or a network issue. Be sure to check our status page to stay updated.',
            },
            {
                question: 'What do I do if I find a bug/error in your services?',
                answer: `If you find a bug in any of our services, websites, or anything related to the company, you are obligated to report it to our team. You will be rewarded depending on the severity of the bug found.`
            },
            {
                question: 'Do you want to upgrade your plan to access perks?',
                answer: 'You can purchase a plan from https://shop.warkcorp.com and choose the one that best suits you or your Discord server. If you have questions, do not hesitate to contact us.',
            },
            {
                question: 'What happens if I want to request a refund?',
                answer: 'You can return plans only within 24 hours of purchase; after that time, we will not accept returns due to internal policies.'
            }
        ]
    },
    about: {
        infrastructure: {
            badge: "Technology",
            title: "Our Bots",
            hardware: {
                title: "Wark: Advanced Moderation",
                description: "Our moderation bot, Wark, is designed to simplify your community management. It processes events in real-time to maintain order and execute commands with zero latency."
            },
            connectivity: {
                title: "WarkGuard: Security Shield",
                description: "WarkGuard is your first line of defense. This security bot protects your server against raids, spam, and malicious attacks, ensuring a safe environment 24/7."
            }
        },
        team: {
            badge: "Our Team",
            title: "The Wark Corporation Team",
            subtitle: "Meet the Team of the bussiness.",
            groups: {
                executive: "Executive Team",
                management: "Management Team",
                support: "Support & other Teams"
            },
            members: [
                { name: "Darío A.", role: "Founder & CEO", group: "executive", avatar: '/images/team/dario.jpg' },
                { name: "Thegrab M.", role: "Co-Founder, COO & CLO", group: "executive", avatar: '/images/team/thegrab.png' },
                { name: "Trevor D.", role: "Co-Founder & CFO", group: "executive", avatar: '/images/team/tester.webp' },
                { name: "Imanol N.", role: "CAO & CSO", group: "executive", avatar: '/images/team/imanol.png' },
                { name: "Rodri H.", role: "CHRO & CDO", group: "management", avatar: '/images/team/rateing.webp' },
                { name: "David C.", role: "CTO & System Administrator", group: "management", avatar: '/images/team/crazycat.webp' },
                { name: "Dani L.", role: "Support, Marketing & Safety", group: "support", avatar: '/images/team/danil.webp' },
                { name: "Álex B.", role: "Support & Safety", group: "support", avatar: '/images/team/alexb.webp' },
                { name: "Kivan N.", role: "Support", group: "support", avatar: '/images/team/kivan.webp' },
                { name: "Dennis Q.", role: "Support", group: "support", avatar: '/images/team/dennis.webp' },
                { name: "Santiago D.", role: "Support", group: "support", avatar: '/images/team/santiago.webp' },
                { name: "Eloi B.", role: "Support", group: "support", avatar: '/images/team/eloi.webp' }
            ]
        }
    }
};
