import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import ImageTiles from './Components/ImageTiles';
import Navbar from './Components/Navbar';
import Tables from './Components/Tables';
import './index.css';

function App() {
  return (
    <>
      <div className='bg-page-image text-white'>
        <Navbar />
        <Header />
        <Tables />
        <Cards />
        <ImageTiles />
      </div>
    </>
  );
}

export default App;
