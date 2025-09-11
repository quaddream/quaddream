import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    items:[
        {
            image:{type:String},
            imageAlt:{type:String},
            title:{type:String},
            description:{type:String},
        }
    ]
})

export default mongoose.models.Product || mongoose.model("Product", productSchema);