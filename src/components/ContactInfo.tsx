type ContactInfoProps = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  agree: boolean;
  setAgree: (agree: boolean) => void;
};

const ContactInfo = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  agree,
  setAgree,
}: ContactInfoProps) => {
  return (
    <div className="booking-section">
      <label className="booking-label">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="booking-input"
      />

      <label className="booking-label">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="booking-input"
      />

      <label className="booking-label">Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="booking-input"
      />

      <label className="gdpr-checkbox">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        I agree to the terms and conditions.
      </label>
    </div>
  );
};

export default ContactInfo;
