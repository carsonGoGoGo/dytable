import logo from './logo.svg';
import './App.css';
import {useState} from "react";

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

    const renderHeader = () => {
        return <thead>
        <tr>
            <th></th>
            <th>名字</th>
            <th>电子邮件</th>
            <th>电话号码</th>
            <th>住址</th>
            <th onClick={() => handleSort({type: 'number', direction: sortConfig.direction === 'asc' ? 'asc' : 'desc'})}>年纪***</th>
            <th></th>
        </tr>
        </thead>
    }
    const renderBody = () => {
        return data.map((item) => {
            return (<>
                <tr key={item.id}>
                    <td></td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.age}</td>
                    <th>
                        <button onClick={() => handleDeleteRow(item.id)}>点击删除一行</button>
                    </th>
                </tr>
            </>)
        });
    }


    function handleDeleteRow(id) {
        const filter = data.filter(item => item.id !== id);
        setData(filter);
    }


    function handleAddRow() {
        const newUser = {
            id: data.length + 1, name: '', email: '', phone: '', address: '', age: '',
        }
        setData([...data, newUser]);
    }

    // 增加年纪排序功能
    function handleSort(config) {
        const {direction} = config;
        const newSortOrder = direction === 'asc' ? 'desc' : 'asc';
        console.log(newSortOrder);

        const filtered = [...data].sort((a, b) => {
            const currentSortOrder = direction === 'asc' ? 1 : -1;
            return (b.age - a.age) * currentSortOrder;
        });
        console.log(filtered);
        setData(filtered);
        setSortConfig({type: 'number', direction: newSortOrder});
    }

    return (<div>
        <button onClick={handleAddRow}>点击新增一行</button>
        <table border="1">
            {renderHeader()}
            <tbody>
            {renderBody()}
            </tbody>
        </table>
    </div>)
}

export default App;
