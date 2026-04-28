import React from "react";
import Index from "@/app/components/blog-detail/Index";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import Script from "next/script";
interface FaqSchema {
    "@context": string;
    "@type": string;
    mainEntity: {
        "@type": string;
        name: string;
        acceptedAnswer: {
            "@type": string;
            text: string;
        };
    }[];
}
type Props = {
    params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
    const url = `${process.env.BASE_URL}/api/admin/blog?slug=${slug}`;
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
}

async function getAllBlogs() {
    const url = `${process.env.BASE_URL}/api/admin/blog`;
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
}


export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const blog = await getBlog(slug as string);

    const metadataTitle = blog?.data?.metaTitle || "Quad Dream";
    const metadataDescription = blog?.data?.metaDescription || "Quad Dream";

    return {
        title: metadataTitle,
        description: metadataDescription,
        robots: "index, follow",
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: metadataTitle,
            description: metadataDescription,
            url: process.env.BASE_URL,
            siteName: "Quad Dream",
        },
    };
}

export default async function BlogDetailsPage({ params }: Props) {
    const { slug } = await params;
    const blog = await getBlog(slug as string);
    const allBlogs = await getAllBlogs();
    const blogData = blog?.data;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${process.env.BASE_URL}/blog/${slug}`,
        },
        headline: blogData?.title,
        image: blogData?.image
            ? [`${process.env.BASE_URL}${blogData.image}`]
            : [],
        author: {
            "@type": "Organization",
            name: "Quad Dream",
            url: process.env.BASE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "Quad Dream",
            logo: {
                "@type": "ImageObject",
                url: `${process.env.BASE_URL}/assets/images/logo-main.svg`,
            },
        },
        datePublished: blogData?.createdAt,
        dateModified: blogData?.updatedAt || blogData?.createdAt,
    };
    let faqSchema: FaqSchema | null = null;

    // Blog 1
    if (slug === "is-cheap-scaffolding-rental-safe-in-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is cheap scaffolding rental safe in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cheap scaffolding rental can be safe if it meets UAE safety standards and compliance requirements. However, lower pricing may sometimes indicate reduced material quality, inspection frequency, or supervision. It is important to verify certifications, inspection records, and installation practices before selecting a provider.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What are the most common causes of scaffolding collapse in UAE construction sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Common causes include poor material quality, incorrect assembly, overloading beyond design limits, and lack of proper inspection. Inadequate supervision and missing safety components can also contribute to structural instability on site.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who is responsible if scaffolding collapses on a UAE construction site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "On UAE construction sites, responsibility lies with the main contractor and site manager. Even if scaffolding is supplied by a third party, the contractor is accountable for ensuring compliance, proper installation, and safe usage.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What documentation should a UAE scaffolding rental company be able to provide?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A scaffolding provider should be able to provide safety certifications, inspection records, method statements, and compliance documentation aligned with UAE regulations.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Does cheap scaffolding always mean unsafe scaffolding in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily. Lower pricing does not always indicate unsafe scaffolding, but it requires careful evaluation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What UAE regulations apply to scaffolding on construction sites?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scaffolding in the UAE is regulated by authorities such as Dubai Municipality and OSHAD.",
                    },
                },
            ],
        };
    }

    // Blog 2
    if (slug === "short-term-vs-long-term-sacffolding-rental-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is short-term or long-term scaffolding rental cheaper in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Short-term rental is more cost-effective for brief tasks, while long-term rental becomes economical for extended use due to lower monthly rates.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the typical minimum hire period for scaffolding rental in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Short-term rentals are daily or weekly, while long-term rentals usually start from one month.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I switch from short-term to long-term mid-project?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, rental agreements can often be adjusted depending on provider terms.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does the UAE summer work ban affect scaffolding rental?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The summer midday break may impact timelines, so contracts should account for idle periods.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What should a long-term scaffolding contract include?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It should define rental duration, pricing structure, extension terms, and safety responsibilities.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can one provider cover multiple UAE sites under one contract?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, depending on provider capacity, multiple sites can be covered under a single agreement.",
                    },
                },
            ],
        };
    }

    // Blog 3
    if (slug === "is-aluminum-scaffolding-always-safer-than-steel-scaffolding") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [{
                "@type": "Question",
                name: "What is the maximum height for aluminium scaffolding towers?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "In UAE site conditions, aluminium mobile towers are typically used up to around 12 metres for single-width and higher for double-width systems with proper stabilisation. Exceeding these limits without tie-ins increases risk. In any aluminium vs steel scaffolding decision, height is a key factor influencing safety."
                }
            },{
                "@type": "Question",
                name: "Can aluminium scaffolding be used in coastal areas of Dubai and Abu Dhabi?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, aluminium scaffolding is well suited for coastal UAE environments such as Dubai and Abu Dhabi due to its natural corrosion resistance. In a scaffolding safety comparison, aluminium performs well in humid, salt-laden air where untreated steel may degrade faster if not properly protected."
                }
            },{
                "@type": "Question",
                name: "What scaffolding system is best for façade work on commercial buildings in the UAE?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "For façade work in the UAE, aluminium mobile towers are commonly used for low to mid-rise access and repositioning tasks. For high-rise buildings or extended work durations, steel systems provide better stability. The right scaffolding material depends on height, exposure, and project duration."
                }
            },{
                "@type": "Question",
                name: "How does scaffolding material affect worker fatigue on UAE sites?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "In UAE heat conditions, scaffolding material directly affects physical strain during handling. Aluminium scaffolding safety advantages include reduced weight, which lowers fatigue during erection and dismantling. In contrast, heavier steel systems may increase effort but offer better stability for long-duration and high-load applications."
                }
            },{
                "@type": "Question",
                name: "What are the wind speed limitations for aluminium scaffolding in the UAE?",
                acceptedAnswer: {
                "@type": "Answer",
                text: "Aluminium mobile scaffolding towers in the UAE should not be used in wind speeds exceeding safe operating limits, typically around 17 mph without additional stabilisation. In an aluminium vs steel scaffolding comparison, steel systems provide greater resistance in exposed or high-rise environments with higher wind loads."
                }
            }]

        };
    }

    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema(`/blog/${slug}`)),
                }}
            />
            {/* Article Schema */}
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            {faqSchema && (
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
            )}
            <Index blogDetail={blog.data} allBlogs={allBlogs.data.blogs} />;
        </>
    );
}
