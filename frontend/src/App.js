import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-component">
        <Body />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
