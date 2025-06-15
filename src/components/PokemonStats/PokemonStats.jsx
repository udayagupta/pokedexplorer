import { calculateStats } from "../../utils/calculateStats.js";
import Heading from "../Heading.jsx";
import { Table } from "../CustomTable/Table.jsx";
import { TableRow } from "../CustomTable/TableRow.jsx";

const TableRowValue = ({ stat }) => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div title="Base Stat" className="w-[5%] text-right">{stat.base_stat}</div>
      <div className="w-full">
        <span
          style={{ width: `${stat.bar_width}%` }}
          className="block bg-orange-500 rounded-[100vw] h-[10px]"
        ></span>
      </div>
      <div title="Max Stat" className="w-[5%] pr-2 text-right">{stat.max_stat}</div>
    </div>
  );
};

export const PokemonStats = ({ baseStats }) => {
  const { cleanStatsData, totalBaseStats } = calculateStats(baseStats);

  return (
    <section id="stats-section" className=" flex flex-col gap-2">
      <Heading title={"Base Stats"} />
      <Table>
        {cleanStatsData.map((stat, index) => (
          <TableRow
            key={index}
            title={stat.name}
            className="capitalize"
            value={<TableRowValue stat={stat} />}
          />
        ))}
        <TableRow
          title={"Total"}
          value={
            <div className="flex justify-between">
              <div>{totalBaseStats}</div> <div>Max</div>
            </div>
          }
        />
      </Table>
    </section>
  );
};
