import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    bannerSection:{
                image:{type:String,required:true},
                imageAlt:{type:String},
                title:{type:String,required:true},
    },
    firstSection:{
        movingText:{type:String,required:true},
        title:{type:String,required:true},
        description:{type:String,required:true},
        buttonText:{type:String,required:true},
    },
    secondSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
        image:{type:String,required:true},
        imageAlt:{type:String},
    },
    thirdSection:{
        title:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
                description:{type:String,required:true},
            }
        ]
    },
    fourthSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
            }
        ]
    },
    historySection:{
        title:{type:String,required:true},
        items:[
            {
                image:{type:String,required:true},
                imageAlt:{type:String},
                title:{type:String,required:true},
                year:{type:String,required:true},
                description:{type:String,required:true},
            }
        ]
    },
    sixthSection:{
        image:{type:String,required:true},
        imageAlt:{type:String},
        mainTitle:{type:String,required:true},
        subTitle:{type:String,required:true},
        buttonText:{type:String,required:true},
    }
})

export default mongoose.models.About || mongoose.model("About", homeSchema);