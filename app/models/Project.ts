import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
        title:{type:String,required:true},
        description:{type:String,required:true},
    },
    projects:[{
        bannerSection:{
            image:{type:String,required:true},
            imageAlt:{type:String},
        },
        firstSection:{
            title:{type:String,required:true},
            sector:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"Sector"},
            location:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"Location"},
            status:{type:String,required:true},
            client:{type:String},
            coverImage:{type:String,required:true},
            coverImageAlt:{type:String,required:true},
        },    
        secondSection:{
            title:{type:String,required:true},
            description:{type:String,required:true},
        },
        thirdSection:{
            title:{type:String,required:true},
            items:[{
                title:{type:String,required:true},
            }]
        },
        fourthSection:{
            title:{type:String,required:true},
            description:{type:String,required:true},
            items:[{
                logo:{type:String,required:true},
                logoAlt:{type:String},
                title:{type:String,required:true},
            }]
        },
        images:[String],
        slug:{type:String,required:true},
        thumbnail:{type:String,required:true},
        thumbnailAlt:{type:String,required:true},
        metaTitle:{type:String},
        metaDescription:{type:String},
    }],
    lastSection:{
        image:{type:String,required:true},
        imageAlt:{type:String,required:true},
        mainTitle:{type:String,required:true},
        subTitle:{type:String,required:true},
        buttonText:{type:String,required:true},
    }
})

export default mongoose.models.Project || mongoose.model("Project", projectSchema);