import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import FAQ from "@/app/models/Faq";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const faq = await FAQ.findOne({});
        if (!faq) {
            return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
        }
        return NextResponse.json({data:faq,message:"FAQ fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const faq = await FAQ.findOne({})
        if (!faq) {
            await FAQ.create(body);
            return NextResponse.json({message:"FAQ created successfully"}, { status: 201 });
        }
        faq.bannerSection = body.bannerSection;
        faq.firstSection = body.firstSection;
        faq.metaTitle = body.metaTitle;
        faq.metaDescription = body.metaDescription;
        await faq.save();
        return NextResponse.json({message:"FAQ updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}