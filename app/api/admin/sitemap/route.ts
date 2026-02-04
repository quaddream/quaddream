import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Sitemap from "@/app/models/sitemap";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const sitemap = await Sitemap.findOne({});
        if (!sitemap) {
            return NextResponse.json({ message: "Sitemap not found" }, { status: 404 });
        }
        return NextResponse.json({ data: sitemap, message: "Sitemap fetched successfully" }, { status: 200 });
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
        const sitemap = await Sitemap.findOneAndUpdate({}, body, { upsert: true, new: true });
        if (!sitemap) {
            return NextResponse.json({ message: "Sitemap not found" }, { status: 404 });
        }
        return NextResponse.json({ data: sitemap, message: "Sitemap updated successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}