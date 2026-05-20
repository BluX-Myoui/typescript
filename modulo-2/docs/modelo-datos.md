# Modelo de datos — Módulo 2

## Entidades (`interface`)

`Estudiante` y `Asignatura` se modelan con **interface** porque representan contratos estructurales de objetos del dominio universitario. Los identificadores usan `readonly` para inmutabilidad tras la creación.

## Unión discriminada (`type`)

`EstadoMatricula` es un **type alias** de unión discriminada con la propiedad literal `tipo`. Permite estados mutuamente excluyentes sin propiedades opcionales ambiguas.

`generarReporte` usa `switch` y comprobación exhaustiva con `never` en el `default`, de modo que un nuevo estado obligue a actualizar la función en tiempo de compilación.

## Cliente genérico

`obtenerRecurso<T>` parametriza el payload de respuesta. Todas las respuestas cumplen `RespuestaAPI<T>`, alineado con el patrón de envoltorio de API del curso.

## interface vs type

| Caso | Elección |
|------|----------|
| Objetos del dominio | `interface` |
| Uniones discriminadas | `type` |
| Alias semánticos | `type` |
