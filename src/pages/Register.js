import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Register() {
    const { id } = useParams(); // Get disease ID from URL
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        healthCamp: "",
        emergencyService: false,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); console.log(formData);
        
        try {
            const response = await fetch("http://localhost:7000/api/v1/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, disease: id }), // Attach disease ID
            });

            const data = await response.json();
            if (response.ok) {
                alert("Registration successful!");
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="register-container">
            <h2 className="text-center">Online Registration</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" required value={formData.name} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" required value={formData.phone} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" name="address" className="form-control" required value={formData.address} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Health Camp</label>
                    <input type="text" name="healthCamp" className="form-control" required value={formData.healthCamp} onChange={handleChange} />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" name="emergencyService" className="form-check-input" checked={formData.emergencyService} onChange={handleChange} />
                    <label className="form-check-label">Emergency Service</label>
                </div>

                <button type="submit" className="btn btn-success">Submit Registration</button>
            </form>
        </div>
    );
}
