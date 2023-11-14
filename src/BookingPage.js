import './BookingPage.css';
import BookingForm from './BookingForm';
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';
import image from './images/restaurant.jpg';

function BookingPage  () {

    const [date, setDate] = useState( new Date())

    function initializeTimes(date) {
        return fetchAPI( date )
    }

    function updateTimes(date){
        const dateObj = new Date(date)
        return fetchAPI(dateObj)
    }

    const navigate = useNavigate();
    function submitForm(formData){
        const isSubmitted =submitAPI(formData);

        if (isSubmitted){
            navigate("/confirmed");
        }
    }
    function back(e){
            navigate("/")

    }

    function reducer(state, action){
        let newState
        switch (action.type){
            case 'UPDATE_TIMES' :
                const newDate = new Date (action.payload);
                newState = updateTimes( newDate )
                break;

                default :
                    throw new Error()
        }
        return newState
    }

    const [ availableTimes, dispatch] =useReducer(reducer, initializeTimes(date))
    return(
    <>
    <div><button className="back" onClick={back}> <img src= "/left-arrow.svg" width={30} height={30} alt=" an arrow indicating a button to return to the previous page " className="arrow"></img> </button></div>
    <BookingForm  availableTimes={availableTimes} dispatch={ dispatch} submitForm={submitForm}/>
    </>
    )
}



export default BookingPage;