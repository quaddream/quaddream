import mongoose from "mongoose";

const sitemapSchema = new mongoose.Schema({
    metaTitle: {
        type: String,
    },

    metaDescription: {
        type: String,
    },

    bannerSection: {
        image: { type: String },
        imageAlt: { type: String },
        title: { type: String },
    },

    sitemap: [
        {
            label: { type: String},

            // Parent clickable link (optional)
            link: { type: String },

            // Direct page link (optional)
            href: { type: String },

            children: [
                {
                    label: { type: String},
                    href: { type: String},
                },
            ],
        },
    ],
});

export default mongoose.models.Sitemap ||
    mongoose.model("Sitemap", sitemapSchema);
