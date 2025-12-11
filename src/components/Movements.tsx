"use client";

import { motion } from "framer-motion";
import { Megaphone, Ban, Vote } from "lucide-react";

export function Movements() {
    return (
        <section id="movements" className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Movimientos Inmediatos</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        La teoría sin acción es estéril. Únete a las campañas activas para forzar el cambio.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Ban className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Abstención Activa</h3>
                        <p className="text-white/80 mb-6">
                            No votes hasta que haya representación. Deslegitima el régimen con tu abstención consciente en las próximas elecciones.
                        </p>
                        <button className="w-full py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
                            Me Comprometo
                        </button>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Megaphone className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Difusión Masiva</h3>
                        <p className="text-white/80 mb-6">
                            Rompe el cerco mediático. Comparte nuestro contenido y explica la diferencia entre partidocracia y democracia.
                        </p>
                        <button className="w-full py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
                            Descargar Material
                        </button>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center"
                    >
                        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Vote className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Asociaciones Civiles</h3>
                        <p className="text-white/80 mb-6">
                            Organízate en tu distrito. Crea núcleos de control ciudadano independientes de los partidos políticos.
                        </p>
                        <button className="w-full py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors">
                            Buscar mi Distrito
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
