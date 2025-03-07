// Edson => [E,d,s,o,n] => string => string[]
// [E,d,s,o,n] => Edson => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // array
  }
}

const rtaArray = parseStr('Edson');
// rtaArray.reverse()
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Edson =>', rtaArray);

const rtaString = parseStr(['E', 'd', 's', 'o', 'n']);
// rtaString.toLowerCase()
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log('rtaString', "['E','d','s','o','n'] =>", rtaString);
