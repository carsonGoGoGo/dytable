const TableHeader = ({columnConfig}) => {
  console.log(columnConfig);
  return (
    <thead>
      <tr>
        {columnConfig.map((item, index) => (
          <th width={item.width}>{item.title}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHeader;
