import './App.css';
import { movieData } from './data';
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
        {
          movieData.map(el =>{
            if(el.backdrop_path != null){
              return(
                <Card 
                backdrop_path={el.backdrop_path} 
                title={el.title} 
                release_date={el.release_date}
                vote_average={el.vote_average}
                overview={el.overview}
                />
                )
            }
          })
        }
    </div>
  );
}

export default App;
