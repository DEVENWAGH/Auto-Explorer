import mongoose, { Schema, Document } from "mongoose";

export interface Wishlist extends Document {
  userId: mongoose.Types.ObjectId;
  vehicleId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const WishlistSchema: Schema<Wishlist> = new Schema({
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

const WishlistModel = mongoose.models.Wishlist || mongoose.model<Wishlist>("Wishlist", WishlistSchema);
export default WishlistModel;
