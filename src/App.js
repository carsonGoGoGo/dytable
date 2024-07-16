import "./App.css";
import { useCallback, useMemo, useState } from "react";
import DynamicTable from "./DynamicTable";

function App() {
  // 自定义的表头columns
  const columnConfig = [
    {title:'序号'},
    { title: "名称", width: "100px" },
    { title: "电子邮件" },
    { title: "电话" },
    { title: "住址" },
    { title: "年龄" },
  ];

  const initData = [
    {
      id: 1,
      name: "刘德华",
      email: "john@example.com",
      phone: "555-555-5555",
      address: "123 Main St",
      age: 30,
    },
    {
      id: 2,
      name: "张学友",
      email: "jane@example.com",
      phone: "555-555-5556",
      address: "456 Main St",
      age: 80,
    },
    {
      id: 3,
      name: "王八蛋",
      email: "jane@example.com",
      phone: "888-777-5556",
      address: "789 Main St",
      age: 100,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <DynamicTable dataSource={initData} columnConfig={columnConfig} />
      </header>
    </div>
  );
}
export default App;
