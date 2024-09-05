import mongoose, { Schema, Document } from "mongoose";

export interface IBike extends Document {
  bikeModel: string;
  year: number;
  color: string;
  category: string;
  images: string[];
  exShowroomPrice: number;
  onRoadPrice: number;
  displacement: number;
  engineType: string;
  fuelType: string;
  createdAt: Date;
  updatedAt: Date;
}

const BikeSchema: Schema<IBike> = new Schema(
  {
    bikeModel: {
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
    displacement: {
      type: Number,
      required: true,
    },
    engineType: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Enable timestamps
);

const BikeModel =
  mongoose.models.Bike || mongoose.model<IBike>("Bike", BikeSchema);
export default BikeModel;
