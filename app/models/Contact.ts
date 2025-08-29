import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    bannerSection:{
        image:{type:String,required:true},
        imageAlt:{type:String},
        title:{type:String,required:true},
    },
    firstSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
        items:[{
            title:{type:String},
            map:{type:String},
            address:{type:String},
            image:{type:String},
            imageAlt:{type:String},
            contact:[{
                value:{type:String},
            }],
            mail:[{
                value:{type:String},
            }],
        }]
    },
    secondSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
    },
    metaTitle:{type:String},
    metaDescription:{type:String},
})

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);