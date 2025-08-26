import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Service from "@/app/models/Service";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        
        if(id){
            const service = await Service.findOne({});
        const foundService = service.thirdSection.items.find((service: {_id:string}) => service._id.toString() === id);
            if (!foundService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            return NextResponse.json({data:foundService,message:"Service fetched successfully"}, { status: 200 });
        }

        const service = await Service.findOne({});
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({data:service,message:"Service fetched successfully"}, { status: 200 });
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
        const id = request.nextUrl.searchParams.get("id");
        if(id){
            const service = await Service.findOne({});
            const foundService = service.thirdSection.items.find((service: {_id:string}) => service._id.toString() == id);
            if (!foundService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            console.log(body.firstSection)
            foundService.metaTitle = body.metaTitle;
            foundService.metaDescription = body.metaDescription;
            foundService.bannerSection = body.bannerSection;
            foundService.firstSection = body.firstSection;
            foundService.secondSection = body.secondSection;
            foundService.productSection = body.productSection;
            foundService.fourthSection = body.fourthSection;
            
            await service.save();
            return NextResponse.json({data:service,message:"Service updated successfully"}, { status: 200 });
        }
        const service = await Service.findOneAndUpdate({}, body,{upsert:true,new:true});
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({data:service,message:"Service updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}