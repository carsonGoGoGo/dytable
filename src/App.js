import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <DynamicTable />
      </header>
    </div>
  );
}


const DynamicTable = () =>{
    return(
        <div>
            <table border="1">
                <tr>
                    <th></th>
                    <th>星期一</th>
                    <th>星期二</th>
                    <th>星期三</th>
                    <th>星期四</th>
                    <th>星期五</th>
                </tr>
                <tr>
                    <td>上午第一节课</td>
                    <td>语文课</td>
                    <td>数学课</td>
                    <td>生物课</td>
                    <td>法语课</td>
                    <td>西班牙课程</td>
                </tr>
                <tr>
                    <td>上午第二节课</td>
                    <td>语文课</td>
                    <td>数学课</td>
                    <td>生物课</td>
                    <td>法语课</td>
                    <td>西班牙课程</td>
                </tr>

                <tr>
                    <td>上午第三节课</td>
                    <td>语文课</td>
                    <td>数学课</td>
                    <td>生物课</td>
                    <td>法语课</td>
                    <td>西班牙课程</td>
                </tr>
                <tr>
                    <td>第一节课</td>
                    <td>语文课</td>
                    <td>数学课</td>
                    <td>生物课</td>
                    <td>法语课</td>
                    <td>西班牙课程</td>
                </tr>
            </table>
        </div>
    )
}

export default App;
