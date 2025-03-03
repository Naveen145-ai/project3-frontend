export default function ContactUs() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-2xl text-center mt-5">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-6 uppercase">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-6 font-medium">
        If you need assistance, feel free to reach out to us.
      </p>

      <div className="p-5 bg-white shadow-md rounded-lg mt-4">
        <h3 className="text-2xl font-semibold text-blue-700 flex items-center justify-center">
          📞 <span className="ml-2">Phone: +1 234 567 890</span>
        </h3>
      </div>

      <div className="p-5 bg-white shadow-md rounded-lg mt-4">
        <h3 className="text-2xl font-semibold text-blue-700 flex items-center justify-center">
          📧 <span className="ml-2">Email: support@yourproject.com</span>
        </h3>
      </div>

      <div className="p-5 bg-white shadow-md rounded-lg mt-4">
        <h3 className="text-2xl font-semibold text-blue-700 flex items-center justify-center">
          📍 <span className="ml-2">123 HealthCare Street, City, Country</span>
        </h3>
      </div>
    </div>
  );
}
