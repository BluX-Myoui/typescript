import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils.js';

const muestra = [12.4, 8.9, 15.0, 42.1, 9.3, 11.7];

console.log('Muestra:', muestra);
console.log('Media:', calcularMedia(muestra));
console.log('Mediana:', calcularMediana(muestra));
console.log('Sin atipicos (limite 10):', filtrarAtipicos(muestra, 10));
console.log('Array vacio -> media:', calcularMedia([]));
