"use client";

import { useState } from 'react';
import CountdownDisplay from '@/components/CountdownDisplay';

export default function CountDownPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Simple hardcoded password for demonstration - ideally from env or more secure logic
    // User asked for "contraseña simple" without user/email.
    const CORRECT_PASSWORD = 'wark';

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword('');
            // Shake effect logic could go here
        }
    };

    if (isAuthenticated) {
        return <CountdownDisplay />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-manrope text-foreground mb-2">Acceso Restringido</h1>
                    <p className="text-yellow-500">Introduce la contraseña para ver la cuenta atrás.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-lg transition-all"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center font-medium animate-pulse">
                            Contraseña incorrecta
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
