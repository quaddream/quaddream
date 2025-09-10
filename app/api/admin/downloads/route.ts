import { NextRequest, NextResponse } from "next/server";
import Downloads from "@/app/models/Downloads";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if(!isAdmin){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const body = await req.json();
        if (!body) {
            return NextResponse.json({ error: "Images is required" }, { status: 400 });
        }
        const downloads = await Downloads.findOne({});
        if(downloads){
            const downloadsCategory = downloads.categories.find((category:{_id:string, category:string})=>category._id == id);
            if(downloadsCategory){
                downloadsCategory.files = body;
                await downloads.save();
                return NextResponse.json({ message: "downloads updated successfully" }, { status: 200 });
            }
        }else{
            return NextResponse.json({ message: "Error updating downloads" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error adding downloads", error);
        return NextResponse.json({ error: "Error adding downloads" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const downloads = await Downloads.findOne({});
        if(id){
            const downloadsCategory = downloads.categories.find((category:{_id:string, category:string})=>category._id == id);
            if(downloadsCategory){
                return NextResponse.json({ data: downloadsCategory }, { status: 200 });
            }else{
               return NextResponse.json({ message: "Error fetching downloads" }, { status: 500 }); 
            }
        }else if(downloads && !id){
            return NextResponse.json({ data: downloads }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching downloads" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error fetching downloads" }, { status: 500 });
    }
}
