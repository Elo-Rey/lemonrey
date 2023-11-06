import './BookingForm.css';
import {useState} from 'react';


export default function BookingForm ({availableTimes, dispatch, submitForm}){

    const [formData, setFormData] =useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber:"",
        date:"",
        time: "00:00",
        guests: "1",
        occassion: "Birthday"
    })


   /*  const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("Date");
    const [time, setTime] = useState();
    const [guest, setGuests] = useState("1");
    const [occassion, setOccassion] = useState("Occassion");
    const [availableTimes, setAvailableTimes] = useState(["Time","17:00", "18:00","19:00", "20:00", "21:00", "22:00" ]) */


    


     const handleFormChange = (event) => {
        const { name, value }  = event.target
        setFormData((prevFormData)=> ({
            ...prevFormData,
            [name]:value
        }))
     }

   /*  const clearForm = () =>{
            setFullName("");
            setEmail("");
            setPhone("");
            setDate("Date");
            setTime(" Time");
            setGuests("1");
            setOccassion("Occassion")
    } */
    const clearForm =() => {
        setFormData({
        firstName: "",
        lastName: "",
        email:"",
        phoneNumber:"",
        date:"",
        time: "00:00",
        guests: "1",
        occasion: "Birthday"
        })
    }

    const handleDateChange = async (event) => {
        const { name, value} = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
        dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleBooking =(e) => {
        e.preventDefault();
        alert("Reservation Booked!");
        submitForm(formData)
        clearForm()
    }
    const currentDate = new Date().toISOString().split("T")[0];
    const options = availableTimes.map(time => <option key={time}>{time}</option>)

    return(
        <div>
            <form onSubmit={handleBooking}>
                <fieldset>
                    <h2>  Contact Details </h2>
                    <div className='Field'>
                        <label  htmlFor="firstname">
                            First Name:<sup>*</sup>
                        </label>
                        <input
                        id='first'
                        type='text'
                        name ="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        placeholder= 'eg John' required/>

                    </div>
                    <div className='Field'>
                        <label  htmlFor="lastname">
                            Last Name:<sup>*</sup>
                        </label>
                        <input
                        id='Last'
                        type='text'
                        name ="lastName"
                        value={formData.lasttName}
                        onChange={handleFormChange} 
                        placeholder= 'eg Doe' required/>

                    </div>
                    <div className='Field'>
                        <label  htmlFor="email">
                            Email:<sup>*</sup>
                        </label>
                        <input
                        id='email'
                        type="email"
                        name ="email"
                        value={formData.email}
                        onChange={handleFormChange} 
                        placeholder= 'eg JohnDoe@email.com' required/>

                        </div>
                        <div className='Field'>
                        <label  htmlFor="phone">
                            Phone Number:
                        </label>
                        <input
                        id='phone'
                        type="text"
                        name ="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleFormChange} 
                        placeholder= '0123-456-2890' 
                        pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}'/>

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
                        name ="date"
                        value={formData.date}
                        onChange={handleDateChange}
                         required
                         min= {currentDate}/>

                        </div>
                        <div className='Field'>
                        <label  htmlFor="res-time">
                            Choose time:<sup>*</sup>
                        </label>
                        <select
                        id='res-time'
                        name ="time"
                        value={formData.time}
                        onChange={handleFormChange}
                         min={currentDate}
                         required>
                            {options}
                        </select>

                    </div>
                    <div className='Field'>
                        <label  htmlFor="guests">
                            Number of guests:<sup>*</sup>
                        </label>
                        <input
                        type="number"
                        id='guests'
                        name ="guests"
                        value={formData.guests}
                        onChange={handleFormChange}
                        placeholder= '1' 
                        min="1"
                        max="10"
                        required/>
                        
                        </div>
                        <div className='Field'>
                        <label  htmlFor="occassion">
                            Ocassion:<sup>*</sup>
                        </label>
                        <select
                        id='occasion'
                        name ="occasion"
                        value={formData.occasion}
                        onChange={handleFormChange}
                         required>
                            <option > Occasion </option>
                            <option > Birthday </option>
                            <option > Anniversary </option>
                            <option > Graduation </option>
                            <option > Promotion </option>
                            <option > Reunion </option>
                        </select>

                    </div>
                    
                </fieldset>
                <button className='res-button' type='submit' value="Reserve">
                        Submit
                    </button>
            </form>
        </div>
    )
}

