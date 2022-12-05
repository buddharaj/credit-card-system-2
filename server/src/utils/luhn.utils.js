/**
 * @description - Takes a credit card string value and returns true on valid number
 * @params {string} - credit card number
 * @returns {boolean} -  true if its valid credit card number
 */
export default function luhnCheck(num) {
    // accept only digits
    const arr = num.split('')
                .reverse()
                .map(x => parseInt(x));
  const lastDigit = arr.shift();
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
}
