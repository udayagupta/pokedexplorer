export const TableRow = ({ title, value, ...props }) => {
    return (
      <tr className={`custom-table-row border-b border-slate-700 ${props.className}`}>
        <th className="text-left px-4 py-2 bg-slate-800 text-slate-200 font-semibold w-1/2">
          {title}
        </th>
        <td className="px-4 py-2 bg-slate-950 text-slate-100">{value}</td>
      </tr>
    );
};