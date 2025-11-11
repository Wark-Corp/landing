import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "600+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Clientes registrados en XeroHost."
    },
    {
        title: "4.8",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "En valoraciones de nuestros clientes vía Trustpilot."
    },
    {
        title: "1+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Empresas gestionadas por XeroGroup."
    }
];
