import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Products from "@/app/models/Product";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const products = await Products.findOne({});
        if (!products) {
            return NextResponse.json({ message: "Products not found" }, { status: 404 });
        }
        return NextResponse.json({data:products.items,message:"Products fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const products = await Products.findOne({});
        if (!products) {
            await Products.create({
                items: body.productSection.items
            });
            return NextResponse.json({ message: "Products created successfully" }, { status: 200 });
        }
        products.items = body.productSection.items;
        await products.save();
        return NextResponse.json({ message: "Products updated successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}