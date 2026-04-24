import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import JobType from "@/app/models/JobType";

export async function GET() {
    try {
        await connectDB();
        const jobType = await JobType.find({});
        if (!jobType) {
            return NextResponse.json({ message: "JobType not found" }, { status: 404 });
        }
        return NextResponse.json({data:jobType,message:"JobType fetched successfully"}, { status: 200 });
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
        const jobType = await JobType.create({name});
        if (!jobType) {
            return NextResponse.json({ message: "JobType not found" }, { status: 404 });
        }
        return NextResponse.json({data:jobType,message:"JobType created successfully"}, { status: 200 });
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
        const jobType = await JobType.findByIdAndUpdate(id,{name},{upsert:true,new:true});
        if (!jobType) {
            return NextResponse.json({ message: "JobType not found" }, { status: 404 });
        }
        return NextResponse.json({data:jobType,message:"Department updated successfully"}, { status: 200 });
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
        const jobType = await JobType.findByIdAndDelete(id);
        if (!jobType) {
            return NextResponse.json({ message: "JobType not found" }, { status: 404 });
        }
        return NextResponse.json({data:jobType,message:"JobType deleted successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
