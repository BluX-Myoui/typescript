export interface Estudiante {
    readonly id: string;
    nombreCompleto: string;
    email: string;
    fechaUltimoAcceso?: Date;
}

export interface Asignatura {
    readonly codigo: string;
    nombre: string;
    creditos: number;
}

export interface MatriculaActiva {
    tipo: 'ACTIVA';
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: 'SUSPENDIDA';
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: 'FINALIZADA';
    notaMedia: number;
}

export type EstadoMatricula =
    | MatriculaActiva
    | MatriculaSuspendida
    | MatriculaFinalizada;

export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case 'ACTIVA':
            return `Matricula activa con ${estado.asignaturas.length} asignaturas inscritas.`;
        case 'SUSPENDIDA':
            return `Matricula suspendida. Motivo: ${estado.motivo}`;
        case 'FINALIZADA':
            return `Matricula finalizada. Nota media: ${estado.notaMedia.toFixed(2)}`;
        default: {
            const comprobacionExhaustiva: never = estado;
            throw new Error(`Estado no manejado: ${JSON.stringify(comprobacionExhaustiva)}`);
        }
    }
}
