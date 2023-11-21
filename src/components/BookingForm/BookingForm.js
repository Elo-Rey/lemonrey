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
        occassion: "Birthday",
        requests:""
    })



     const handleFormChange = (event) => {
        const { name, value }  = event.target
        setFormData((prevFormData)=> ({
            ...prevFormData,
            [name]:value
        }))
     }

   
    const clearForm =() => {
        setFormData({
        firstName: "",
        lastName: "",
        email:"",
        phoneNumber:"",
        date:"",
        time: "00:00",
        guests: "1",
        occasion: "Birthday",
        requests:""
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
        
        <div  >
            {/* < >style={{ backgroundImage: `url(${image})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize:"contain", height:1500, width:1500 
        }} </> */}
            <form className="res-form" onSubmit={handleBooking}>
                <fieldset className='res-set'>
                    <h2 className='top'>  Contact Details </h2>
                    <hr/>
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
                    <div className='Field2'>
                        <label  htmlFor="lastname">
                            Last Name:<sup>*</sup>
                        </label>
                        <input
                        id='last'
                        type='text'
                        name ="lastName"
                        value={formData.lasttName}
                        onChange={handleFormChange} 
                        placeholder= 'eg Doe' required/>

                    </div>
                    <div className='Field3'>
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
                        <div className='Field4'>
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
                        /* pattern='[0-9]{4}-[0-9]{3}-[0-9]{4}' *//>

                        </div>

                </fieldset>

                <fieldset className='res-set2'>
                <h2 className='top2'> Reservation Information  </h2>
                <hr className='top3'/>
                    <div className='Field5'>
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
                        <div className='Field6'>
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
                    <div className='Field7'>
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
                        <div className='Field8'>
                        <label  htmlFor="occasion">
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
                    <div className='Field-area'>
                        <label  htmlFor="special-requests">
                            Special Requests:
                        </label>
                        <input
                        id='requests'
                        type="textarea"
                        rows={5}
                        columns ={200}
                        name ="requests"
                        value={formData.requests}
                        onChange={handleFormChange} 
                        placeholder= 'what else should we know?' />
                        </div>
                        <button className='res-button' type='submit' value="Reserve">
                        Submit
                    </button>
                </fieldset>
                
            </form>
            
        </div>
    )
}

