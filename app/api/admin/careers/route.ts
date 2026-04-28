import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Project from "@/app/models/Project";
import { verifyAdmin } from "@/lib/verifyAdmin";
import "@/app/models/JobType";
import "@/app/models/Department";
import Career from "@/app/models/Career";


export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        const slug = request.nextUrl.searchParams.get("slug");
        if (id) {
            const career = await Career.findOne({}).populate("careers.firstSection.department", "name _id").populate("careers.firstSection.jobType", "name _id");
            const foundCareer = career.careers.find((career: { _id: string }) => career._id.toString() === id);
            if (!foundCareer) {
                return NextResponse.json({ message: "Career not found" }, { status: 404 });
            }
            return NextResponse.json({ data: foundCareer, message: "Career fetched successfully" }, { status: 200 });
        } else if (slug) {
            const career = await Career.findOne({}).populate("careers.firstSection.department", "name _id").populate("careers.firstSection.department", "name _id");
            const foundCareer = career.careers.find((career: { slug: string }) => career.slug === slug);
            if (!foundCareer) {
                return NextResponse.json({ message: "Career not found" }, { status: 404 });
            }
            return NextResponse.json({ data: foundCareer, message: "Career fetched successfully" }, { status: 200 });
        } else {
            const career = await Career.findOne({}).populate("careers.firstSection.department", "name _id").populate("careers.firstSection.jobType", "name _id");
            if (!career) {
                return NextResponse.json({ message: "Career not found" }, { status: 404 });
            }
            return NextResponse.json({ data: career, message: "Career fetched successfully" }, { status: 200 });
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        const id = request.nextUrl.searchParams.get("id");
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();

        const career = await Career.findOne({})
        if (id) {
            const foundCareer = career.careers.find((career: { _id: string }) => career._id.toString() === id);
            if (!foundCareer) {
                return NextResponse.json({ message: "Career not found" }, { status: 404 });
            }
            foundCareer.firstSection = body.firstSection;
            foundCareer.secondSection = body.secondSection;
            foundCareer.thirdSection = body.thirdSection;
            foundCareer.fourthSection = body.fourthSection;
            foundCareer.slug = body.slug;
            foundCareer.metaTitle = body.metaTitle;
            foundCareer.metaDescription = body.metaDescription;
            await career.save();
            return NextResponse.json({ data: career, message: "Career updated successfully" }, { status: 200 });
        }
        if (!career) {
            await Career.create({ ...body });
            return NextResponse.json({ data: career, message: "Career created successfully" }, { status: 200 });
        } else {
            await Career.findOneAndUpdate({}, body, { upsert: true, new: true });
            return NextResponse.json({ data: career, message: "Career updated successfully" }, { status: 200 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
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
        const career = await Career.findOne({});
        career.careers.push(body);
        await career.save();
        return NextResponse.json({ data: career, message: "Career created successfully" }, { status: 200 });
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
        const career = await Career.findOne({});
        if (!career) {
            return NextResponse.json({ message: "Project not found" }, { status: 404 });
        }
        career.careers = career.careers.filter((career: { _id: string }) => career._id.toString() !== id);
        await career.save();
        return NextResponse.json({ data: career, message: "Career deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}


