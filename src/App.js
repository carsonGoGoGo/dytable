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
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "555-555-5555",
        "address": "123 Main St",
        "age": 30,
    }, {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane@example.com",
        "phone": "555-555-5556",
        "address": "456 Main St",
        "age": 33,
    }, {
        "id": 3,
        "name": "Jim Smith",
        "email": "jane@example.com",
        "phone": "888-777-5556",
        "address": "789 Main St",
        "age": 34,
    }];

    const [data, setData] = useState(initData);


    function handleDeleteRow(id) {

        console.log(id);
        const filter = data.filter(item => item.id !== id);
        setData(filter);
    }


    function handleAddRow() {
        const newUser = {
            id: data.length + 1,
            name: '',
            email: '',
            phone: '',
            address: '',
            age: '',
        }
        setData([...data, newUser]);
    }

    return (<div>
        <button onClick={handleAddRow}>点击新增一行</button>
        <table border="1">
            <thead>
            <tr>
                <th></th>
                <th>名字</th>
                <th>电子邮件</th>
                <th>电话号码</th>
                <th>住址</th>
                <th>年纪</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (<tr key={item.id}>
                <td></td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <th>
                    <button onClick={() => handleDeleteRow(item.id)}>点击删除一行
                    </button>
                </th>

            </tr>))}

            </tbody>

        </table>

    </div>)
}

export default App;
