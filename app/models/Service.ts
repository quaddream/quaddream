import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
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
        title:{type:String},
        description:{type:String},

    },
    secondSection:{
        title:{type:String},
        description:{type:String},
        image:{type:String},
        imageAlt:{type:String},
    },
    thirdSection:{
        title:{type:String},
        items:[
            {
                thumbnail:{type:String},
                thumbnailAlt:{type:String},
                thumbnailTitle:{type:String},
                slug:{type:String},
                metaTitle:{type:String},
                metaDescription:{type:String},
                bannerSection:{
                    image:{type:String},
                    imageAlt:{type:String},
                },
                firstSection:{
                    title:{type:String},
                    description:{type:String},
                    image:{type:String},
                    imageAlt:{type:String},
                },
                secondSection:{
                    title:{type:String},
                    items:[
                        {
                            logo:{type:String},
                            logoAlt:{type:String},
                            title:{type:String},
                        }
                    ]
                },
                productSection:{
                    title:{type:String},
                    items:[
                        {
                            _id:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
                        }
                    ]
                },
                fourthSection:{
                    title:{type:String},
                    description:{type:String},
                    items:[
                        {
                            logo:{type:String},
                            logoAlt:{type:String},
                            title:{type:String},
                        }
                    ]
                },
            }
        ]
    },
})

export default mongoose.models.Service || mongoose.model("Service", serviceSchema);