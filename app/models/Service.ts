import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
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
        title: { type: String },
        description: { type: String },

    },
    secondSection: {
        title: { type: String },
        description: { type: String },
        image: { type: String },
        imageAlt: { type: String },
    },
    servicesSection: {
        title: { type: String },
        items: [
            {
                logo: { type: String },
                logoAlt: { type: String },
                title: { type: String },
            }
        ]
    },
    thirdSection: {
        title: { type: String },
        items: [
            {
                type: { type: String },
                isHidden: { type: Boolean },
                thumbnail: { type: String },
                thumbnailAlt: { type: String },
                thumbnailTitle: { type: String },
                slug: { type: String },
                metaTitle: { type: String },
                metaDescription: { type: String },
                bannerSection: {
                    image: { type: String },
                    imageAlt: { type: String },
                    title: { type: String },
                },
                firstSection: {
                    title: { type: String },
                    description: { type: String },
                    image: { type: String },
                    imageAlt: { type: String },
                    items: [{
                        label: { type: String },
                        value: { type: String },
                        image: { type: String },
                        imageAlt: { type: String }
                    }]
                },
                secondSection: {
                    title: { type: String },
                    description: { type: String },
                    items: [
                        {
                            image: { type: String },
                            imageAlt: { type: String },
                            title: { type: String },
                            description: { type: String },
                        }
                    ]
                },
                thirdSection: {
                    title: { type: String },
                    items: [
                        {
                            title: { type: String },
                            description: { type: String },
                        }
                    ]
                },
                productSection: {
                    title: { type: String },
                    items: [
                        {
                            _id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
                        }
                    ]
                },
                productSection2: {
                    title: { type: String },
                    sections: {
                        type: [
                            {
                                title: { type: String },
                                items: [
                                    { _id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" } }
                                ]
                            }
                        ],
                        default: []
                    }
                },
                fourthSection: {
                    title: { type: String },
                    description: { type: String },
                    items: [
                        {
                            logo: { type: String },
                            logoAlt: { type: String },
                            image: { type: String },
                            imageAlt: { type: String },
                            title: { type: String },
                        }
                    ]
                },
                fifthSection: {
                    title: { type: String },
                    items: [
                        {
                            question: { type: String },
                            answer: { type: String },
                        }
                    ]
                },
                sixthSection: {
                    title: { type: String },
                    description: { type: String },
                    image: { type: String },
                    imageAlt: { type: String },
                    buttonText: { type: String },
                },
            }
        ]
    },
})

export default mongoose.models.Service || mongoose.model("Service", serviceSchema);