import { useState } from "react";
import Calendar from "react-calendar";
import BookingAvailability from "./BookingAvailability";

type BookingDetailsProps = {
  guests: number;
  setGuests: (guests: number) => void;
  date: Date | null;
  setDate: (date: Date | null) => void;
  setTime: (time: string | null) => void;
};

const BookingDetails = ({
  guests,
  setGuests,
  date,
  setDate,
  setTime,
}: BookingDetailsProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="booking-section">
      <div className="section-dinner">
        <h2>DINNER</h2>
        <p>Reservate a table for up to 6 people</p>
      </div>
      <h2 className="booking-title">Book a table</h2>

      <label className="booking-label">Number of guests:</label>
      <div className="guests-buttons">
        {[...Array(6)].map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setGuests(index + 1)}
            className={`guest-button ${guests === index + 1 ? "active" : ""}`}
          >
            {index + 1} guest{index + 1 > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      <div className="calendar-container">
        <h2>Choose a date:</h2>
        <Calendar
          onChange={(newDate) => {
            setDate(newDate as Date);
            setSelectedTime(null);
            setTime(null);
          }}
          value={date}
          selectRange={false}
          view="month"
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          minDate={new Date()}
        />
      </div>

      <BookingAvailability
        date={date}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        setTime={setTime}
      />
    </div>
  );
};

export default BookingDetails;
