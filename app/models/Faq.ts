import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    bannerSection:{
        image:{type:String,required:true},
        imageAlt:{type:String},
        title:{type:String,required:true},
    },
    firstSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
    },
    faq:[{
        title:{type:String},
        items:[
            {
                question:{type:String},
                answer:{type:String},
            }
        ],
    }],
    metaTitle:{type:String},
    metaDescription:{type:String},
})

export default mongoose.models.FAQ || mongoose.model("FAQ", faqSchema);