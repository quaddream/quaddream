import mongoose from "mongoose";

const qhseSchema = new mongoose.Schema({
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
                image:{type:String,required:true},
                imageAlt:{type:String},
                title:{type:String,required:true},
                description:{type:String,required:true},
    },
    secondSection:{
        mainTitle:{type:String,required:true},
        subTitle:{type:String,required:true},
        description:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
            }
        ]
},
    thirdSection:{
        mainTitle:{type:String,required:true},
        subTitle:{type:String,required:true},
        description:{type:String,required:true},
        items:[
            {
                title:{type:String,required:true},
                logo:{type:String,required:true},
                logoAlt:{type:String},
            }
        ]
    },
    fourthSection:{
        mainTitle:{type:String,required:true},
        subTitle:{type:String,required:true},
        description:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
            }
        ]
    },
    fifthSection:{
        title:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
            }
        ]
    },
})

export default mongoose.models.Qhse || mongoose.model("Qhse", qhseSchema);