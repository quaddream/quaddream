import React from "react";
import Index from "@/app/components/blog-detail/Index";
import { generateBreadcrumbSchema } from "@/lib/schema/breadcrumbSchema";
import Script from "next/script";
import { redirect } from "next/navigation";
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

    const bannerImage = blog?.data?.bannerSection?.image;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const imageUrl =
        bannerImage?.startsWith("http")
            ? bannerImage
            : bannerImage
                ? `${baseUrl}${bannerImage}`
                : undefined;

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
            url: `${process.env.BASE_URL}/blog/${slug}`,
            siteName: "Quad Dream",
            images: imageUrl ? [{ url: imageUrl }] : undefined,
        },
    };
}

export default async function BlogDetailsPage({ params }: Props) {
    const { slug } = await params;
    const blog = await getBlog(slug as string);
    const allBlogs = await getAllBlogs();
    if (!blog?.data) {
        redirect("/404");
    }
    const blogData = blog?.data;

    const bannerImage = blogData?.bannerSection?.image;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const imageUrl =
        bannerImage?.startsWith("http")
            ? bannerImage
            : bannerImage
                ? `${baseUrl}${bannerImage}`
                : undefined;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.quaddream.com/blog/${slug}`,
        },
        headline: blogData?.title,
        image: imageUrl ? [imageUrl] : undefined,
        author: {
            "@type": "Organization",
            name: "Quad Dream",
            url: baseUrl,
        },
        // publisher: {
        //     "@type": "Organization",
        //     name: "Quad Dream",
        //     logo: {
        //         "@type": "ImageObject",
        //         url: `${baseUrl}/assets/images/logo-main.svg`,
        //     },
        // },
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
    if (slug === "is-aluminium-scaffolding-always-safer-than-steel-scaffolding") {
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
            }, {
                "@type": "Question",
                name: "Can aluminium scaffolding be used in coastal areas of Dubai and Abu Dhabi?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, aluminium scaffolding is well suited for coastal UAE environments such as Dubai and Abu Dhabi due to its natural corrosion resistance. In a scaffolding safety comparison, aluminium performs well in humid, salt-laden air where untreated steel may degrade faster if not properly protected."
                }
            }, {
                "@type": "Question",
                name: "What scaffolding system is best for façade work on commercial buildings in the UAE?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For façade work in the UAE, aluminium mobile towers are commonly used for low to mid-rise access and repositioning tasks. For high-rise buildings or extended work durations, steel systems provide better stability. The right scaffolding material depends on height, exposure, and project duration."
                }
            }, {
                "@type": "Question",
                name: "How does scaffolding material affect worker fatigue on UAE sites?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "In UAE heat conditions, scaffolding material directly affects physical strain during handling. Aluminium scaffolding safety advantages include reduced weight, which lowers fatigue during erection and dismantling. In contrast, heavier steel systems may increase effort but offer better stability for long-duration and high-load applications."
                }
            }, {
                "@type": "Question",
                name: "What are the wind speed limitations for aluminium scaffolding in the UAE?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aluminium mobile scaffolding towers in the UAE should not be used in wind speeds exceeding safe operating limits, typically around 17 mph without additional stabilisation. In an aluminium vs steel scaffolding comparison, steel systems provide greater resistance in exposed or high-rise environments with higher wind loads."
                }
            }]

        };
    }
    // Blog 4
    if (slug === "how-to-choose-a-scaffolding-company-in-dubai-6-things-to-check-before-you-hire") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [{
                "@type": "Question",
                name: "What should I check first when hiring a scaffolding company in Dubai?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Start with OSHAD compliance and scaffold design capability. A contractor without in-house design capability will create permit delays from the outset."
                }
            }, {
                "@type": "Question",
                name: "Do scaffolding companies in Dubai handle permit applications?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Some do; some do not. Confirm at RFQ stage whether they manage this in-house or subcontract it."
                }
            }, {
                "@type": "Question",
                name: "Are scaffold inspection costs charged separately in Dubai?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Under a scaffolding rental agreement, ongoing inspection is typically excluded. Under a contracting package it should be included."
                }
            }, {
                "@type": "Question",
                name: "Why is the cheapest scaffolding company not always the best choice?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The day rate covers material hire only. Erection, inspection, adaptation, and permits all carry additional cost outside it."
                }
            }, {
                "@type": "Question",
                name: "What permits are required for scaffolding in Dubai Municipality projects?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "DM-B18 requires signed design calculations above defined height thresholds. Build the approval timeline into the pre-construction programme."
                }
            }, {
                "@type": "Question",
                name: "What is the difference between OSHAD-compliant scaffolding and standard site scaffolding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "OSHAD compliance requires documented competent persons, a scaffold register, and regular inspection records. Without these the structure does not meet UAE mainland regulatory requirements."
                }
            }, {
                "@type": "Question",
                name: "Can a scaffolding contractor in Dubai handle free zone projects?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not all contractors are approved for Trakhees-regulated zones. Confirm free zone approval status before shortlisting for JAFZA or DP World projects."
                }
            }, {
                "@type": "Question",
                name: "What documentation should a scaffolding contractor provide at handover?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As-built drawings, inspection records, scaffold register, and crew certification records. ADNOC and DEWA projects additionally require independent structural assessment documentation."
                }
            }, {
                "@type": "Question",
                name: "How long does a Dubai scaffolding permit take to approve?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timelines vary by project classification. Allow lead time for design preparation and authority review within the pre-construction programme."
                }
            }]
        };
    }
    // Blog 5
    if (slug === "cuplock-vs-ringlock-scaffolding-uae-which-system-should-you-specify") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [{
                "@type": "Question",
                name: "What is the main difference between Cuplock and Ringlock scaffolding?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuplock uses a top-cup-and-blade locking mechanism that connects horizontals at fixed 90-degree nodes. It is a fast and efficient system on repetitive structures. Ringlock uses a rosette disc that accepts up to eight connections at variable angles, making it the more capable system for complex geometry and multi-directional bracing without requiring additional fittings."
                }
            }, {
                "@type": "Question",
                name: "Which system is better for UAE high-rise construction?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "For towers with standard rectangular floor plates, Cuplock is generally the stronger choice based on erection speed and local availability. Where the tower includes curved facades, irregular setbacks, or complex cantilevered platforms, Ringlock provides structural and logistical advantages that justify the higher hire cost over the life of the project."
                }
            }, {
                "@type": "Question",
                name: "Is Ringlock scaffolding compliant with UAE safety regulations?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Both systems are compliant with OSHAD guidelines when the scaffold is properly designed, erected by competent persons, and inspected to the required standard. Compliance is a function of the design and inspection process, not of the system itself."
                }
            }, {
                "@type": "Question",
                name: "Can Cuplock and Ringlock be used together on the same project?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "They cannot be mixed within a single scaffold structure, as the two systems are structurally incompatible. However, they can be deployed in separate zones on the same project, provided each zone is independently designed and inspected."
                }
            }, {
                "@type": "Question",
                name: "Which system is more cost-effective for petrochemical projects?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ringlock is the standard choice for petrochemical and industrial turnarounds at facilities like KIZAD and Ruwais. The vessel and pipe geometry at these sites requires multi-directional access that Ringlock handles natively. Although the day rate is higher, reduced reconfiguration time means total scaffold hours are typically lower, making Ringlock the more cost-effective option across the full project lifecycle."
                }
            }]
        };
    }
    // Blog 6
    if (slug === "what-is-the-maximum-safe-height-for-an-aluminium-mobile-scaffold-tower-in-the-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the main difference between Cuplock and Ringlock scaffolding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cuplock uses a top-cup-and-blade locking mechanism that connects horizontals at fixed 90-degree nodes. It is a fast and efficient system on repetitive structures. Ringlock uses a rosette disc that accepts up to eight connections at variable angles, making it the more capable system for complex geometry and multi-directional bracing without requiring additional fittings."
                    }
                },
                {
                    "@type": "Question",
                    name: "Which system is better for UAE high-rise construction?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "For towers with standard rectangular floor plates, Cuplock is generally the stronger choice based on erection speed and local availability. Where the tower includes curved facades, irregular setbacks, or complex cantilevered platforms, Ringlock provides structural and logistical advantages that justify the higher hire cost over the life of the project."
                    }
                },
                {
                    "@type": "Question",
                    name: "Is Ringlock scaffolding compliant with UAE safety regulations?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Both systems are compliant with OSHAD guidelines when the scaffold is properly designed, erected by competent persons, and inspected to the required standard. Compliance is a function of the design and inspection process, not of the system itself."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can Cuplock and Ringlock be used together on the same project?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "They cannot be mixed within a single scaffold structure, as the two systems are structurally incompatible. However, they can be deployed in separate zones on the same project, provided each zone is independently designed and inspected."
                    }
                },
                {
                    "@type": "Question",
                    name: "Which system is more cost-effective for petrochemical projects?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ringlock is the standard choice for petrochemical and industrial turnarounds at facilities like KIZAD and Ruwais. The vessel and pipe geometry at these sites requires multi-directional access that Ringlock handles natively. Although the day rate is higher, reduced reconfiguration time means total scaffold hours are typically lower, making Ringlock the more cost-effective option across the full project lifecycle."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the maximum height of an aluminium mobile scaffold tower in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The maximum working height is 12 metres outdoors with outriggers deployed, and 8 metres indoors under BS EN 1004. Both figures are subject to manufacturer specification, duty class, and site-specific conditions that may reduce the permissible height below the standard maximum."
                    }
                },
                {
                    "@type": "Question",
                    name: "Do I need Dubai Municipality approval to use an aluminium scaffold tower above a certain height?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "BS EN 1004-compliant towers used within their certified configuration are self-verifying under the standard. However, on DM-regulated project sites, towers used above certain height thresholds may be subject to additional inspection or permit requirements depending on the project classification. Quad Dream's rental towers carry BS EN 1004 certification and are used regularly on Dubai Municipality-regulated projects."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can I stack extra frames on a rented aluminium tower to reach a higher ceiling?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Modifying a rented tower beyond the manufacturer's specified configuration voids its BS EN 1004 certification and creates an unengineered structure with no compliant load or stability data. The correct approach is to contact the rental supplier and request a tower pre-configured for the required working height."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the difference between platform height and working height for a scaffold tower?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Platform height is the level at which the operative stands. Working height adds approximately two metres for arm reach and is the figure referenced in standards as the usable access height. A tower with a 10-metre working height has its platform positioned at approximately 8 metres."
                    }
                },
                {
                    "@type": "Question",
                    name: "Are aluminium scaffold towers suitable for outdoor use in UAE desert conditions?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, when correctly configured for the environment. UAE outdoor deployments must account for shamal wind loading and sand accumulation on platforms, both of which affect stability calculations. Experienced scaffolding contractors specify outriggers even at heights below the outdoor maximum on exposed sites, and caster wheel performance on outdoor surfaces requires verification before the tower is put into service."
                    }
                }]
        };
    }
    // Blog 7
    if (slug === "what-scaffolding-system-is-best-for-high-rise-construction-in-dubai") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What scaffolding system is used for high-rise construction in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cuplock scaffolding is the primary system used for external high-rise construction in Dubai. Its node-locking mechanism provides high load capacity, rigid tie-back integration, and predictable structural performance under UAE wind conditions. It is widely deployed on repetitive floor plates and vertical elevations across major tower projects."
                    }
                },
                {
                    "@type": "Question",
                    name: "Does Dubai Municipality require scaffolding design approval for high-rise buildings?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scaffolding above defined height thresholds must be supported by structural calculations prepared by a qualified engineer prior to erection. Dubai Municipality inspection teams review compliance during installation and throughout the works. Structures erected without stamped engineering calculations are subject to enforcement action."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the load capacity of cuplock scaffolding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cuplock scaffolding can support loads up to approximately 675 kg per square metre in heavy-duty configurations. Actual capacity depends on bay dimensions, ledger spacing, tie pattern, duty classification, and total scaffold height. Final permissible loads must always be verified through project-specific engineering design."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can aluminium mobile scaffold towers be used on high-rise construction sites in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, aluminium mobile scaffold towers are suitable for interior high-rise works such as MEP installation, fit-out, and finishing activities, provided they remain within certified working height limits under BS EN 1004. External façade or structural access on high-rise buildings requires a fixed, tied scaffolding system engineered for wind loading."
                    }
                },
                {
                    "@type": "Question",
                    name: "How does wind affect scaffolding system selection for tall buildings in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Wind loading is a critical engineering consideration for tall buildings in Dubai. External scaffolding above approximately 10 metres requires calculated wind load assessment, tie-back configuration, and global stability verification. Coastal exposure and seasonal shamal winds increase lateral load demand, making tied cuplock systems the standard solution for high-rise construction."
                    }
                }
            ]
        };
    }
    // Blog 8
    if (slug === "scaffolding-rental-vs-contracting-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the difference between scaffolding rental and scaffolding contracting in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Rental provides equipment only. Contracting covers the full managed service including design, erection, inspection, and dismantling. UAE construction sites with DM permits typically require contracting rather than self-managed rental for any scaffold above ground floor."
                    }
                },
                {
                    "@type": "Question",
                    name: "Is scaffolding contracting more expensive than rental in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The hire rate appears lower under rental, but total cost includes erection labour, inspection fees, and compliance management. For projects above ground floor or on DM permit sites, contracting is often comparable or better value when the full project cost is considered."
                    }
                },
                {
                    "@type": "Question",
                    name: "Who is responsible for scaffolding safety on a Dubai construction site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Under rental, the client or main contractor is responsible for erection, inspection, and compliance. Under contracting, the scaffolding contractor assumes duty of care for the structure they design, erect, and inspect. That liability distinction is why contracting is required on high-risk and DM-regulated project scopes."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can I rent scaffolding and have Quad Dream erect it on my site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Quad Dream offers both equipment-only rental for client-managed sites and full contracting from design through dismantling. Contact the team for a site assessment to determine which model suits your project requirements and compliance obligations."
                    }
                },
                {
                    "@type": "Question",
                    name: "What certifications should a scaffolding contractor in the UAE hold?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Key credentials include Dubai Municipality registration, ISO certification, OSHAD-aligned QHSE management, and scaffolder competency certifications from recognised bodies. Quad Dream has operated since 2012 with these credentials across Dubai and the wider UAE."
                    }
                }
            ]
        };
    }
    // Blog 9
    if (slug === "short-term-vs-long-term-scaffolding-rental-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Is short-term or long-term scaffolding rental cheaper in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Short-term rental is more cost-effective for brief, defined tasks. However, if scaffolding is required for several weeks or longer, long-term rental usually becomes more economical due to lower monthly rates. The right option depends on how long the scaffolding will remain in use."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the typical minimum hire period for scaffolding rental in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Minimum hire periods vary by provider, but short-term rentals are usually arranged on a daily or weekly basis, while long-term rentals typically start from one month. The exact duration depends on project scope and contract terms."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can I switch from a short-term to a long-term scaffolding rental agreement mid-project?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, in many cases rental agreements can be adjusted if project requirements change. This depends on the provider’s terms and the stage of the project, so it is best to clarify flexibility and conversion options during the initial agreement."
                    }
                },
                {
                    "@type": "Question",
                    name: "How does the UAE summer outdoor work ban affect scaffolding rental agreements?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The UAE summer midday break can impact project timelines, especially for outdoor work. For long-term rentals, it is important to account for this period in the contract to avoid paying for idle time. Some providers may offer adjusted terms if agreed in advance."
                    }
                },
                {
                    "@type": "Question",
                    name: "What should a long-term scaffolding rental contract in the UAE include?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A long-term contract should clearly define rental duration, pricing structure, extension terms, inspection responsibilities, and safety compliance requirements. Transparent terms help avoid unexpected costs and ensure smooth project execution."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can one scaffolding provider cover multiple construction sites across the UAE under a single contract?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, depending on the provider’s capacity and coverage, scaffolding services can be arranged across multiple sites under a single agreement. This can simplify coordination, reduce administrative effort, and improve consistency across projects."
                    }
                }
            ]
        };
    }
// Blog 10
if (slug === "working-at-height-equipment-guide-uae") {
    faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the maximum safe working height for a scissor lift on a UAE construction site?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Electric scissor lifts reach a maximum working height of approximately 16 metres. OSHAD-SF requires a risk-assessed platform with guardrails and a documented method statement at any working height above 2 metres. Above 16 metres, a manlift or scaffold becomes the appropriate specification depending on terrain and access geometry."
                }
            },
            {
                "@type": "Question",
                name: "Do manlift operators need a specific licence or certification in the UAE?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. OSHAD-SF requires operators of boom lifts and manlifts to hold a recognised competency certification for the specific equipment category. On site, it is the main contractor's responsibility to verify operator certification before the machine is put into use. The rental company's delivery obligation ends at the machine."
                }
            },
            {
                "@type": "Question",
                name: "When does scaffolding become more cost-effective than a manlift rental in Dubai?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "At approximately the five-day mark, the combined cost of manlift hire, mobilisation, and demobilisation typically reaches parity with a scaffold package. For multi-trade access requirements where two or more contractors need simultaneous platform use, scaffolding is almost always the more economical solution regardless of duration."
                }
            },
            {
                "@type": "Question",
                name: "What wind speed restrictions apply to suspended access cradles in Dubai?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Operational wind speed limits for cradle systems are specified by the structural engineer for the specific building, not set as a universal industry figure. Most systems are restricted to operational use below 12.5 metres per second. Non-compliance mid-project results in an immediate operational shutdown and requires a formal restart assessment before operations can resume."
                }
            },
            {
                "@type": "Question",
                name: "How do I verify a scaffolding company in the UAE is OSHAD-SF compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Request the company's scaffold erector competency certificates, third-party inspection records, and their QHSE management documentation. An OSHAD-SF compliant scaffolding company maintains a scaffold register on every project and can provide stamped engineering drawings for any structure above defined height thresholds. Quad Dream's QHSE documentation is available on request."
                }
            }
        ]
    };
}
    // Blog 12
    if (slug === "scissor-lift-vs-aluminium-mobile-tower-which-is-better-for-indoor-access-work-in-the-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Can a scissor lift be used indoors in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, but only electric (non-diesel) models should be used indoors. Diesel scissor lifts generate exhaust emissions that are unsuitable for enclosed environments. Electric scissor lifts are standard on UAE fit-out and construction projects. Always verify floor load capacity before deployment, as most units weigh between 2,500 and 4,000 kg."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the maximum height of an aluminium mobile scaffold tower?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Standard aluminium mobile towers available for rental in the UAE typically provide working heights ranging from 6m to 10m, depending on configuration. For most indoor fit-out applications such as ceiling works, lighting installation, and HVAC maintenance, a 6m or 8m tower is usually sufficient. Quad Dream supplies multiple tower height options."
                    }
                },
                {
                    "@type": "Question",
                    name: "Do I need a licence to operate a scissor lift in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scissor lift operators should hold valid training and certification in accordance with UAE safety requirements. Most contractors arrange operator certification through their HSE departments before equipment arrives on site. Aluminium mobile towers do not require an operator licence, although safe assembly and inspection remain essential."
                    }
                },
                {
                    "@type": "Question",
                    name: "Which is cheaper to hire - a scissor lift or aluminium mobile tower in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Aluminium mobile towers are generally more affordable to hire. Daily rental rates typically range from AED 80–180 for mobile towers compared to AED 300–600 for electric scissor lifts, depending on height, duration, and project requirements. Weekly and monthly rental arrangements often provide better value for longer projects. Contact Quad Dream for a tailored quotation."
                    }
                }
            ]
        };
    }
    
    // Blog 13
    if (slug === "how-high-can-a-scissor-lift-reach-in-dubai") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How high can a scissor lift reach in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Electric scissor lifts commonly available for hire in the UAE provide platform heights ranging from 4m to 18m, with working reach extending approximately 1.8 to 2m above the platform. For most commercial fit-out and maintenance projects, 6m to 10m platform-height models are the most frequently used. Larger industrial and logistics applications may require 12m or higher units."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the weight limit on a scissor lift platform?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scissor lift platform capacity depends on the model. Compact units typically support 230 to 250 kg, while mid-range models commonly accommodate 300 to 320 kg. Larger lifts may carry 400 to 500 kg. Always check the manufacturer's nameplate before use, as exceeding the rated capacity can compromise safety and compliance."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can I hire a scissor lift by the day in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Scissor lift hire is available on daily, weekly, and monthly rental terms throughout Dubai and the UAE. Daily hire works well for short-duration maintenance tasks, while longer projects often benefit from weekly or monthly rates. Quad Dream provides flexible rental options across Dubai, Sharjah, and Abu Dhabi."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the difference between a scissor lift and a boom lift?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A scissor lift raises the platform vertically and is designed for work directly above the machine. A boom lift provides both vertical and horizontal reach, allowing operators to access areas beyond obstacles. For most indoor access and maintenance work in Dubai, a scissor lift offers a practical and cost-effective solution."
                    }
                },
                {
                    "@type": "Question",
                    name: "Do scissor lifts work on uneven ground?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Standard electric scissor lifts are intended for level, stable surfaces such as concrete floors and finished indoor environments. For outdoor applications and uneven terrain, rough-terrain scissor lifts are available with larger tyres, enhanced stability, and greater ground clearance. Ground conditions should always be assessed before equipment delivery."
                    }
                }
            ]
        };
    }

    // Blog 14
    if (slug === "scaffolding-rental-cost-uae") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How much does scaffolding rental cost per day in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scaffolding rental costs vary depending on the type of scaffold and the project requirements. Aluminium mobile towers are typically hired on a per-tower, per-day basis, while steel tube-and-coupler and Cuplock systems are usually priced according to the number of bays or the overall scaffold configuration. The final cost depends on factors such as rental duration, scaffold height, location, and any additional services included."
                    }
                },
                {
                    "@type": "Question",
                    name: "Is scaffolding rental cheaper than buying for a single project?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "In most cases, yes. Renting eliminates the upfront investment of purchasing scaffolding while also reducing responsibilities for storage, maintenance, inspections, and transportation. For one-off or short-term projects, scaffolding rental is generally the more practical and cost-effective solution, particularly when certified equipment and technical support are included."
                    }
                },
                {
                    "@type": "Question",
                    name: "Do scaffolding rental quotes in the UAE include erection and dismantling?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not always. Some suppliers provide equipment-only rental, while others offer complete scaffolding services that include erection, dismantling, and on-site supervision. Before accepting a quotation, confirm whether installation labour is included or charged separately, as this can have a significant impact on the overall project cost."
                    }
                },
                {
                    "@type": "Question",
                    name: "Why do scaffolding rental quotes vary so much between suppliers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Two scaffolding rental quotes may appear to cover the same project but include different scopes of work. Variations can result from differences in scaffold type, rental duration, transport, installation, equipment quality, engineering requirements, and additional services. Comparing itemised quotations rather than headline prices provides a more accurate picture of overall value."
                    }
                },
                {
                    "@type": "Question",
                    name: "Does scaffolding rental cost more in remote industrial zones?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, it can. Projects in locations such as KIZAD, Ruwais, or other remote industrial areas may incur additional transport and mobilisation charges due to longer travel distances and delivery times. While the exact amount varies by supplier and project, additional logistics costs can typically add 5–15% to the overall rental quotation, depending on the location and scope of work."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is included in a compliant scaffolding rental quote in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A compliant scaffolding rental quote should clearly specify the equipment being supplied along with any supporting compliance documentation. Depending on the project scope, this may include inspection records, certification details, engineering drawings or calculations where required, and documentation demonstrating that the scaffold meets applicable safety standards and project specifications. Reviewing these documents before work begins helps ensure compliance and avoids delays during site inspections."
                    }
                }
            ]
        };
    }
    
    // Blog 15
    if (slug === "manlift-vs-scissor-lift-uae-rental-guide") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the difference between a manlift and a scissor lift?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A manlift uses an articulated or telescopic boom to extend the platform up and outward, allowing it to work around obstacles and reach heights from 12 metres to 40 metres and above. A scissor lift raises the platform vertically only, suits flat indoor environments, and typically reaches between 6 and 15 metres. The choice depends on height, terrain, and whether horizontal reach is required."
                    }
                },
                {
                    "@type": "Question",
                    name: "Which is safer, a boom lift or a scissor lift?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Both machines carry equivalent regulatory requirements in the UAE and both require certified operators. Safety depends on correct equipment selection for the site conditions, not the equipment type itself. A scissor lift deployed on unsuitable ground is more hazardous than a boom lift used correctly on an appropriate site. Matching the machine to the environment is the primary safety decision."
                    }
                },
                {
                    "@type": "Question",
                    name: "Can a scissor lift be used outdoors in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, but with conditions. Standard electric scissor lifts are designed for flat, hard indoor surfaces. Rough-terrain diesel models handle outdoor environments with firmer unprepared ground. Deploying a standard electric scissor lift on sand, soft soil, or sloped outdoor ground in the UAE is a common misuse that creates tip-over risk and regulatory non-compliance."
                    }
                },
                {
                    "@type": "Question",
                    name: "What height does a scissor lift reach?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most electric scissor lifts used in UAE fit-out and MEP projects reach a working height of between 6 and 12 metres. Heavy-duty models can reach up to 15 metres. Above 15 metres, a manlift becomes the appropriate specification. Confirm the exact working height required before selecting the machine, accounting for the platform height plus operative arm reach."
                    }
                },
                {
                    "@type": "Question",
                    name: "Do I need a licence to operate a manlift in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. All aerial work platform operators in the UAE are required to hold a recognised competency certification. An IPAF (International Powered Access Federation) card is widely accepted across UAE project sites and rental suppliers. Verifying operator certification before the machine is put into use is the main contractor's responsibility on site."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the rental cost of a manlift vs scissor lift in Dubai?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Scissor lift rental cost Dubai and manlift pricing varies depending on machine type, working height, fuel configuration, rental duration, and site location. Scissor lifts carry a lower day rate than boom lifts in most configurations. For an accurate comparison, contact Quad Dream with your machine type, working height requirement, and hire duration and we will provide a fully itemised quote."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is an IPAF card and is it required in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "An IPAF card is an internationally recognised operator certification issued by the International Powered Access Federation for mobile elevating work platforms. It is widely required by main contractors and project owners across UAE construction, industrial, and infrastructure sites as proof of competency before an operator can use any aerial work platform. Quad Dream can advise on certification requirements specific to your project type and site classification."
                    }
                }
            ]
        };
    }

    // Blog 16
    if (slug === "cuplock-scaffolding-load-capacity") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the load capacity of a Cuplock standard?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "There is no single universal capacity for every Cuplock standard. Published manufacturer data can vary considerably according to tube dimensions, steel grade, length, restraint and test configuration. One published test reports a 3 m standard with a 153.47 kN failure load and 51.16 kN safety load using a 3:1 factor."
                    }
                },
                {
                    "@type": "Question",
                    name: "How much weight can Cuplock scaffolding hold?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "It depends on the scaffold's design and load class. Under EN 12811-1, working-area load classes range from 0.75 kN/m² to 6.00 kN/m², or approximately 75 to 600 kg/m². These are working-area classifications and should not be interpreted as the capacity of an individual standard."
                    }
                },
                {
                    "@type": "Question",
                    name: "What is the safe working load of Cuplock scaffolding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The safe working load depends on the component or complete scaffold design and the applicable safety methodology. It should be established from certified manufacturer data and engineering calculations rather than assumed from a generic Cuplock rating."
                    }
                },
                {
                    "@type": "Question",
                    name: "What safety factor is used for Cuplock scaffolding?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The applicable factor depends on the standard, component and design method being used. OSHA requires scaffold components to support their own weight plus at least four times the maximum intended load applied to them, while published Cuplock manufacturer test data may use a 3:1 factor."
                    }
                },
                {
                    "@type": "Question",
                    name: "Is Cuplock scaffolding suitable for heavy industrial loads?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Cuplock systems can be designed for demanding construction and industrial applications, but suitability depends on the required load, scaffold geometry, component specifications, bracing, ties, foundation and engineering design. Higher-load applications should be specifically designed rather than selected using a generic capacity figure."
                    }
                },
                {
                    "@type": "Question",
                    name: "What UAE standards apply to scaffolding load capacity?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The applicable requirements depend on the project, authority and contract specification. EN 12811-1 may be referenced for scaffold performance and working-area load classes, while Dubai projects are also subject to the applicable Dubai Building Code and project-specific requirements."
                    }
                },
                {
                    "@type": "Question",
                    name: "How is Cuplock load capacity calculated on site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The calculation starts by identifying the scaffold configuration and all expected loads, including workers, tools, materials and scaffold self-weight. The engineer then assesses how these loads are distributed through the scaffold and checks the standards, ledgers, transoms, connections, bracing, ties, base jacks and supporting ground against their applicable design capacities."
                    }
                }
            ]
        };
    }

    // Blog 17
    if (slug === "scaffolding-rental-uae-7-mistakes-to-avoid") {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the biggest mistake contractors make when renting scaffolding in the UAE?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "One of the biggest mistakes is requesting a quotation without clearly defining the scaffold's height, loading, access, duration and site requirements. This can result in mismatched quotations, unexpected variations and delays during erection."
                    }
                },
                {
                    "@type": "Question",
                    name: "Is scaffolding erection and dismantling included in the rental price?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily. Erection and dismantling may be included or charged separately depending on the supplier and agreement. These services should be clearly identified in the quotation and rental contract before the order is confirmed."
                    }
                },
                {
                    "@type": "Question",
                    name: "How often should rented scaffolding be inspected on a UAE site?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Inspection requirements depend on the applicable authority, project and safety procedure. As a general site-control measure, scaffolding should be inspected before use and following modifications, adverse weather, impact or damage, as well as at required periodic intervals."
                    }
                },
                {
                    "@type": "Question",
                    name: "What safety standards apply to scaffolding rental in Dubai and Abu Dhabi?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Requirements depend on the project's location and governing authority. Dubai construction projects are subject to the applicable Dubai construction safety framework, while Abu Dhabi projects follow the relevant Abu Dhabi occupational safety requirements. The project-specific authority and approved HSE procedures should always be confirmed before work begins."
                    }
                },
                {
                    "@type": "Question",
                    name: "How can I avoid delays when renting scaffolding for a construction project?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Define the scaffold requirements early, confirm the system and quantities, coordinate delivery and site access, and establish the erection and dismantling schedule before the rental begins. It is also important to plan for modifications if the construction sequence changes."
                    }
                },
                {
                    "@type": "Question",
                    name: "What should be included in a scaffolding rental contract?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A rental contract should clearly identify the scaffold system, quantities, rental period, delivery and collection, erection and dismantling, inspection responsibilities, extension rates, damage or replacement terms and the process for approving variations."
                    }
                }
            ]
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
