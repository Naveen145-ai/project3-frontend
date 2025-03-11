export default function AboutUs() {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-2xl text-center mt-5">
      <h2 className="text-4xl font-extrabold text-green-700 mb-6 uppercase">🏥 About Our Hospital</h2>
      <p className="text-lg text-gray-600 mb-6 font-medium">
        Welcome to our healthcare facility. We are dedicated to providing quality healthcare
        services, including free medical checkups and emergency services.
      </p>

      <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
        <h3 className="text-2xl font-semibold text-green-700">🚑 Free Medical Camps</h3>
        <ul className="space-y-3 mt-4">
          <li className="p-4 bg-gray-100 shadow-md rounded-lg text-gray-700 text-lg font-medium">
            ✔ Free general check-ups
          </li>
          <li className="p-4 bg-gray-100 shadow-md rounded-lg text-gray-700 text-lg font-medium">
            ✔ Blood pressure & diabetes testing
          </li>
          <li className="p-4 bg-gray-100 shadow-md rounded-lg text-gray-700 text-lg font-medium">
            ✔ Cancer screening
          </li>
          <li className="p-4 bg-gray-100 shadow-md rounded-lg text-gray-700 text-lg font-medium">
            ✔ Child vaccination programs
          </li>
        </ul>
      </div>

      <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
        <h3 className="text-2xl font-semibold text-red-600">🏥 Emergency Services</h3>
        <p className="text-lg text-gray-600 mt-3">
          We offer <span className="font-bold text-red-500">24/7 emergency</span> medical assistance.
          Call us anytime at:
          <strong className="text-red-500 text-xl"> 📞 +911 </strong>
        </p>
      </div>
    </div>
  );
}  
