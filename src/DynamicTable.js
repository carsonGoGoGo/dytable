import TableBody from "./components/tableBody";
import TableHeader from "./components/tableHeader";
import { useCallback, useMemo, useState } from "react";

import {
  addItem,
  deleteItem,
  sortOrder,
  updateItem,
  updateItemName,
} from "./table_data_operations";

const DynamicTable = ({ dataSource, columnConfig }) => {
  const [data, setData] = useState(dataSource);
  const [sortConfig, setSortConfig] = useState({
    type: "number",
    direction: "asc",
  });
  const [searchData, setSearchData] = useState("");

  //   对表格的数据做一些自定义的配置
  const transformColumns = (columnsConfig) => {
    console.log("sssssssssss", columnsConfig);
    const newColumns = columnConfig.map((item, index) => {
      if (item.width == null) {
        return {
          ...item,
          width: "300px",
        };
      }
      if(item.title == null){
        return {
          ...item,
          defaultName: '默认值',
        };
      }
      if (item.defaultOperations == null)
        return{
          ...item,
          operations: "删除",
        };
        return item;
    });

    console.log("eeeeeeeeeeeee", newColumns);
    return newColumns;
  };

  // 增加对表格数据名字的修改功能
  const handleOnChangeCb = useCallback(
    (field, item, value) => {
      const updatedItem = updateItem(data, field, item, value);
      setData(updatedItem);
    },
    [data]
  );

  const handleDeleteCb = useCallback(
    (id) => {
      const newData = deleteItem(data, id);
      console.log(newData);
      setData(newData);
    },
    [data]
  );

  // 缓存新增函数
  const addItemCb = useCallback(() => {
    const item = {
      id: data.length + 1,
      name: "",
      email: "",
      phone: "",
      address: "",
      age: "",
    };
    const newData = addItem(data, item);
    setData(newData);
  }, [data]);

  // 排序函数
  const sortOrderCb = useCallback(
    (config) => {
      const newData = sortOrder(data, config);
      console.log(newData);

      const newOrder = config.direction === "asc" ? "desc" : "asc";
      setSortConfig({ type: "number", direction: newOrder });
      setData(newData);
    },
    [data]
  );

  // 渲染表
  // const renderBodyMemo = useMemo(() => {
  //   if (searchData === "") {
  //     return data.map((item) => (
  //       <TableRow
  //         key={item.id}
  //         item={item}
  //         handleOnChangeCb={handleOnChangeCb}
  //         handleDeleteCb={handleDeleteCb}
  //       />
  //     ));
  //   } else {
  //     return data
  //       .filter((item) => item.name.includes(searchData))
  //       .map((item) => (
  //         <TableRow
  //           key={item.id}
  //           item={item}
  //           handleOnChangeCb={handleOnChangeCb}
  //           handleDeleteCb={handleDeleteCb}
  //         />
  //       ));
  //   }
  // }, [data, searchData]);

  const handleSearch = () => {};

  return (
    <div>
      <button onClick={addItemCb}>点击新增一行</button>
      <input
        type="text"
        value={searchData}
        placeholder="请输入搜索内容"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button onClick={handleSearch}>点击我搜索表格</button>
      <table border="1">
        <TableHeader columnConfig={transformColumns(columnConfig)} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default DynamicTable;
