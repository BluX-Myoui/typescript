import { generarReporte, type Estudiante } from './domain/types.js';
import { obtenerRecurso } from './services/api-client.js';

async function main(): Promise<void> {
    const estados = [
        generarReporte({
            tipo: 'ACTIVA',
            asignaturas: [
                { codigo: 'MAT-101', nombre: 'Calculo I', creditos: 6 }
            ]
        }),
        generarReporte({ tipo: 'SUSPENDIDA', motivo: 'Documentacion pendiente' }),
        generarReporte({ tipo: 'FINALIZADA', notaMedia: 7.8 })
    ];

    estados.forEach((linea) => console.log(linea));

    const estudiante = await obtenerRecurso<Estudiante>('/api/estudiantes/EST-001');
    console.log('Estudiante desde API simulada:', estudiante.nombreCompleto);
}

main().catch((err: unknown) => {
    console.error(err);
});
