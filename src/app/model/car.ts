import mongoose, { Schema, Document } from "mongoose";

export interface ICar extends Document {
  carModel: string;
  year: number;
  color: string;
  category: string;
  images: string[];
  exShowroomPrice: number;
  onRoadPrice: number;
  engineType: string;
  transmissionType: string;
  fuelType: string;
  seatingCapacity: number;
  createdAt: Date;
  updatedAt: Date;
}

const CarSchema: Schema<ICar> = new Schema(
  {
    carModel: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    exShowroomPrice: {
      type: Number,
      required: true,
    },
    onRoadPrice: {
      type: Number,
      required: true,
    },
    engineType: {
      type: String,
      required: true,
    },
    transmissionType: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    seatingCapacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // Enable timestamps
);

const CarModel = mongoose.models.Car || mongoose.model<ICar>("Car", CarSchema);
export default CarModel;
