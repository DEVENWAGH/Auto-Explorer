import mongoose, { Schema, Document } from "mongoose";

export interface SearchHistory extends Document {
  userId: mongoose.Types.ObjectId;
  searchTerm: string;
  searchDate: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const SearchHistorySchema: Schema<SearchHistory> = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  searchTerm: {
    type: String,
    required: true,
  },
  searchDate: {
    type: Date,
    default: Date.now,
  },
  status: {
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

const SearchHistoryModel = mongoose.models.SearchHistory || mongoose.model<SearchHistory>("SearchHistory", SearchHistorySchema);
export default SearchHistoryModel;