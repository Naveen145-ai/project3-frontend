import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function Header() {
  const [vaccineData, setVaccineData] = useState([]);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/vaccines")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched vaccine data:", data);
        setVaccineData(data);
      })
      .catch((error) => console.error("Error fetching vaccines:", error));

    fetchNotifications();
  }, []);

  // Function to fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/notifications");
      const data = await response.json();
      console.log("Fetched notifications:", data);
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Reset function
  const resetSelection = () => {
    setSelectedAgeGroup(null);
    setSelectedAge(null);
  };

  return (
    <Navbar bg="primary" expand="lg" className="p-3 flex-column align-items-center">
      <div className="container d-flex align-items-center justify-content-between w-100">
        {/* Logo Section */}
        <Navbar.Brand>
          <Link to="/">
            <img width="150px" src="/images/diseases/logo.jpg" alt="Logo" />
          </Link>
        </Navbar.Brand>

        {/* Search Bar */}
        <div className="search-bar w-50">
          <Search />
        </div>

        {/* Notification Bell */}
        <Nav>
          <NavDropdown title="  🔔 Health Camp Notifications" className="text-white font-weight-bold">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NavDropdown.Item key={notification._id}>
                  <div>
                    <div style={{ fontWeight: "bold", color: "#000" }}>
                      {notification.title}
                    </div>
                    <div style={{ fontSize: "0.9rem" }}>
                      {notification.message}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "gray" }}>
                      {new Date(notification.date).toLocaleDateString()}
                    </div>
                  </div>
                </NavDropdown.Item>
              ))
            ) : (
              <NavDropdown.Item>No notifications available</NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>

        {/* Contact Us */}
        <Nav>
          <Nav.Link as={Link} to="/contact" className="text-white font-weight-bold">
            📞 Contact Us
          </Nav.Link>
        </Nav>

        {/* Emergency Call */}
        <Nav>
          <Nav.Link href="tel:+911" className="text-white font-weight-bold">
            🚨 Emergency: 911
          </Nav.Link>
        </Nav>

        {/* About Us */}
        <Nav>
          <Nav.Link as={Link} to="/about" className="text-white font-weight-bold">
            🏥 About Us
          </Nav.Link>
        </Nav>

        <Nav>
  <Nav.Link as={Link} to="/location" className="text-white font-weight-bold">
    📍 Our Location
  </Nav.Link>
</Nav>


        {/* Vaccine List Dropdown */}
        <NavDropdown title="💉 Vaccine List" className="bg-light">
          {vaccineData.length > 0 ? (
            vaccineData.map((group) => (
              <NavDropdown.Item
                key={group.age_group}
                onClick={() => {
                  setSelectedAgeGroup(group);
                  setSelectedAge(null);
                }}
              >
                {group.age_group}
              </NavDropdown.Item>
            ))
          ) : (
            <NavDropdown.Item disabled>Loading vaccines...</NavDropdown.Item>
          )}
        </NavDropdown>
      </div>

      {/* Show Selected Age Group Below */}
      {selectedAgeGroup && (
        <div className="container mt-3 text-center">
          <h4 className="text-white">{selectedAgeGroup.age_group}</h4>
          <div className="d-flex flex-wrap justify-content-center">
            {selectedAgeGroup.ages?.map((age) => (
              <button
                key={age.age}
                className="btn btn-light m-2"
                onClick={() => setSelectedAge(age)}
              >
                {age.age}
              </button>
            ))}
          </div>

          {/* Show Vaccines Below */}
          {selectedAge && (
            <div className="mt-3 p-3 bg-white rounded shadow">
              <h5 className="text-primary">{selectedAge.age}</h5>
              <ul className="list-group">
                {selectedAge.vaccines?.map((vaccine) => (
                  <li key={vaccine.name} className="list-group-item">
                    <strong>{vaccine.name}</strong>: {vaccine.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reset Button */}
          <button className="btn btn-danger mt-3" onClick={resetSelection}>
            🔄 Reset Selection
          </button>
        </div>
      )}
    </Navbar>
  );
}
