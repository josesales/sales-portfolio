import Header from './components/Header';
import Intro from './components/Intro';
import LatestWorks from './components/LatestWorks';
import './styles/main.scss'

function App() {
  return (
    <div className="App">

      <Header />

      <Intro />

      <div className="delay-on-show">
        <LatestWorks />
      </div>
    </div>
  );
}

export default App;
