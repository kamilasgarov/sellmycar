import logo from './logo.svg';
import './App.css';
import MenuBar from './header/MenuBar'
import Search from './search/Search';
import Cards from './sections/Cards';


function App() {
  return (
    <div className="App">
        <MenuBar/> 
        <Search/>
        <Cards/>
    </div>
  );
}

export default App;
