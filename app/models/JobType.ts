import mongoose from "mongoose";

const jobTypeSchema = new mongoose.Schema({
    name:{type:String,required:true}
})

export default mongoose.models.JobType || mongoose.model("JobType", jobTypeSchema);