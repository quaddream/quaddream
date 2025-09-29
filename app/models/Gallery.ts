import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    bannerSection:{
        image:{type:String,required:true},
        imageAlt:{type:String},
        title:{type:String,required:true},
    },
    firstSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
    },
    gallery:[{
        title:{type:String},
        slug:{type:String},
        thumbnail:{type:String},
        thumbnailAlt:{type:String},
        bannerSection:{
            image:{type:String},
            imageAlt:{type:String},
            title:{type:String},
        },
        firstSection:{
            title:{type:String},
            description:{type:String},
        },
        metaTitle:{type:String},
        metaDescription:{type:String},
        images:[{type:String}],
        categories:[{
            title:{type:String},
            images:[{type:String}]
        }]
    }],
    metaTitle:{type:String},
    metaDescription:{type:String},
})

export default mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);