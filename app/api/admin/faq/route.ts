import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Faq from "@/app/models/Faq";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const faq = await Faq.findOne({});
        if (!faq) {
            return NextResponse.json({ message: "FAQ not found" }, { status: 404 });
        }
        const id = request.nextUrl.searchParams.get("id");
        if(id){
            const toUpdateFaq = faq.faq.find((item: { _id: string; })=>item._id.toString() === id);
            if (!toUpdateFaq) {
                return NextResponse.json({message:"FAQ not found"}, { status: 404 });
            }
            return NextResponse.json({data:toUpdateFaq.items,message:"FAQ fetched successfully"}, { status: 200 });
        }
        return NextResponse.json({data:faq,message:"FAQ fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        console.log(body);
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        const faq = await Faq.findOne({})
        if (!faq) {
            return NextResponse.json({message:"FAQ not found"}, { status: 404 });
        }
        if(id){
            const toUpdateFaq = faq.faq.find((item: { _id: string; })=>item._id.toString() === id);
            if (!toUpdateFaq) {
                return NextResponse.json({message:"FAQ not found"}, { status: 404 });
            }
            toUpdateFaq.items = body.faqSection.items;
            await faq.save();
            return NextResponse.json({message:"FAQ item updated successfully"}, { status: 200 });
        }else{
            faq.faq.push({title:body.name,items:[]})
            await faq.save();
            return NextResponse.json({message:"FAQ updated successfully"}, { status: 200 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        const faq = await Faq.findOne({})
        if (!faq) {
            return NextResponse.json({message:"FAQ not found"}, { status: 404 });
        }
        const toUpdateFaq = faq.faq.find((item: { _id: string; })=>item._id.toString() === id);
        if (!toUpdateFaq) {
            return NextResponse.json({message:"FAQ not found"}, { status: 404 });
        }
        toUpdateFaq.title = body.name;
        await faq.save();
        return NextResponse.json({message:"FAQ item updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        const faq = await Faq.findOne({})
        if (!faq) {
            return NextResponse.json({message:"FAQ not found"}, { status: 404 });
        }
        const toUpdateFaq = faq.faq.find((item: { _id: string; })=>item._id.toString() === id);
        if (!toUpdateFaq) {
            return NextResponse.json({message:"FAQ not found"}, { status: 404 });
        }
        faq.faq = faq.faq.filter((item: { _id: string; })=>item._id.toString() !== id);
        await faq.save();
        return NextResponse.json({message:"FAQ item deleted successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

