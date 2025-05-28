import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MAX_TABLES = 15;

type BookingAvailabilityProps = {
  date: Date | null;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  setTime: (time: string) => void;
};

const BookingAvailability = ({
  date,
  selectedTime,
  setSelectedTime,
  setTime,
}: BookingAvailabilityProps) => {
  const [bookings, setBookings] = useState<{ time: string; guests: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!date) return;

    const fetchBookings = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://school-restaurant-api.azurewebsites.net/booking/restaurant/67ac4ff33a79d72919fb3ad3`
        );

        if (!response.ok) throw new Error("Failed to fetch bookings");

        const data = await response.json();

        const filteredBookings = data.filter((booking: any) => {
          const bookingDate = new Date(booking.date)
            .toISOString()
            .split("T")[0];
          return bookingDate === date.toISOString().split("T")[0];
        });

        setBookings(filteredBookings);
      } catch (err) {
        setError("Error loading bookings");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [date]);

  useEffect(() => {
    setSelectedTime(null);
  }, [date, setSelectedTime]);

  const checkAvailability = (time: string) => {
    const totalBookings = bookings.filter(
      (booking) => booking.time === time
    ).length;
    return totalBookings < MAX_TABLES;
  };

  const handleTimeSelection = (time: string) => {
    if (checkAvailability(time)) {
      setSelectedTime(time);
      setTime(time);
    }
  };

  return (
    <div className="availability">
      <h3>Available times:</h3>

      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#007bff" size={25} />
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="time-selection">
          {["18:00", "21:00"].map((time) => {
            const isAvailable = checkAvailability(time);

            return (
              <button
                key={time}
                type="button"
                className={`time-button ${isAvailable ? "" : "fully-booked"} ${
                  selectedTime === time ? "active" : ""
                }`}
                onClick={() => handleTimeSelection(time)}
                disabled={!isAvailable}
              >
                {time} {isAvailable ? " - Book now" : " - Fully booked"}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookingAvailability;
