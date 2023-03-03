// Функция для проверки длины строки.
const isEqualOrLess = (string, maxLength) => string.length <= maxLength;
isEqualOrLess('Puta que pariu!', 20);

// Функция для проверки, является ли строка палиндромом.
const isPalindrome = (string) => {
  string = string
    .replaceAll(' ', '')
    .toLowerCase();

  return string === string.split('').reverse().join('');
};

isPalindrome('Клоп Лёва вёл полк');

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры,
функция должна вернуть NaN: */
function getNumber(string) {
  if (typeof(string) === 'number') {

    return Math.abs(string);
  }

  const num = string.replace(/\D/g, '');

  return num.length ? +num : NaN;
}

getNumber('1 кефир, 0.5 батона');

/* Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку, дополненную указанными символами
до заданной длины. */
const myPadStart = (string, minLength, pad) => {
  let result = string;

  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }

  return result;

};

myPadStart('rty', 6, 'qwerty');
