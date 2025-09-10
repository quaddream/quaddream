import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Downloads from "@/app/models/Downloads";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const { name } = await req.json();
        const downloads = await Downloads.findOne({})
        if(downloads){
            downloads.categories.push({ category: name, files: [] });
            await downloads.save();
            return NextResponse.json({ message: "category added successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error adding category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error adding category" }, { status: 500 });
    }
}

export async function PATCH(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const { name } = await req.json();
        const downloads = await Downloads.findOne({});
        if(downloads){
            const category = downloads.categories.find((category:{_id:string, category:string})=>category._id == id);
            if(category){
                category.category = name;
                await downloads.save();
                return NextResponse.json({ message: "category updated successfully" }, { status: 200 });
            }
        }else{
            return NextResponse.json({ message: "Error updating category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error updating category" }, { status: 500 });
    }
}

export async function DELETE(req:NextRequest) {
    try {
        await connectDB();
        const isAdmin = await verifyAdmin(req);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get("id");
        const downloads = await Downloads.findOne({});
        if(downloads){
            downloads.categories = downloads.categories.filter((category:{_id:string, category:string})=>category._id != id);
            await downloads.save();
            return NextResponse.json({ message: "category deleted successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error deleting category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error deleting category" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const downloads = await Downloads.findOne({});
        if(downloads){
            return NextResponse.json({ data: downloads.categories }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error fetching category" }, { status: 500 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error fetching category" }, { status: 500 });
    }
}
