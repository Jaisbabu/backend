import { Schema, model } from "mongoose";

const appointmentSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Number,
    required: true,
  },
});

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
