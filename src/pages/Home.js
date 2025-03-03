import { Fragment } from 'react';
import ProductCard from '../components/productCard';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [diseases, setDiseases] = useState([]); 
  const [searchParams] = useSearchParams(); // for storing API data
  const [details, setDetails] = useState(null); // State for paragraph and image

  useEffect(() => {
    // Fetch disease data
    fetch("http://localhost:7000/api/v1/diseases?" + searchParams)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.diseases); // Debugging: Check if products have unique IDs
        setDiseases(res.diseases);
      });

    // Fetch paragraph and image data
    fetch("http://localhost:7000/api/v1/details")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.details); // Debugging: Check API response
        if (res.success && res.details.length > 0) {
          setDetails(res.details[0]); // Assuming only one detail entry is needed
        }
      });
  }, [searchParams]);

  return (
    <Fragment>
      

      <section id="products" className="container mt-5">
        <div className="row">
          {diseases.map((disease) => (
            <ProductCard key={disease._id} disease={disease} />
          ))}
        </div>
      </section>

      {/* New Section for Paragraph and Image */}
      {details && (
        <section id="details" className="container mt-5">
          <h2>About Our Services</h2>
          <p style={{ textAlign: 'justify', lineHeight: '1.8', fontSize: '1.1rem' }}>
            {details.paragraph}
          </p> {/* Display paragraph from API */}
        </section>
      )}
    </Fragment>
  );
}
