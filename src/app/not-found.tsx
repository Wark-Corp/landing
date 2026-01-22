import Link from 'next/link';
import Container from "@/components/Container";

export default function NotFound() {
    return (
        <div className="bg-hero-background min-h-screen flex items-center justify-center text-center">
            <Container>
                <h1 className="text-9xl font-bold text-white mb-4">404</h1>
                <h2 className="text-4xl font-semibold text-white mb-6">Página no encontrada</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                    Volver al Inicio
                </Link>
            </Container>
        </div>
    );
}
