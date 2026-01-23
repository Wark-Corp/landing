"use client";

import { useEffect, useState } from 'react';

import { getRemainingSchoolTime, getSchoolYearProgress } from '@/utils/schoolTimer';

interface ITimeLeft {
    days: number;
    totalSchoolHours: number;
    totalSchoolMinutes: number;
    totalSchoolSeconds: number;
    remainingMs?: number;
    isComplete: boolean;
    progress?: number;
}

export default function CountdownDisplay() {
    const [timeLeft, setTimeLeft] = useState<ITimeLeft>(() => {
        const t = getRemainingSchoolTime();
        return { ...t, progress: getSchoolYearProgress(t.remainingMs || 0) };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getRemainingSchoolTime();
            setTimeLeft({ ...remaining, progress: getSchoolYearProgress(remaining.remainingMs || 0) });

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

            {/* Progress Bar Section */}
            <div className="w-full max-w-2xl px-6 mb-12">
                <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-900 transition-all duration-1000 ease-out"
                        style={{ width: `${timeLeft.progress || 0}%` }}
                    />
                </div>
                <div className="mt-4 text-center">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                        {(timeLeft.progress || 0).toFixed(1)}%
                    </span>
                    <p className="text-xs text-gray-500 uppercase font-bold mt-1">Completado</p>
                </div>
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
