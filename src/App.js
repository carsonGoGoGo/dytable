import './App.css';
import {useCallback, useMemo, useState} from "react";
import {addItem, deleteItem, sortOrder, updateItemName} from "./table_data_operations";

function App() {

    return (<div className="App">
        <header className="App-header">
            <DynamicTable/>
        </header>
    </div>);
}


const DynamicTable = () => {
    const initData = [{
        "id": 1,
        "name": "刘德华",
        "email": "john@example.com",
        "phone": "555-555-5555",
        "address": "123 Main St",
        "age": 30,
    }, {
        "id": 2,
        "name": "张学友",
        "email": "jane@example.com",
        "phone": "555-555-5556",
        "address": "456 Main St",
        "age": 80,
    }, {
        "id": 3,
        "name": "王八蛋",
        "email": "jane@example.com",
        "phone": "888-777-5556",
        "address": "789 Main St",
        "age": 100,
    }];

    const [data, setData] = useState(initData);
    const [sortConfig, setSortConfig] = useState({type: 'number', direction: 'asc'});
    const renderHeaderMemo = useMemo(() => {
        return (
            <thead>
            <tr>
                <th></th>
                <th>名字</th>
                <th>电子邮件</th>
                <th>电话号码</th>
                <th>住址</th>
                <th onClick={() => sortOrderCb({
                    type: 'number',
                    direction: sortConfig.direction === 'asc' ? 'asc' : 'desc'
                })}>年纪***
                </th>
                <th></th>
            </tr>
            </thead>
        )
    }, [sortConfig.direction]);
    const renderBodyMemo = useMemo(() => {
        return data.map((item) => {
            return (<>
                <tr key={item.id}>
                    <td></td>
                    <td><input type="text" value={item.name} onChange={(e) => handleOnChangeCb( item, e.target.value)}/>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.age}</td>
                    <th>
                        <button onClick={() => handleDeleteCb(item.id)}>点击删除一行</button>
                    </th>
                </tr>
            </>)
        });
    }, [data]);

    // 缓存删除函数
    const handleDeleteCb = useCallback((id) => {
        const newData = deleteItem(data, id);
        console.log(newData);
        setData(newData);
    }, [data]);

    // 缓存新增函数
    const addItemCb = useCallback(() => {
        const item = {
            id: data.length + 1,
            name: '',
            email: '',
            phone: '',
            address: '',
            age: '',
        }
        const newData = addItem(data, item);
        setData(newData);
    }, [data]);

    // 排序函数
    const sortOrderCb = useCallback((config) => {
        const newData = sortOrder(data, config);
        console.log(newData)

        const newOrder = config.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({type: 'number', direction: newOrder})
        setData(newData);
    }, [data])

    // 增加对表格数据的修改功能
    const handleOnChangeCb = useCallback((item, value)=>{
        const updatedItem = updateItemName(data, item, value);
        setData(updatedItem);
    },[data])

    return (<div>
        <button onClick={addItemCb}>点击新增一行</button>
        <table border="1">
            {renderHeaderMemo}
            <tbody>
            {renderBodyMemo}
            </tbody>
        </table>
    </div>)
}

export default App;
