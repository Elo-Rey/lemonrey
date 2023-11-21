import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './Main'
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
     <Header /><Nav />
     <Routes>
      <Route path ='/' element ={ <> <Main /> </> }/>
      <Route path ='/reservation' element ={ <> <BookingPage /> </> }/>
      <Route path ='/confirmed' element ={ <> <ConfirmedBooking /> </> }/>
      <Route path ='/menu' element ={ <> <Menu /> </> }/>
     </Routes>

<Footer />

    </>
  );
}

export default App;
