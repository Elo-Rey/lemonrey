import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
     <Header /><Nav />
     <Routes>
      <Route path ='/' element ={ <> <Main /> </> }/>
      {/* <Route path ='/reservation' element ={ <> <Reservation /> </> }/> */}
     </Routes>

<Footer />

    </>
  );
}

export default App;
