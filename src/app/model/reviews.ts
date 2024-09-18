import mongoose, { Schema, Document } from "mongoose";

export interface Review extends Document {
  userId: mongoose.Types.ObjectId;
  vehicleId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema: Schema<Review> = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  }
},
  { timestamps: true }
);

const ReviewModel = mongoose.models.Review || mongoose.model<Review>("Review", ReviewSchema);
export default ReviewModel;
