import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="blank"></div>
          <div className="content">
            <Header />
            <Slider />
          </div>
        </div>
      </header>

    </div>
  );
}
export default App;
