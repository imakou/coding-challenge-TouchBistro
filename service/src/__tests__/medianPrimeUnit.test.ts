import { getMedianPrimeNumbers } from "../services/medianPrimeService";

describe("getMedianPrimeNumbers", () => {
  it("returns the correct median prime numbers for 10", () => {
    const n = 10;
    const expected = [3, 5];
    const result = getMedianPrimeNumbers(n);
    expect(result).toEqual(expected);
  });

  it("returns the correct median prime numbers for 18", () => {
    const n = 18;
    const expected = [7];
    const result = getMedianPrimeNumbers(n);
    expect(result).toEqual(expected);
  });

  it("returns the correct median prime numbers for 1", () => {
    const n = 1;
    const result = getMedianPrimeNumbers(n);
    expect(result).toEqual([]);
  });
});
