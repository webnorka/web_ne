"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

const data = [
    { name: "ERE Andalucía", amount: 680, color: "#ef4444" },
    { name: "Caso Gürtel", amount: 120, color: "#3b82f6" },
    { name: "Caso Púnica", amount: 250, color: "#3b82f6" },
    { name: "Caso Palau", amount: 35, color: "#eab308" },
    { name: "Caso Malaya", amount: 380, color: "#a855f7" },
];

export function CorruptionData() {
    return (
        <section id="data" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">La Realidad de la Partitocracia</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Coste estimado de los mayores casos de corrupción (Millones de €).
                        Datos que demuestran la falta de control al no existir separación de poderes.
                    </p>
                </div>

                <div className="h-[400px] w-full max-w-4xl mx-auto bg-secondary p-8 rounded-xl border border-white/5">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                            <XAxis type="number" stroke="#9ca3af" tickFormatter={(value) => `${value}M€`} />
                            <YAxis dataKey="name" type="category" stroke="#f3f4f6" width={100} />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", color: "#f3f4f6" }}
                                itemStyle={{ color: "#f3f4f6" }}
                                formatter={(value: number) => [`${value} Millones €`, "Coste"]}
                            />
                            <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-background p-6 rounded-lg text-center border border-white/5">
                        <span className="block text-4xl font-bold text-red-500 mb-2">40.000M€</span>
                        <span className="text-sm text-gray-400">Coste anual estimado de la corrupción ineficiente</span>
                    </div>
                    <div className="bg-background p-6 rounded-lg text-center border border-white/5">
                        <span className="block text-4xl font-bold text-primary mb-2">0</span>
                        <span className="text-sm text-gray-400">Jueces elegidos independientemente</span>
                    </div>
                    <div className="bg-background p-6 rounded-lg text-center border border-white/5">
                        <span className="block text-4xl font-bold text-accent mb-2">100%</span>
                        <span className="text-sm text-gray-400">Control político del Estado</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
