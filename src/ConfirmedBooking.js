'./ConfirmedBooking.css';

export default function ConfirmedBooking() {
    return (
        <>
        <main className=" confirmed">
        <img src= "/Yellowreserve.svg" width={250} height={250} alt=" a reservation card " className="reserve"></img>
            <h2 className=" confirmed-heading"> Thank you! </h2>
            <p className=" confirmed-paragraph"> your reservation was successful. </p>
            <p className=" confirmed-paragraph"> Please provide your name and number, or the QR code sent to your email at the reception upon arrival. </p>
            <p className=" confirmed-paragraph"> We look forward to serve you! </p>
        
        </main>
        </>
    )
}