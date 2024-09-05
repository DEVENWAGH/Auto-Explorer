import mongoose, { Schema, Document } from "mongoose";

export interface Comment extends Document {
  userId: mongoose.Types.ObjectId;
  dealershipId: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema: Schema<Comment> = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dealershipId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dealership",
    required: true,
  },
  content: {
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

const CommentModel = mongoose.models.Comment || mongoose.model<Comment>("Comment", CommentSchema);
export default CommentModel;