import mongoose, { Schema, Document } from "mongoose";

export interface Favourite extends Document {
  userId: mongoose.Types.ObjectId;
  vehicleId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const FavouriteSchema: Schema<Favourite> = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  }
},
  { timestamps: true }
);

const FavouriteModel = mongoose.models.Favourite || mongoose.model<Favourite>("Favourite", FavouriteSchema);
export default FavouriteModel;
