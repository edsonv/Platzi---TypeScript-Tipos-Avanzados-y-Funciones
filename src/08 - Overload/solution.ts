// Edson => [E,d,s,o,n] => string => string[]
// [E,d,s,o,n] => Edson => string[] => string

// begining overload
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;
// end overload

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // array
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // array
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}
const rtaArray = parseStr('Edson');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray', 'Edson =>', rtaArray);

const rtaString = parseStr(['E', 'd', 's', 'o', 'n']);
rtaString.toLowerCase();
// if (typeof rtaString === 'string') {
//   rtaString.toLowerCase();
// }
console.log('rtaString', "['E','d','s','o','n'] =>", rtaString);

const rtaBoolean = parseStr(12);

// TypeORM
/**
 * Consejos:
 *
 * Si se tiene sobrecarga con any o unknown, se deberán dejar de último en la lista de overloads.
 *
 * Si cambia el número de parámetros para una sobrecarga que retorna el mismo tipo de valor, evaluaremos si es necesaria y si podremos usar parametros opcionales en su posición.
 *
 * Si los argumentos de una sobrecarga son de diferentes tipos y el valor de retorno es siempre el mismo, evaluar si podemos usar un union type,
 *
 * */
