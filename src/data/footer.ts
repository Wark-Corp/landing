import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Desde 2023 ayudando a comunidades mejorando su seguridad con nuetros servicios.",
    quickLinks: [
        {
            text: "Funciones",
            url: "#features"
        },
        {
            text: "Precios",
            url: "#pricing"
        },
        {
            text: "Opiniones",
            url: "#testimonials"
        }
    ],
    email: 'support@warkcorp.com',
    telephone: 'dsc.gg/wark',
    socials: {
        github: 'https://github.com/Wark-Corp',
        x: 'https://twitter.com/WarkCorporation',
        // twitter: 'https://twitter.com/WarkCorporation',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com/warkcorp',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/warkcorp',
    }
}
