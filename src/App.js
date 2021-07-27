import Companies from './components/Companies';
import Education from './components/Education';
import Header from './components/Header';
import Intro from './components/Intro';
import LatestWorks from './components/LatestWorks';
import Stack from './components/Stack';
import './styles/main.scss'

function App() {
  return (
    <div className="App">

      <Header />

      <Intro />

      <div className="delay-on-show">
        <Stack />
        <LatestWorks />
        <Companies />
        <Education />
      </div>
    </div>
  );
}

export default App;
