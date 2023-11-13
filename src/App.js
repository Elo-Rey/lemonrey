import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';


function App() {
  return (
    <>
     <Header /><Nav />
     <Routes>
      <Route path ='/' element ={ <> <Main /> </> }/>
      <Route path ='/reservation' element ={ <> <BookingPage /> </> }/>
      <Route path ='/confirmed' element ={ <> <ConfirmedBooking /> </> }/>
     </Routes>

<Footer />

    </>
  );
}

export default App;
