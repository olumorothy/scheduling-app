import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimeZoneSelect from "react-timezone-select";

export default function Dashboard() {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("_myEmail");
    navigate("/");
  };

  return (
    <div>
      <nav className="dashboard__nav">
        <h2>Book Me</h2>
        <button onClick={handleLogout} className="logout__btn">
          {" "}
          Log out
        </button>
      </nav>
      <main className="dashboard__main">
        <h2 className="dashboard__heading">Select your availability</h2>

        <div className="timezone__wrapper">
          <p>Pick your timezone</p>
          <TimeZoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
      </main>
    </div>
  );
}
