import React from "react";
import { Table } from "./CustomTable/Table";
import { TableRow } from "./CustomTable/TableRow";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import Heading from "./Heading";

export const BreedingSection = ({ data }) => {
  const genderRate = {
    0: {
      male: "100%",
      female: "0%",
    },
    1: {
      male: "87.5%",
      female: "12.5%",
    },
    2: {
      male: "75%",
      female: "25%",
    },
    3: {
      male: "62.5%",
      female: "37.5%",
    },
    4: {
      male: "50%",
      female: "50%",
    },
    5: {
      male: "37.5%",
      female: "62.5%",
    },
    6: {
      male: "25%",
      female: "75%",
    },
    7: {
      male: "12.5%",
      female: "87.5%",
    },
    8: {
      male: "0%",
      female: "100%",
    },
  };

  const getHatchSteps = (eggCycles) => {
    const stepsPerCycle = 255;
    const minSteps = eggCycles * stepsPerCycle;
    const maxSteps = minSteps + stepsPerCycle - 1;
    return `${minSteps.toLocaleString()} - ${maxSteps.toLocaleString()} steps`;
  };
  

  const returnGenderRate = (rate) => {
    return (
      <p className="flex gap-3">
        {rate === -1 ? (
          "Genderless"
        ) : (
          <>
            <span
              title="Male"
              className="flex items-center justify-center gap-1"
            >
              {genderRate[rate].male} {<IoIosMale />}
            </span>
            ,
            <span
              title="Female"
              className="flex items-center justify-center gap-1"
            >
              {genderRate[rate].female} {<IoIosFemale />}
            </span>
          </>
        )}
      </p>
    );
  };

  return (
    <section id="breeding-section" className=" flex flex-col gap-2 w-full info-section rounded-md">
      <Heading title={"Breeding"}/>
      <div className="capitalize">
        <Table>
          <TableRow
            title={"Gender Distribution"}
            value={returnGenderRate(data.pokemonSpecies.gender_rate)}
            className="whitespace-nowrap"
          />
          <TableRow
            title={"Growth Rate"}
            value={data.pokemonSpecies.growth_rate.name.split("-").join(" ")}
          />
          <TableRow
            title={"Habitat"}
            value={
              data.pokemonSpecies.habitat
                ? data.pokemonSpecies.habitat.name
                : "None"
            }
          />
          <TableRow
            title={"Egg Cycles"}
            value={
              data.pokemonSpecies.hatch_counter
            }
          />
          <TableRow
            title={"Steps to Hatch"}
            value={
              getHatchSteps(data.pokemonSpecies.hatch_counter)
            }
          />
          <TableRow
            title={"Egg Groups"}
            value={
              <ul className="capitalize flex flex-col gap-2 text-center">
                {data.pokemonSpecies.egg_groups.map((egg, index) => (
                  <li
                    key={index}
                    className={`font-semibold border p-1 px-5 text-sm rounded-md`}
                  >
                    {egg.name}
                  </li>
                ))}
              </ul>
            }
          />
        </Table>
      </div>
    </section>
  );
};
