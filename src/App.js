
import './App.css';
import { Bookcard1 } from './Bookcard1';
import { BookCard2 } from './BookCard2';
import { Carousel } from './Carousel';
import { Features } from './Features';
import Footer from './Footer';
import { Gallery } from './Gallery';
import { Navbar } from './Navbar';
function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Carousel/>
     <Bookcard1/>
     <Features/>
     <BookCard2/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
