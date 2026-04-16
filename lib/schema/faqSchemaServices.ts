export const generateFaqSchema = (faqSection: any) => {
    if (!faqSection?.items) return null;

    const allItems = faqSection.items.flatMap((cat: any) => cat);

    const mainEntity = allItems
        .filter((item: any) => item.question && item.answer)
        .map((item: any) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        }));

    if (!mainEntity.length) return null;

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity,
    };
};