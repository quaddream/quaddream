interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSection {
    items?: FaqItem[][];
}

export const generateFaqSchema = (faqSection: FaqSection) => {
    if (!faqSection?.items) return null;

    const allItems = faqSection.items.flatMap((cat: FaqItem[]) => cat);

    const mainEntity = allItems
        .filter((item: FaqItem) => item.question && item.answer)
        .map((item: FaqItem) => ({
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