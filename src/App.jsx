import './App.css'
import Home from './Pages/Home'
import { Carousel } from "./components/Carousel";
import { slides } from"./data/carouselData.json"; 

function App() {


  return (
   <>
   <Home/>
   <Carousel data= { slides }/>
   </>
  );
}

export default App
