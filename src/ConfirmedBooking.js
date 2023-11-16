import './ConfirmedBooking.css';

export default function ConfirmedBooking() {
    return (
        <>
        <main className="confirmed">
        <div className='backdrop'>
        <img src= "/Yellowreserve.svg" width={250} height={250} alt=" a reservation card " className="reserve"></img>
            <h2 className="confirmed-heading"> Thank you! </h2>
            <p className="confirmed-paragraph"> Your reservation was successful!</p>
            <p className="confirmed-paragraph1"> A confirmation email was sent to your email address. </p>
            <p className="confirmed-paragraph2"> Please provide your name and number,  </p>
            <p className="confirmed-paragraph3"> or the QR code sent to your email at the reception. </p>
            <p className="confirmed-paragraph4"> We look forward to serving you! </p>
            </div>
        </main>
        </>
    )
}