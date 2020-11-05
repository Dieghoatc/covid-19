import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import SectionCoronavirus from './components/sections/Coronavirus';
import Contagion from './components/sections/Contagion';
import Symptomps from './components/sections/Symptomps';
import Should from './components/sections/Should';

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
            <Symptomps/>
            <Should />
          </div>
        </div>
      </header>

    </div>
  );
}
export default App;
