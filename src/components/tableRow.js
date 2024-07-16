const TableRow = ({ row }) => {
  return <tr>
    {Object.keys(row).map((key, index) => (
      <td key={index}>{row[key]}</td>
    ))}
  </tr>;
};

export default TableRow;
