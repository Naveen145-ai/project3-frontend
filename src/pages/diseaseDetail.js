import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DiseaseDetail() {
    const [disease, setDisease] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetch(`http://localhost:7000/api/v1/disease/${id}`)
            .then((res) => res.json())
            .then((res) => setDisease(res.disease))
            .catch((error) => console.error("Error fetching disease details:", error));
    }, [id]);

    if (!disease) {
        return <div className="container text-center mt-5"><h3>Loading Disease Details...</h3></div>;
    }

    return (
        <div className="container container-fluid disease-detail-container">
            <div className="row d-flex justify-content-around">
                <div className="col-12 col-lg-5">
                    <img src={disease.images[0].image} alt={disease.name} className="disease-image" />
                </div>

                <div className="col-12 col-lg-5 disease-info">
                    <h3>{disease.name}</h3>
                    <p><strong>Description:</strong> {disease.description}</p>
                    <p><strong>Symptoms:</strong> {disease.symptoms.join(", ")}</p>
                    <p><strong>Severity:</strong> {disease.severity}</p>
                    <p><strong>Treatment:</strong> {disease.treatment}</p>
                    <p><strong>Prevention:</strong> {disease.prevention}</p>

                    {/* Online Registration Button */}
                    <button 
                        className="btn btn-primary mt-3"
                        onClick={() => navigate(`/register/${id}`)} // Navigate to Registration Page
                    >
                        Online Registration
                    </button>
                </div>
            </div>
        </div>
    );
}
