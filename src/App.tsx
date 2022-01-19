import React from 'react'
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Carousel from './components/Carousel';
import { topEvent } from './static/data/topEventCarousel';
function App() {
  return (
    <div className="App">
       <Header />
       <NavigationBar />
       <Carousel data={topEvent} />
    </div>
  );
}

export default App;
