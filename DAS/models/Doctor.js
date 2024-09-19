const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  userId: Number,
  // _id: Number,
  firstName: String,
  lastName: String,
  specialization: String,
  experience: String,
  feesPerConsultation: Number,
  timings: [String],
  hospital: String, // Hospital name
});

module.exports = mongoose.model('Doctor', doctorSchema);



// const mongoose = require("mongoose");

// const doctorSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: String,
//     },
//     firstName: {
//       type: String,
//       required: [true, "first name is required"],
//     },
//     lastName: {
//       type: String,
//       required: [true, "last name is required"],
//     },
//     phone: {
//       type: String,
//       required: [true, "phone no is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "email is required"],
//     },
//     website: {
//       type: String,
//     },
//     address: {
//       type: String,
//       required: [true, "address is required"],
//     },
//     specialization: {
//       type: String,
//       required: [true, "specialization is require"],
//     },
//     experience: {
//       type: String,
//       required: [true, "experience is required"],
//     },
//     feesPerCunsaltation: {
//       type: Number,
//       required: [true, "fee is required"],
//     },
//     status: {
//       type: String,
//       default: "pending",
//     },
//     timings: {
//       type: Object,
//       required: [true, "wrok timing is required"],
//     },
//   },
//   { timestamps: true }
// );

 
// module.exports = mongoose.model('Doctor', doctorSchema);;

// module.exports = mongoose.model('Doctor', doctorSchema);
