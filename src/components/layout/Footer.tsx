import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-secondary py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">NUEVA ESPAÑA</h3>
                        <p className="text-sm text-gray-400">
                            Un proyecto para la verdad, la libertad y la representación política.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Enlaces</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#ideology" className="hover:text-white">Ideograma</Link></li>
                            <li><Link href="#data" className="hover:text-white">Datos de Corrupción</Link></li>
                            <li><Link href="/roadmap" className="hover:text-white">Roadmap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <p className="text-sm text-gray-400">
                            Unete a la causa. La verdad nos hará libres.
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Nueva España. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
