export const getMedianPrimeNumbers = (n: string | number): number[] => {
  const limitN = Number(n);

  // Eratosthenes algorithm to find all primes under n
  let array = [],
    upperLimit = Math.sqrt(limitN),
    output = [];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < limitN; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (let j = i * i; j < limitN; j += i) {
        array[j] = false;
      }
    }
  }

  // All array[i] set to true are primes
  for (let i = 2; i < limitN; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  const mid = Math.floor(output.length / 2);
  const result = output.length % 2 !== 0 ? [output[mid]] : [output[mid - 1], output[mid]];
  return result.filter((n) => n); // remove null values
};
