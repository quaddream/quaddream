import Script from "next/script";
import { reviewSchema } from "@/lib/schema/review";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Script
                id="review-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(reviewSchema),
                }}
            />
            {children}
        </>
    );
}
