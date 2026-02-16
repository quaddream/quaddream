import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    bannerSection:{
        video:{type:String,required:true},
        poster:{type:String,required:true},
        items:[
            {
                title:{type:String,required:true},
            }
        ]
    },
    firstSection:{
        movingText:{type:String,required:true},
        title:{type:String,required:true},
        description:{type:String,required:true},
        buttonText:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                number:{type:String,required:true},
                value:{type:String,required:true},
            }
        ]
    },
    servicesSection:{
        mainTitle:{type:String,required:true},
        subTitle:{type:String,required:true},
        description:{type:String,required:true},
        items:[
            {
                title:{type:String,required:true},
                image:{type:String,required:true},
                imageAlt:{type:String},
                slug:{type:String,required:true}
            }
        ]
    },
    industriesSection:{
        title:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
                image:{type:String,required:true},
                imageAlt:{type:String},
            }
        ]
    },
    fourthSection:{
        title:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
                mainTitle:{type:String,required:true},
                subTitle:{type:String,required:true},
                description:{type:String,required:true},
                image:{type:String,required:true},
                imageAlt:{type:String},
            }
        ]
    },
    partnersSection:{
        title:{type:String,required:true},
        description:{type:String,required:true},
        items:[
            {
                logo:{type:String,required:true},
                logoAlt:{type:String},
            }
        ]
    },
    seventhSection:{
        mainTitle:{type:String,required:true},
        image:{type:String,required:true},
        imageAlt:{type:String},
        subTitle:{type:String,required:true},
        buttonText:{type:String,required:true},
    },
})

export default mongoose.models.Home || mongoose.model("Home", homeSchema);