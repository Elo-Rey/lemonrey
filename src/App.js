import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';


function App() {
  return (
    <>
     <Header /><Nav />
     <Routes>
      <Route path ='/' element ={ <> <Main /> </> }/>
      <Route path ='/reservation' element ={ <> <BookingPage /> </> }/>
     </Routes>

<Footer />

    </>
  );
}

export default App;
