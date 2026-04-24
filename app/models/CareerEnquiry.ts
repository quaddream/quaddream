import mongoose from "mongoose";

const careerEnquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
    resume: {
      type: String, // store file URL (Dropbox / S3 / local path)
      required: true,
    },
    jobTitle: {
      type: String, // optional but useful
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.models.CareerEnquiry ||
  mongoose.model("CareerEnquiry", careerEnquirySchema);