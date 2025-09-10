import mongoose from "mongoose";

const DownloadSchema = new mongoose.Schema({
    banner:{
        type: String,
        required: true,
    },
    bannerAlt:{
        type: String,
    },
    pageTitle:{
        type: String,
        required: true,
    },
    metaTitle:{
        type: String,
    },
    metaDescription:{
        type: String,
    },
    categories:[{
        category: {
            type: String,
        },
        files: [{
            title: {
                type: String,
            },
            file: {
                type: String,
            },
            size: {
                type: String,
            },
        }],
    }],
});

export default mongoose.models.Download || mongoose.model("Download", DownloadSchema);
