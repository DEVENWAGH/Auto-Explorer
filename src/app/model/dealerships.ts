import mongoose, { Schema, Document } from "mongoose";

export interface Dealership extends Document {
  name: string;
  location: string;
  vehicleBrand: string;
  createdAt: Date;
  updatedAt: Date;
}

const DealershipSchema: Schema<Dealership> = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  vehicleBrand: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const DealershipModel = mongoose.models.Dealership || mongoose.model<Dealership>("Dealership", DealershipSchema);
export default DealershipModel;
