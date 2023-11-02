import './BookingForm.css';
import {useState} from 'react';


function BookingForm (props){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("Date");
    const [time, setTime] = useState();
    const [guest, setGuests] = useState("1");
    const [occassion, setOccassion] = useState("Occassion");
    const [availableTimes, setAvailableTimes] = useState(["Time","17:00", "18:00","19:00", "20:00", "21:00", "22:00" ])

    const clearForm = () =>{
            setFullName("");
            setEmail("");
            setPhone("");
            setDate("Date");
            setTime(" Time");
            setGuests("1");
            setOccassion("Occassion")
    }

    const handleBooking =(e) => {
        e.preventDefault();
        alert("Reservation Booked!");
        clearForm()
    }






    return(
        <div>
            <form onSubmit={handleBooking}>
                <fieldset>
                    <h2>  Contact Details </h2>
                    <div className='Field'>
                        <label  htmlFor="fullname">
                            Full Name:<sup>*</sup>
                        </label>
                        <input
                        id='full'
                        type='text'
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                        }} placeholder='Full Name'/>

                    </div>
                    <div className='Field'>
                        <label  htmlFor="email">
                            Email:<sup>*</sup>
                        </label>
                        <input
                        id='email'
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} placeholder='Email'/>
                        </div>
                        <div className='Field'>
                        <label  htmlFor="phone">
                            Phone Number:
                        </label>
                        <input
                        id='phone'
                        type="number"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }} placeholder='Phone Number'/>
                        </div>

                </fieldset>

                <fieldset>
                <h2> Reservation Information  </h2>
                    <div className='Field'>
                        <label  htmlFor="res-date">
                            Choose date:<sup>*</sup>
                        </label>
                        <input
                        id='res-date'
                        type="date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}/>
                        </div>
                        <div className='Field'>
                        <label  htmlFor="res-time">
                            Choose time:<sup>*</sup>
                        </label>
                        <select
                        id='res-time'
                        value={time}
                        placeholder='time'
                        onChange={(e) => {
                            setTime(e.target.value);
                        }}>
                            {availableTimes.map((e, i) =><option key ={i}> {e} </option>)}
                            {/* 
                            <option value="res-time"> Time </option>
                            <option value="17:00"> 17:00 </option>
                            <option value="18:00"> 18:00 </option>
                            <option value="19:00"> 19:00 </option>
                            <option value="20:00"> 20:00 </option>
                            <option value="21:00"> 21:00 </option>
                            <option value="22:00"> 22:00 </option> */}
                        </select>

                    </div>
                    <div className='Field'>
                        <label  htmlFor="guests">
                            Number of guests:<sup>*</sup>
                        </label>
                        <input
                        type="number"
                        id='guests'
                        value={guest}
                        onChange={(e) => {
                            setGuests(e.target.value);
                        }} placeholder='1' min={1} max={10}/>
                        </div>
                        <div className='Field'>
                        <label  htmlFor="ocassion">
                            Ocassion:<sup>*</sup>
                        </label>
                        <select
                        id='occassion'
                        value={occassion}
                        onChange={(e) => {
                            setOccassion(e.target.value);
                        }}>
                            <option value=" occassion"> Ocassion </option>
                            <option value=" birthday"> Birthday </option>
                            <option value=" anniversary"> Anniversary </option>
                            <option value=" graduation"> Graduation </option>
                            <option value=" ptomotion"> Promotion </option>
                            <option value=" Reunion"> Reunion </option>
                        </select>

                    </div>
                    
                </fieldset>
                <button className='res-button' type='submit'>
                        Submit
                    </button>
            </form>
        </div>
    )
}

export default BookingForm;