import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Downloads from "@/app/models/Downloads";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if(!isAdmin){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { banner, bannerAlt, pageTitle, metaTitle, metaDescription } = await req.json();
        const downloads = await Downloads.findOne({});
        if(downloads){
            downloads.banner = banner;
            downloads.bannerAlt = bannerAlt;
            downloads.pageTitle = pageTitle;
            downloads.metaTitle = metaTitle;
            downloads.metaDescription = metaDescription;
            await downloads.save();
            return NextResponse.json({ message: "meta section updated successfully" }, { status: 200 });
        }else{
            const downloads = new Downloads({
                banner,
                bannerAlt,
                pageTitle,
                metaTitle,
                metaDescription,
            });
            await downloads.save();
            return NextResponse.json({ message: "meta section updated successfully" }, { status: 200 });
        }
    } catch (error) {
        console.log("Error updating meta section", error)
        return NextResponse.json({ message: "Error updating meta section" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const downloads = await Downloads.findOne({});
        if(downloads){
            return NextResponse.json({ data: downloads }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching meta section" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error fetching meta section", error)
        return NextResponse.json({ message: "Error fetching meta section" }, { status: 500 });
    }
}
