export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[];
}

const LATENCIA_MS = 400;

function simularLatencia(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, LATENCIA_MS);
    });
}

export async function obtenerRecurso<T>(endpoint: string): Promise<T> {
    await simularLatencia();

    const respuesta = construirRespuestaMock<T>(endpoint);

    if (!respuesta.exito) {
        throw new Error(respuesta.errores?.join(', ') ?? 'Error en la peticion simulada');
    }

    return respuesta.datos;
}

function construirRespuestaMock<T>(endpoint: string): RespuestaAPI<T> {
    if (endpoint.includes('estudiantes')) {
        return {
            codigoEstado: 200,
            exito: true,
            datos: {
                id: 'EST-001',
                nombreCompleto: 'Ana Garcia',
                email: 'ana@universidad.edu'
            } as T
        };
    }

    if (endpoint.includes('asignaturas')) {
        return {
            codigoEstado: 200,
            exito: true,
            datos: [
                { codigo: 'MAT-101', nombre: 'Calculo I', creditos: 6 },
                { codigo: 'INF-202', nombre: 'Estructuras de datos', creditos: 6 }
            ] as T
        };
    }

    return {
        codigoEstado: 404,
        exito: false,
        datos: {} as T,
        errores: [`Endpoint no simulado: ${endpoint}`]
    };
}
