import { FormEvent, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "../App.scss";
import BookingDetails from "../components/BookingDetails";
import ContactInfo from "../components/ContactInfo";

export const Booking = () => {
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const isBookingDetailsComplete = guests > 0 && date !== null && time;
  const isFormComplete =
    isBookingDetailsComplete && name && email && phone && agree;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!guests) {
      alert("Please select the number of guests.");
      return;
    }

    if (!time || (time !== "18:00" && time !== "21:00")) {
      alert("Please select a valid time (18:00 or 21:00).");
      return;
    }

    if (!date) {
      alert("Please select a date.");
      return;
    }

    if (!agree) {
      alert("You must accept GDPR.");
      return;
    }

    const bookingData = {
      restaurantId: "67ac4ff33a79d72919fb3ad3",
      numberOfGuests: guests,
      date: date.toISOString().split("T")[0],
      time,
      customer: { name, email, phone },
    };

    fetch("https://school-restaurant-api.azurewebsites.net/booking/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong!");

        setConfirmationMessage(
          `Thank you, ${name}, for your reservation! \nYou have now a table booked for ${guests} guests on ${date?.toLocaleDateString()} at ${time}.`
        );
        setIsBooked(true);
      })
      .catch((error) => {
        console.error(error);
        alert("Could not complete the booking.");
      });
  };

  return (
    <div className="booking-container">
      {isBooked ? (
        <div className="confirmation-box">
          <h2> Booking Confirmed! </h2>
          <p>{confirmationMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <BookingDetails
            guests={guests}
            setGuests={setGuests}
            date={date}
            setDate={setDate}
            setTime={setTime}
          />

          {isBookingDetailsComplete && (
            <ContactInfo
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              agree={agree}
              setAgree={setAgree}
            />
          )}

          {isFormComplete && (
            <button type="submit" className="booking-button">
              Book now
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default Booking;
