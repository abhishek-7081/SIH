// import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout";
// // Import the CSS file
// import "../styles/HospitalForm.css";

// // new
// import { useNavigate } from "react-router-dom";
// const DoctorList = ({ doctor }) => {
//   const navigate = useNavigate();

//   // newend

//   const HospitalForm = () => {
//     const [area, setArea] = useState("");
//     const [hospital, setHospital] = useState("");
//     const [beds, setBeds] = useState([false, false, false, false, false]); // 5 beds with boolean values
//     const [doctor, setDoctor] = useState([]); // Array to store doctor

//     useEffect(() => {
//       // Fetch areas, hospitals, and doctor from the backend
//       // For example purposes, we'll mock the doctor list
//       setDoctor([
//         { id: 1, name: "Dr. Smith", available: true },
//         { id: 2, name: "Dr. Johnson", available: false },
//         { id: 3, name: "Dr. Lee", available: true },
//       ]);
//     }, []);

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // const formData = { area, hospital, beds };

//       // Submit data to backend
//     };

//     // Function to toggle bed state
//     const toggleBed = (index) => {
//       setBeds((prevBeds) =>
//         prevBeds.map((bed, i) => (i === index ? !bed : bed))
//       );
//     };

//     // Function to toggle doctor's availability (for demonstration purposes)
//     const toggleDoctor = (index) => {
//       setDoctor((prevDoctor) =>
//         prevDoctor.map((doctor, i) =>
//           i === index ? { ...doctor, available: !doctor.available } : doctor
//         )
//       );
//     };

//     return (
//       <Layout>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Area:</label>
//             <select value={area} onChange={(e) => setArea(e.target.value)}>
//               <option value="Area 1">Area 1</option>
//               <option value="Area 2">Area 2</option>
//             </select>
//           </div>

//           <div>
//             <label>Hospital:</label>
//             <select value={hospital} onChange={(e) => setHospital(e.target.value)}>
//               <option value="Hospital A">Hospital A</option>
//               <option value="Hospital B">Hospital B</option>
//             </select>
//           </div>

//           {/* New Section for Doctor */}
//           <div>
//             <label>Available Doctor:</label>
//             <div className="doctor-container">
//               {doctor.map((doctor, index) => (
//                 <div
//                   key={doctor.id}
//                   className={`doctor ${doctor.available ? "available" : "unavailable"}`}
//                   onClick={() => toggleDoctor(index)}
//                 >
//                   {doctor.name} - {doctor.available ? "Available" : "Unavailable"}
//                 </div>
//               ))}
//             </div>
//           </div>


//           {/* new */}
//           <>
//             <div
//               className="card m-2"
//               style={{ cursor: "pointer" }}
//               onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
//             >
//               <div className="card-header">
//                 Dr. {doctor.firstName} {doctor.lastName}
//               </div>
//               <div className="card-body">
//                 <p>
//                   <b>Specialization</b> {doctor.specialization}
//                 </p>
//                 <p>
//                   <b>Experience</b> {doctor.experience}
//                 </p>
//                 <p>
//                   <b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation}
//                 </p>
//                 <p>
//                   <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
//                 </p>
//               </div>
//             </div>
//           </>
//           {/* new end */}

//           <div>
//             <label>Beds:</label>
//             <div className="beds-container">
//               {beds.map((bed, index) => (
//                 <div
//                   key={index}
//                   className={`bed ${bed ? "true" : "false"}`}
//                   onClick={() => toggleBed(index)}
//                 >
//                   {bed ? "Occupied" : "Available"}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button className="btn bg-success" type="submit">
//             Submit
//           </button>
//         </form>
//       </Layout>
//     );
//   };
// };
// export default DoctorList;








// import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout";
// import DoctorList from "../components/DoctorList"; // Import DoctorList component
// // Import the CSS file
// import "../styles/HospitalForm.css";


// const HospitalForm = () => {
//   const [area, setArea] = useState("");
//   const [hospital, setHospital] = useState("");
//   const [beds, setBeds] = useState([false, false, false, false, false]); // 5 beds with boolean values
//   const [doctor, setDoctor] = useState([]); // Array to store doctor

//   useEffect(() => {
//     // Fetch areas, hospitals, and doctor from the backend
//     // For example purposes, we'll mock the doctor list
//     setDoctor([
//       { id: 1, name: "Dr. Smith", available: true },
//       { id: 2, name: "Dr. Johnson", available: false },
//       { id: 3, name: "Dr. Lee", available: true },
//     ]);
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const formData = { area, hospital, beds };

//     // Submit data to backend
//   };

//   // Function to toggle bed state
//   const toggleBed = (index) => {
//     setBeds((prevBeds) =>
//       prevBeds.map((bed, i) => (i === index ? !bed : bed))
//     );
//   };

//   // Function to toggle doctor's availability (for demonstration purposes)
//   const toggleDoctor = (index) => {
//     setDoctor((prevDoctor) =>
//       prevDoctor.map((doctor, i) =>
//         i === index ? { ...doctor, available: !doctor.available } : doctor
//       )
//     );
//   };

//   return (
//     <Layout>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Area:</label>
//           <select value={area} onChange={(e) => setArea(e.target.value)}>
//             <option value="Area 1">Area 1</option>
//             <option value="Area 2">Area 2</option>
//           </select>
//         </div>

//         <div>
//           <label>Hospital:</label>
//           <select value={hospital} onChange={(e) => setHospital(e.target.value)}>
//             <option value="Hospital A">Hospital A</option>
//             <option value="Hospital B">Hospital B</option>
//           </select>
//         </div>

//         {/* New Section for Doctor */}
//         <div>
//           <label>Available Doctor:</label>
//           <div className="doctor-container">
//             {doctor.map((doctor, index) => (
//               <div
//                 key={doctor.id}
//                 className={`doctor ${doctor.available ? "available" : "unavailable"}`}
//                 onClick={() => toggleDoctor(index)}
//               >
//                 {doctor.name} - {doctor.available ? "Available" : "Unavailable"}
//               </div>
//             ))}
//           </div>
//         </div>



//         <div>
//           <label>Beds:</label>
//           <div className="beds-container">
//             {beds.map((bed, index) => (
//               <div
//                 key={index}
//                 className={`bed ${bed ? "true" : "false"}`}
//                 onClick={() => toggleBed(index)}
//               >
//                 {bed ? "Occupied" : "Available"}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="btn bg-success" type="submit">
//           Submit
//         </button>
//       </form>
//     </Layout>
//   );
// };

// export default HospitalForm;

// import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout";
// import DoctorList from "../components/DoctorList"; // Import DoctorList component
// import "../styles/HospitalForm.css";

// const HospitalForm = () => {
//   const [area, setArea] = useState([]); // Initialize as an empty array to hold multiple areas
//   const [hospital, setHospital] = useState([]); // Initialize as an empty array to hold multiple hospitals
//   const [beds, setBeds] = useState([false, false, false, false, false, false, true, false]); // Bed data remains the same
//   const [doctor, setDoctor] = useState([]); // Doctor data also remains the same


//   useEffect(() => {
//     // Set areas data
//     setArea([
//       {
//         _id: 1,
//         name: "Area 1",
//       },
//       {
//         _id: 2,
//         name: "Area 2",
//       },
//       {
//         _id: 3,
//         name: "Area 3",
//       },
//       {
//         _id: 4,
//         name: "Area 4",
//       },
//       {
//         _id: 5,
//         name: "Area 5",
//       },
//     ]);

//     // Set hospitals data
//     setHospital([
//       {
//         _id: 1,
//         name: "Hospital A",
//         area: "Area 1",
//       },
//       {
//         _id: 2,
//         name: "Hospital B",
//         area: "Area 2",
//       },
//       {
//         _id: 3,
//         name: "Hospital C",
//         area: "Area 3",
//       },
//       {
//         _id: 4,
//         name: "Hospital D",
//         area: "Area 4",
//       },
//     ]);

//     // Set doctors data
//     setDoctor([
//       {
//         _id: 1,
//         firstName: "John",
//         lastName: "Doe",
//         specialization: "Cardiologist",
//         experience: "10 years",
//         feesPerCunsaltation: "$100",
//         timings: ["10:00 AM", "4:00 PM"],
//       },
//       {
//         _id: 2,
//         firstName: "Jane",
//         lastName: "Smith",
//         specialization: "Dermatologist",
//         experience: "8 years",
//         feesPerCunsaltation: "$80",
//         timings: ["11:00 AM", "5:00 PM"],
//       },
//       {
//         _id: 3,
//         firstName: "Michael",
//         lastName: "Johnson",
//         specialization: "Pediatrician",
//         experience: "12 years",
//         feesPerCunsaltation: "$90",
//         timings: ["9:00 AM", "3:00 PM"],
//       },
//     ]);
//   }, []); // Empty dependency array to ensure this runs only once on component mount


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Submit form data to backend
//   };

//   // Function to toggle bed state
//   const toggleBed = (index) => {
//     setBeds((prevBeds) =>
//       prevBeds.map((bed, i) => (i === index ? !bed : bed))
//     );
//   };

//   return (
//     <Layout>
//       <form className="formbula" onSubmit={handleSubmit}>

//         <div>
//           <label>Area:</label>
//           <select value={area} onChange={(e) => setArea(e.target.value)}>
//             <option value="">Select Area</option> {/* Placeholder option */}
//             {area.map((areaItem) => (
//               <option key={areaItem._id} value={areaItem.name}>
//                 {areaItem.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Hospital:</label>
//           <select value={hospital} onChange={(e) => setHospital(e.target.value)}>
//             <option value="">Select Hospital</option> {/* Placeholder option */}
//             {hospital.map((hospitalItem) => (
//               <option key={hospitalItem._id} value={hospitalItem.name}>
//                 {hospitalItem.name}
//               </option>
//             ))}
//           </select>
//         </div>



//         {/* Doctor Section */}
//         <div>
//           <label>Doctors:</label>
//           <div className="doctor-container bula">
//             {doctor.map((doc) => (
//               <DoctorList key={doc._id} doctor={doc} />
//             ))}
//           </div>
//         </div>

//         <div>
//           <label>Beds:</label>
//           <div className="beds-container">
//             {beds.map((bed, index) => (
//               <div
//                 key={index}
//                 className={`bed ${bed ? "true" : "false"}`}
//                 onClick={() => toggleBed(index)}
//               >
//                 {bed ? "Occupied" : "Available"}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="btn bg-success" type="submit">
//           Submit
//         </button>
//       </form>
//     </Layout>
//   );
// };

// export default HospitalForm;








// import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout";
// import DoctorList from "../components/DoctorList";
// import "../styles/HospitalForm.css";

// const HospitalForm = () => {
//   // State to hold selected values and data
//   const [selectedArea, setSelectedArea] = useState("");
//   const [selectedHospital, setSelectedHospital] = useState("");
//   const [selectedDoctor, setSelectedDoctor] = useState(""); // State for selected doctor
//   const [areaOptions, setAreaOptions] = useState([]);
//   const [hospitalOptions, setHospitalOptions] = useState([]);
//   const [beds, setBeds] = useState([]);

//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     // Set options for areas
//     setAreaOptions([
//       { _id: 1, name: "Agra" },
//       { _id: 2, name: "Delhi" },
//       { _id: 3, name: "Lucknow" },
//       { _id: 4, name: "Etawa" },
//       { _id: 5, name: "Awadh" },
//     ]);

//     // Set options for hospitals with areas they cover
//     setHospitalOptions([
//       { _id: 1, name: "Hospital Orion", areas: ["Delhi", "Lucknow", "Agra"] },
//       { _id: 2, name: "Hospital Basu", areas: ["Delhi"] },
//       { _id: 3, name: "Hospital Crist", areas: ["Delhi", "Agra", "Etawa"] },
//       { _id: 4, name: "Hospital Dofu", areas: ["Etawa", "Agra"] },
//       { _id: 5, name: "Hospital Awadh", areas: ["Awadh", "Lucknow"] },
//     ]);

//     // Mock data for doctors with multiple doctors per hospital
//     setDoctors([
//       {
//         _id: 1,
//         firstName: "John",
//         lastName: "Doe",
//         specialization: "Cardiologist",
//         experience: "10 years",
//         feesPerConsultation: "$100",
//         timings: ["10:00 AM", "4:00 PM"],
//         hospital: "Hospital Orion",
//       },
//       {
//         _id: 2,
//         firstName: "Jane",
//         lastName: "Smith",
//         specialization: "Dermatologist",
//         experience: "8 years",
//         feesPerConsultation: "$80",
//         timings: ["11:00 AM", "5:00 PM"],
//         hospital: "Hospital Basu",
//       },
//       {
//         _id: 3,
//         firstName: "Michael",
//         lastName: "Johnson",
//         specialization: "Pediatrician",
//         experience: "12 years",
//         feesPerConsultation: "$90",
//         timings: ["9:00 AM", "3:00 PM"],
//         hospital: "Hospital Crist",
//       },
//       {
//         _id: 4,
//         firstName: "Emily",
//         lastName: "Davis",
//         specialization: "Neurologist",
//         experience: "7 years",
//         feesPerConsultation: "$110",
//         timings: ["8:00 AM", "2:00 PM"],
//         hospital: "Hospital Orion",
//       },
//     ]);

//     // Mock data for beds with a reference to the hospital
//     setBeds([
//       { _id: 1, hospital: "Hospital Basu", bedNumber: 1, occupied: true },
//       { _id: 2, hospital: "Hospital Basu", bedNumber: 2, occupied: false },
//       { _id: 3, hospital: "Hospital Orion", bedNumber: 1, occupied: true },
//       { _id: 4, hospital: "Hospital Orion", bedNumber: 2, occupied: false },
//       { _id: 5, hospital: "Hospital Crist", bedNumber: 1, occupied: false },
//       { _id: 6, hospital: "Hospital Crist", bedNumber: 2, occupied: true },
//       { _id: 7, hospital: "Hospital Dofu", bedNumber: 1, occupied: false },
//       { _id: 8, hospital: "Hospital Dofu", bedNumber: 2, occupied: true },
//     ]);
//   }, []); // Empty dependency array ensures this effect runs only once

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   // Function to toggle bed state
//   const toggleBed = (bedId) => {
//     setBeds((prevBeds) =>
//       prevBeds.map((bed) =>
//         bed._id === bedId ? { ...bed, occupied: !bed.occupied } : bed
//       )
//     );
//   };

//   // Filter hospitals based on selected area
//   const filteredHospitalOptions = hospitalOptions.filter(hospitalItem =>
//     hospitalItem.areas.includes(selectedArea)
//   );

//   // Filter doctors based on selected hospital
//   const filteredDoctorList = doctors.filter(doc => doc.hospital === selectedHospital);

//   // Find the selected doctor's hospital
//   const selectedDoctorHospital = doctors.find(doc => doc._id === selectedDoctor)?.hospital;

//   // Debugging logs
//   console.log("Selected Area:", selectedArea);
//   console.log("Selected Hospital:", selectedHospital);
//   console.log("Selected Doctor:", selectedDoctor);
//   console.log("Selected Doctor's Hospital:", selectedDoctorHospital);

//   // Filter beds based on the hospital where the selected doctor is located
//   const filteredBeds = beds.filter(bed => bed.hospital === selectedDoctorHospital);

//   // Additional debugging log for filtered beds
//   console.log("Filtered Beds:", filteredBeds);

//   return (
//     <Layout>
//       <form className="formbula" onSubmit={handleSubmit}>
//         {/* Area selection */}
//         <div>
//           <label>Area:</label>
//           <select value={selectedArea} onChange={(e) => {
//             setSelectedArea(e.target.value);
//             setSelectedHospital(""); // Reset hospital selection
//             setSelectedDoctor(""); // Reset doctor selection
//           }}>
//             <option value="">Select Area</option>
//             {areaOptions.map((areaItem) => (
//               <option key={areaItem._id} value={areaItem.name}>
//                 {areaItem.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Hospital selection, filtered based on selected area */}
//         <div>
//           <label>Hospital:</label>
//           <select value={selectedHospital} onChange={(e) => {
//             setSelectedHospital(e.target.value);
//             setSelectedDoctor(""); // Reset doctor selection
//           }}>
//             <option value="">Select Hospital</option>
//             {filteredHospitalOptions.map((hospitalItem) => (
//               <option key={hospitalItem._id} value={hospitalItem.name}>
//                 {hospitalItem.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Doctor selection, filtered based on selected hospital */}
//         <div>
//           <label>Doctor:</label>
//           <select value={selectedDoctor} onChange={(e) => {
//             setSelectedDoctor(e.target.value);
//             // Automatically updates bed availability based on selected doctor
//           }}>
//             <option value="">Select Doctor</option>
//             {filteredDoctorList.map((doc) => (
//               <option key={doc._id} value={doc._id}>
//                 Dr. {doc.firstName} {doc.lastName}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Doctor Section, filtered based on selected hospital */}
//         <div>
//           <label>Doctors:</label>
//           <div className="doctor-container bula">
//             {filteredDoctorList.map((doc) => (
//               <DoctorList key={doc._id} doctor={doc} />
//             ))}
//           </div>
//         </div>

//         {/* Beds Section, filtered based on selected doctor's hospital */}
//         <div>
//           <label>Beds:</label>
//           <div className="beds-container">
//             {filteredBeds.length > 0 ? (
//               filteredBeds.map((bed) => (
//                 <div
//                   key={bed._id}
//                   className={`bed ${bed.occupied ? "occupied" : "available"}`}
//                   onClick={() => toggleBed(bed._id)}
//                 >
//                   Bed {bed.bedNumber} - {bed.occupied ? "Occupied" : "Available"}
//                 </div>
//               ))
//             ) : (
//               <p>No beds available</p>
//             )}
//           </div>

//           {/* <div className="beds-container">
//             {availableBeds.map((bed) => (
//               <div
//                 key={bed._id}
//                 className={`bed ${bed.occupied ? "occupied" : "available"}`}
//               >
//                 Bed {bed.bedNumber} - {bed.occupied ? "Occupied" : "Available"}
//               </div>
//             ))}
//           </div> */}


//         </div>

//         <button className="btn bg-success" type="submit">
//           Submit
//         </button>
//       </form>
//     </Layout>
//   );
// };

// export default HospitalForm;




// working this

// import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout";
// import DoctorList from "../components/DoctorList";
// import "../styles/HospitalForm.css";

// const HospitalForm = () => {
//   // State to hold selected values and data
//   const [selectedArea, setSelectedArea] = useState("");
//   const [selectedHospital, setSelectedHospital] = useState("");
//   const [selectedDoctor, setSelectedDoctor] = useState(""); // State for selected doctor
//   const [areaOptions, setAreaOptions] = useState([]); // Array to hold area options
//   const [hospitalOptions, setHospitalOptions] = useState([]); // Array to hold hospital options
//   const [beds, setBeds] = useState([]); // Array to hold bed data
//   const [doctors, setDoctors] = useState([]); // Array to hold doctor data

//   useEffect(() => {
//     // Set options for areas
//     setAreaOptions([
//       { _id: 1, name: "Agra" },
//       { _id: 2, name: "Delhi" },
//       { _id: 3, name: "Lucknow" },
//       { _id: 4, name: "Etawa" },
//       { _id: 5, name: "Awadh" },
//     ]);

//     // Set options for hospitals with areas they cover
//     setHospitalOptions([
//       { _id: 1, name: "Hospital Orion", areas: ["Delhi", "Lucknow", "Agra"] },
//       { _id: 2, name: "Hospital Basu", areas: ["Delhi"] },
//       { _id: 3, name: "Hospital Crist", areas: ["Delhi", "Agra", "Etawa"] },
//       { _id: 4, name: "Hospital Dofu", areas: ["Etawa", "Agra"] },
//       { _id: 5, name: "Hospital Awadh", areas: ["Awadh", "Lucknow"] },
//     ]);

//     // Mock data for doctors with multiple doctors per hospital
//     setDoctors([
//       {
//         _id: 1,
//         firstName: "John",
//         lastName: "Doe",
//         specialization: "Cardiologist",
//         experience: "10 years",
//         feesPerConsultation: "$100",
//         timings: ["10:00 AM", "4:00 PM"],
//         hospital: "Hospital Orion",
//       },
//       {
//         _id: 2,
//         firstName: "Jane",
//         lastName: "Smith",
//         specialization: "Dermatologist",
//         experience: "8 years",
//         feesPerConsultation: "$80",
//         timings: ["11:00 AM", "5:00 PM"],
//         hospital: "Hospital Basu",
//       },
//       {
//         _id: 3,
//         firstName: "Michael",
//         lastName: "Johnson",
//         specialization: "Pediatrician",
//         experience: "12 years",
//         feesPerConsultation: "$90",
//         timings: ["9:00 AM", "3:00 PM"],
//         hospital: "Hospital Crist",
//       },
//       {
//         _id: 4,
//         firstName: "Emily",
//         lastName: "Davis",
//         specialization: "Neurologist",
//         experience: "7 years",
//         feesPerConsultation: "$110",
//         timings: ["8:00 AM", "2:00 PM"],
//         hospital: "Hospital Orion",
//       },
//       {
//         _id: 5,
//         firstName: "Emily",
//         lastName: "Davis",
//         specialization: "Neurologist",
//         experience: "7 years",
//         feesPerConsultation: "$110",
//         timings: ["8:00 AM", "2:00 PM"],
//         hospital: "Hospital Orion",
//       },
//       {
//         _id: 6,
//         firstName: "Avadh",
//         lastName: "Ojha",
//         specialization: "Psychologist",
//         experience: "7 years",
//         feesPerConsultation: "$110",
//         timings: ["8:00 AM", "2:00 PM"],
//         hospital: "Hospital Awadh",
//       },
//     ]);

//     // Mock data for beds with a reference to the hospital
//     setBeds([
//       { _id: 1, hospital: "Hospital Basu", bedNumber: 1, occupied: true },
//       { _id: 2, hospital: "Hospital Basu", bedNumber: 2, occupied: false },
//       { _id: 3, hospital: "Hospital Orion", bedNumber: 1, occupied: true },
//       { _id: 4, hospital: "Hospital Orion", bedNumber: 2, occupied: false },
//       { _id: 8, hospital: "Hospital Orion", bedNumber: 3, occupied: true },
//       { _id: 9, hospital: "Hospital Orion", bedNumber: 4, occupied: false },
//       { _id: 5, hospital: "Hospital Crist", bedNumber: 1, occupied: false },
//       { _id: 6, hospital: "Hospital Crist", bedNumber: 2, occupied: true },
//       { _id: 7, hospital: "Hospital Dofu", bedNumber: 1, occupied: false },
//       { _id: 8, hospital: "Hospital Dofu", bedNumber: 2, occupied: true },
//     ]);
//   }, []); // Empty dependency array ensures this effect runs only once

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   // Function to toggle bed state
//   const toggleBed = (bedId) => {
//     setBeds((prevBeds) =>
//       prevBeds.map((bed) =>
//         bed._id === bedId ? { ...bed, occupied: !bed.occupied } : bed
//       )
//     );
//   };

//   // Filter hospitals based on selected area
//   const filteredHospitalOptions = hospitalOptions.filter(hospitalItem =>
//     hospitalItem.areas.includes(selectedArea)
//   );

//   // Filter doctors based on selected hospital
//   const filteredDoctorList = doctors.filter(doc => doc.hospital === selectedHospital);

//   // Find the selected doctor's hospital
//   const selectedDoctorHospital = doctors.find(doc => doc._id === Number(selectedDoctor))?.hospital;
//   console.log("Selected Doctor's Hospital:", selectedDoctorHospital);


//   // Filter beds based on the hospital where the selected doctor is located
//   const filteredBeds = beds.filter(bed => bed.hospital === selectedDoctorHospital);

//   return (
//     <Layout>
//       <form className="formbula" onSubmit={handleSubmit}>
//         {/* Area selection */}
//         <div>
//           <label>Area:</label>
//           <select value={selectedArea} onChange={(e) => {
//             setSelectedArea(e.target.value);
//             setSelectedHospital(""); // Reset hospital selection
//             setSelectedDoctor(""); // Reset doctor selection
//           }}>
//             <option value="">Select Area</option>
//             {areaOptions.map((areaItem) => (
//               <option key={areaItem._id} value={areaItem.name}>
//                 {areaItem.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Hospital selection, filtered based on selected area */}
//         <div>
//           <label>Hospital:</label>
//           <select value={selectedHospital} onChange={(e) => {
//             setSelectedHospital(e.target.value);
//             setSelectedDoctor(""); // Reset doctor selection
//           }}>
//             <option value="">Select Hospital</option>
//             {filteredHospitalOptions.map((hospitalItem) => (
//               <option key={hospitalItem._id} value={hospitalItem.name}>
//                 {hospitalItem.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Doctor selection, filtered based on selected hospital */}
//         <div>
//           <label>Doctor:</label>
//           <select value={selectedDoctor} onChange={(e) => {
//             setSelectedDoctor(e.target.value);
//             // Automatically updates bed availability based on selected doctor
//           }}>
//             <option value="">Select Doctor</option>
//             {filteredDoctorList.map((doc) => (
//               <option key={doc._id} value={doc._id}>
//                 Dr. {doc.firstName} {doc.lastName}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Doctor Section, filtered based on selected hospital */}
//         <div>
//           <label>Doctors:</label>
//           <div className="doctor-container bula">
//             {filteredDoctorList.map((doc) => (
//               <DoctorList key={doc._id} doctor={doc} />
//             ))}
//           </div>
//         </div>

//         {/* Beds Section, filtered based on selected doctor's hospital */}
//         <div>
//           <label>Beds:</label>
//           <div className="beds-container">
//             {filteredBeds.length > 0 ? (
//               filteredBeds.map((bed) => (
//                 <div
//                   key={bed._id}
//                   className={`bed ${bed.occupied ? "occupied" : "available"} lula`}
//                   onClick={() => toggleBed(bed._id)}
//                 >
//                   Bed {bed.bedNumber} - {bed.occupied ? "Occupied" : "Available"}
//                 </div>
//               ))
//             ) : (
//               <p>No beds available</p>
//             )}
//           </div>

//         </div>

//         <button className="btn bg-success" type="submit">
//           Submit
//         </button>
//       </form>
//     </Layout>
//   );
// };

// export default HospitalForm;




















import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout";
import DoctorList from "../components/DoctorList";
import "../styles/HospitalForm.css";

const HospitalForm = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [areaOptions, setAreaOptions] = useState([]);
  const [hospitalOptions, setHospitalOptions] = useState([]);
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [beds, setBeds] = useState([]);

  // Fetch areas from the backend
  useEffect(() => {
    fetch("http://localhost:3000/api/areas")
      .then((response) => response.json())
      .then((data) => setAreaOptions(data))
      .catch((error) => console.log(error));
  }, []);

  // Fetch hospitals based on selected area
  useEffect(() => {
    if (selectedArea) {
      fetch(`http://localhost:3000/api/hospitals/${selectedArea}`)
        .then((response) => response.json())
        .then((data) => setHospitalOptions(data))
        .catch((error) => console.log(error));
    }
  }, [selectedArea]);

  // Fetch doctors based on selected hospital
  useEffect(() => {
    if (selectedHospital) {
      fetch(`http://localhost:3000/api/doctors/${selectedHospital}`)
        .then((response) => response.json())
        .then((data) => setDoctorOptions(data))
        .catch((error) => console.log(error));
    }
  }, [selectedHospital]);

  // Fetch beds based on selected doctor's hospital
  useEffect(() => {
    if (selectedHospital) {
      fetch(`http://localhost:3000/api/beds/${selectedHospital}`)
        .then((response) => response.json())
        .then((data) => setBeds(data))
        .catch((error) => console.log(error));
    }
  }, [selectedHospital]);

  // // Filter hospitals based on selected area
  // const filteredHospitalOptions = hospitalOptions.filter(hospitalItem =>
  //   hospitalItem.areas.includes(selectedArea)
  // );

  // Filter doctors based on selected hospital
  const filteredDoctorList = doctorOptions.filter(doc => doc.hospital === selectedHospital);


  return (
    <Layout>
      <form className="formbula">
        {/* Area selection */}
        <div>
          <label>Area:</label>
          <select
            value={selectedArea}
            onChange={(e) => {
              setSelectedArea(e.target.value);
              setSelectedHospital("");
              setSelectedDoctor("");
            }}
          >
            <option value="">Select Area</option>
            {areaOptions.map((areaItem) => (
              <option key={areaItem._id} value={areaItem.name}>
                {areaItem.name}
              </option>
            ))}
          </select>
        </div>

        {/* Hospital selection */}
        <div>
          <label>Hospital:</label>
          <select
            value={selectedHospital}
            onChange={(e) => {
              setSelectedHospital(e.target.value);
              setSelectedDoctor("");
            }}
          >
            <option value="">Select Hospital</option>
            {hospitalOptions.map((hospitalItem) => (
              <option key={hospitalItem._id} value={hospitalItem.name}>
                {hospitalItem.name}
              </option>
            ))}
          </select>
        </div>

        {/* Doctor selection */}
        <div>
          <label>Doctor:</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctorOptions.map((doc) => (
              <option key={doc.userId} value={doc.userId}>
              {/* <option key={doc._id} value={doc._id}> */}
                Dr. {doc.firstName} {doc.lastName}
              </option>
            ))}
          </select>
        </div>


{/* 
// Display the selected doctor details using DoctorList component */}
{selectedDoctor && (
  <div>
    <label>Selected Doctor Details:</label>
    <div className="doctor-container bula">
      {filteredDoctorList
        .filter((doc) => doc.userId === parseInt(selectedDoctor)) // Find selected doctor based on _id
        .map((doc) => (
          <DoctorList key={doc.userId} doctor={doc} />
          // <DoctorList key={doc._id} doctor={doc} />
          
        ))}
    </div>
  </div>
)}

        {/* Bed Availability */}
        <div>
          <label>Beds:</label>
          <div className="beds-container">
            {beds.length > 0 ? (
              beds.map((bed) => (
                <div
                  key={bed._id}
                  className={`bed ${bed.occupied ? "occupied" : "available"}  lula`}
                >
                  Bed {bed.bedNumber} - {bed.occupied ? "Occupied" : "Available"}
                </div>
              ))
            ) : (
              <p>No beds available</p>
            )}
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default HospitalForm;
