import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import SectionCoronavirus from './components/sections/Coronavirus';
import Contagion from './components/sections/Contagion';
import Symptoms from './components/sections/Symptoms';
import Prevention from './components/sections/Prevention';

import Pagination from './components/pagination/Pagination';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="blank"></div>
          <div className="content">
            <Header />
            <Slider />
            <SectionCoronavirus/>
            <Contagion/>
            <Symptoms/>
            <Prevention />
            <Pagination />
            <Header />
          </div>
        </div>
      </header>

    </div>
  );
}
export default App;
