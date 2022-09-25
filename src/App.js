import Header from './components/Header';
import Info from './components/Info';
import ProfileImg from './components/ProfileImg';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProfileImg></ProfileImg>
      <Skills></Skills>

      <Info />
    </div >
  );
}

export default App;
