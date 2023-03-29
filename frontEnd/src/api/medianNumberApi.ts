const BASE_URL = "http://localhost:3000";
export const fetchMedianNumbers = async (upperLimit: string): Promise<{ data: number[] }> => {
  const res = await fetch(`${BASE_URL}/median-prime?upperLimit=${upperLimit}`);
  return res.json();
};
