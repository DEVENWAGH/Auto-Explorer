import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  displayName: string;
  email: string;
  phoneNo: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  city: string;
  creationDate: Date;
  modificationDate: Date;
}

const UserSchema: Schema<User> = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    verifyCode: {
      type: String,
      required: [true, "Verify Code is required"],
    },
    verifyCodeExpiry: {
      type: Date,
      required: [true, "Verify Code Expiry is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    phoneNo: {
      type: String,
      required: [true, "Phone Number is required"],
      match: [/^\d{10}$/, "Please use a valid phone number format (10 digits)"],
    },
  },
  {
    timestamps: { createdAt: "creationDate", updatedAt: "modificationDate" },
  }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
