import './App.css';
import {shopData} from "./data";
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      {
        shopData.map((el) => {
          return (
            <Card imgPath={el.imgPath} post={el.post} title={el.title} sale={el.sale} price={el.price}/>
          )
        })
      }
    </div>
  );
}

export default App;
