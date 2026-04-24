import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Department from "@/app/models/Department";

export async function GET() {
    try {
        await connectDB();
        const department = await Department.find({});
        if (!department) {
            return NextResponse.json({ message: "Department not found" }, { status: 404 });
        }
        return NextResponse.json({data:department,message:"Department fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const {name} = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const department = await Department.create({name});
        if (!department) {
            return NextResponse.json({ message: "Department not found" }, { status: 404 });
        }
        return NextResponse.json({data:department,message:"Department created successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const {name} = await request.json();
        const id = request.nextUrl.searchParams.get("id");
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const department = await Department.findByIdAndUpdate(id,{name},{upsert:true,new:true});
        if (!department) {
            return NextResponse.json({ message: "Department not found" }, { status: 404 });
        }
        return NextResponse.json({data:department,message:"Department updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const department = await Department.findByIdAndDelete(id);
        if (!department) {
            return NextResponse.json({ message: "Department not found" }, { status: 404 });
        }
        return NextResponse.json({data:department,message:"Department deleted successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
