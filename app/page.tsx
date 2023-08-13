"use client";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home({ searchParams }: { searchParams: FilterProps }) {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(8);
  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        model: model || "",
        fuel: fuel || "",
        limit: limit || 8,
      });
      setAllCars(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(fuel,year);
    
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-6 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel}/>
          <div className="home__filter-container">
            <CustomFilter title={"fuel"} options={fuels} setFilter={setFuel}/>
            <CustomFilter title={"year"} options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>
        {allCars.length>0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
            {
              loading&&(
                <div className="mt-16 w-full flex-center">
                  <Image src={"/loader.svg"} alt="loading" className="object-contain" width={50} height={50}/>
                </div>
              )
            }
            <ShowMore
              pageNumber={(limit) / 10}
              isNext={(limit) > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops , no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
