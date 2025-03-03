import React from "react";

export default function Location() {
  return (
    <div className="container mt-4 text-center">
      <h1 className="heading">Find Our Locations</h1>

      {/* Embedded Map with Multiple Locations */}
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1UdT_d2rxKWoRLB1nQV3AwJ3ZVpRtifg&ll=11.935906518468977%2C78.54095781371076&z=7"
        width="50%"
        height="500"
        style={{
          border: 0,
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - Multiple Locations"
      ></iframe>
    </div>
  );
}
