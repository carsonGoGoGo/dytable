import TableRow from "./tableRow";
const TableBody = ({ data, handleOnChangeCb, handleDeleteCb }) => {
  return data.map((row) => <TableRow key={row.key} row={row}></TableRow>);
};

export default TableBody;
