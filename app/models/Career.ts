import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    bannerSection: {
        image: { type: String, required: true },
        imageAlt: { type: String },
        title: { type: String, required: true },
    },
    firstSection: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        buttonText: { type: String, required: true },
    },
    secondSection: {
        title: { type: String, required: true },
        items: [{
            logo: { type: String},
            logoAlt: { type: String},
            title: { type: String },
        }]
    },
    thirdSection: {
        title: { type: String, required: true },
    },
    careers: [{
            firstSection:{
                title:{type:String,required:true},
                department:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"Department"},
                jobType:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"JobType"},
                experience:{type:String,required:true},
                location:{type:String},
            },    
            secondSection:{
                title:{type:String,required:true},
                items:[
                    {
                        title:String
                    }
                ]
            },
            thirdSection:{
                title:{type:String,required:true},
                items:[
                    {
                        title:String
                    }
                ]
            },
            fourthSection:{
                title:{type:String,required:true},
                description:{type:String,required:true},
            },
            slug:{type:String,required:true},
            metaTitle:{type:String},
            metaDescription:{type:String},
        }],
    lastSection: {
        image: { type: String, required: true },
        imageAlt: { type: String, required: true },
        mainTitle: { type: String, required: true },
        subTitle: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    }
})

export default mongoose.models.Career || mongoose.model("Career", careerSchema);