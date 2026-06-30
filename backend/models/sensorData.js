import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema(
  {
    pulseRate: { type: Number, required: true },
    spo2Level: { type: Number, required: true },
    bodyTemperature: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("SensorData", sensorDataSchema);
