import { CarProps, FilterProps } from "@/types";

const headers = {
  "X-RapidAPI-Key": "61d2fe340dmsh5a7717eae7defedp1deaf3jsnedd702e1fe00",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};
export async function fetchCars(filters: FilterProps) {
  try {
    const { manufacturer, model, fuel, year, limit } = filters;
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    const response = await fetch(url, { headers: headers });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const milageRate = mileageFactor * city_mpg;

  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = ageRate + basePricePerDay + milageRate;
  return rentalRatePerDay.toFixed(0);
}
export const generateCarImage = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split("")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
