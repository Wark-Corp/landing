"use client";

import { useEffect, useState } from 'react';

import { getRemainingSchoolTime } from '@/utils/schoolTimer';

export default function CountdownDisplay() {
    const [timeLeft, setTimeLeft] = useState(getRemainingSchoolTime());

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getRemainingSchoolTime();
            setTimeLeft(remaining);

            if (remaining.isComplete) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (timeLeft.isComplete) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 animate-in fade-in zoom-in duration-700">
                <h1 className="text-6xl md:text-9xl font-bold text-primary mb-8 font-manrope">
                    ¡VACACIONES!
                </h1>
                <p className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300">
                    Disfruta del verano 🏖️
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
            <div className="mb-12">
                <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold font-manrope tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl border-text">
                    {timeLeft.days}
                </h1>
                <p className="text-2xl md:text-4xl text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">
                    Días Lectivos Restantes
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800/50 p-6 md:p-10 rounded-3xl backdrop-blur-md">
                <h2 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                    Tiempo de Clase Restante
                </h2>
                <div className="grid grid-cols-3 gap-8 md:gap-12">
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-6xl font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 border-text">
                            {timeLeft.totalSchoolHours}
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase font-bold mt-2">Horas</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-6xl font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 border-text">
                            {timeLeft.totalSchoolMinutes.toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase font-bold mt-2">Minutos</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl md:text-6xl font-bold tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 border-text">
                            {timeLeft.totalSchoolSeconds.toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase font-bold mt-2">Segundos</span>
                    </div>
                </div>
            </div>

            <p className="mt-12 text-sm text-gray-400 max-w-md mx-auto">
                Calculado para días lectivos de Madrid (08:15 - 14:30), excluyendo festivos y fines de semana.
            </p>
        </div>
    );
}
