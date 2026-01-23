"use client";

import { useEffect, useState } from 'react';

import { getRemainingSchoolTime, getSchoolYearProgress, getSubjectStats } from '@/utils/schoolTimer';

interface ISubjectStats {
    subject: string;
    remainingHours: number;
    progress: number;
}

interface ITimeLeft {
    days: number;
    totalSchoolHours: number;
    totalSchoolMinutes: number;
    totalSchoolSeconds: number;
    remainingMs?: number;
    isComplete: boolean;
    progress?: number;
    subjects?: ISubjectStats[];
}

export default function CountdownDisplay() {
    const [timeLeft, setTimeLeft] = useState<ITimeLeft>(() => {
        const t = getRemainingSchoolTime();
        return {
            ...t,
            progress: getSchoolYearProgress(t.remainingMs || 0),
            subjects: getSubjectStats()
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = getRemainingSchoolTime();
            setTimeLeft({
                ...remaining,
                progress: getSchoolYearProgress(remaining.remainingMs || 0),
                subjects: getSubjectStats()
            });

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
                    Disfruta del verano
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 pt-32">
            <div className="mb-12">
                <h1 className="text-[8rem] md:text-[12rem] leading-none font-bold font-manrope tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl border-text">
                    {timeLeft.days}
                </h1>
                <p className="text-2xl md:text-4xl text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">
                    Días Restantes
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

            <div className="bg-gray-100 dark:bg-gray-800/50 p-6 md:p-10 rounded-3xl backdrop-blur-md w-full max-w-4xl">
                <h2 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                    Tiempo Restante
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

            {/* Subject Grid */}
            <div className="mt-12 w-full max-w-6xl px-4">
                <h2 className="text-2xl font-bold text-white mb-8">Asignaturas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {timeLeft.subjects?.map((sub: ISubjectStats) => (
                        <div key={sub.subject} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-200">{sub.subject}</h3>
                                </div>
                                <span className="text-4xl font-bold text-blue-500 tabular-nums">
                                    {sub.remainingHours}h
                                </span>
                            </div>

                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                                    style={{ width: `${sub.progress}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-xs text-gray-500 font-mono">{sub.progress.toFixed(1)}% completado</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="mt-12 text-sm text-gray-400 max-w-md mx-auto">
                Calculado para días lectivos, excluyendo festivos y fines de semana.
            </p>
        </div>
    );
}
