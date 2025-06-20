import Heading from "../Heading";
import { Table } from "../CustomTable/Table";
import { TableRow } from "../CustomTable/TableRow";

export const SectionTable = ({ heading, data, sectionClassName, rowClassName, id }) => {
  return (
    <section id={id} className={`flex flex-col gap-2 ${sectionClassName}`}>
      <Heading title={heading}/>
      <Table>
        {data.map((item, index) => (
          <TableRow className={rowClassName} title={item.key} value={item.value} key={index} />
        ))}
      </Table>
    </section>
  );
};
