import mongoose, { Schema, Document } from "mongoose";

export interface SearchHistory extends Document {
  userId: mongoose.Types.ObjectId;
  searchTerm: string;
  searchDate: Date;
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
  }
},
  { timestamps: true }
);

const SearchHistoryModel = mongoose.models.SearchHistory || mongoose.model<SearchHistory>("SearchHistory", SearchHistorySchema);
export default SearchHistoryModel;