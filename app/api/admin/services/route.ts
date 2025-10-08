import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Service from "@/app/models/Service";
import Product from "@/app/models/Product";
import { verifyAdmin } from "@/lib/verifyAdmin";
import mongoose from "mongoose";

interface ProductItem {
    _id: mongoose.Types.ObjectId;
    title: string;
    // any other product fields
  }

interface ProductSection2Item {
    _id: mongoose.Types.ObjectId | string;
  }
  
  interface ProductSection2 {
    title: string;
    items: ProductSection2Item[];
  }



export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        const slug = request.nextUrl.searchParams.get("slug");

        if (id) {
            const service = await Service.findOne({})
            const foundService = service.thirdSection.items.find((service: { _id: string }) => service._id.toString() === id);
            if (!foundService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            const productIds = foundService.productSection.items.map(
                (item: { _id: mongoose.Types.ObjectId | string }) => item._id
              );

            
              // 2. Fetch only products that are in productIds
              const products = await Product.findOne({})
            const productData = products.items.filter((item: { _id: mongoose.Types.ObjectId }) =>
                productIds.map((id: string) => id.toString()).includes(item._id.toString())
              );
              const updatedProductSection = {
                ...foundService.productSection.toObject(),
                items: productData, // only the relevant product documents
              };
            
              // 4. Construct the response with the updated productSection
              const responseData = {
                ...foundService.toObject(),
                productSection: updatedProductSection,
              };
            return NextResponse.json({ data: responseData, message: "Service fetched successfully" }, { status: 200 });
        }

        else if (slug) {
            const service = await Service.findOne({});
            const foundService = service.thirdSection.items.find((service: { slug: string }) => service.slug === slug);
            if (!foundService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            const productIds = foundService.productSection.items.map(
                (item: { _id: mongoose.Types.ObjectId | string }) => item._id
              );

              const productIds2 = foundService.productSection2.sections
  .map((section: { items: { _id: mongoose.Types.ObjectId | string }[] }) => section.items.map((item: { _id: mongoose.Types.ObjectId | string }) => item._id))
  .flat(); // <-- flatten array of arrays

              
              console.log("productIds2", productIds2)

            
              // 2. Fetch only products that are in productIds
              const products = await Product.findOne({})
            const productData = products.items.filter((item: { _id: mongoose.Types.ObjectId }) =>
                productIds.map((id: string) => id.toString()).includes(item._id.toString())
              );

              const productData2 = products.items.filter((item: { _id: mongoose.Types.ObjectId }) =>
                productIds2.map((id: string) => id.toString()).includes(item._id.toString())
              );

              console.log("productData2", productData2)
              
              const updatedProductSection = {
                ...foundService.productSection.toObject(),
                items: productData, // only the relevant product documents
              };
              
              const updatedProductSection2 = foundService.productSection2.sections.map(
  (section: ProductSection2) => ({
    title: section.title, // explicitly keep the title
    items: section.items
      .map((item) =>
        products.items.find((p: ProductItem) => p._id.toString() === item._id.toString())
      )
      .filter(Boolean), // remove nulls
  })
);
              
              

              // 4. Construct the response with the updated productSection
              const responseData = {
                ...foundService.toObject(),
                productSection: updatedProductSection,
                productSection2: {
                    title:foundService.productSection2.title,
                    sections: updatedProductSection2, // updated sections with full product data
                  }
              };
            return NextResponse.json({ data: responseData, message: "Service fetched successfully" }, { status: 200 });
        } else {
            const service = await Service.findOne({});
            if (!service) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            return NextResponse.json({ data: service, message: "Service fetched successfully" }, { status: 200 });
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
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        if (id) {
            const service = await Service.findOne({});
            const foundService = service.thirdSection.items.find((service: { _id: string }) => service._id.toString() == id);
            if (!foundService) {
                return NextResponse.json({ message: "Service not found" }, { status: 404 });
            }
            console.log("body", body)
            foundService.metaTitle = body.metaTitle;
            foundService.metaDescription = body.metaDescription;
            foundService.bannerSection = body.bannerSection;
            foundService.firstSection = body.firstSection;
            foundService.secondSection = body.secondSection;
            foundService.productSection.title = body.productSection.title;
            foundService.productSection.items = [...body.productSection.items];
            foundService.productSection2 = body.productSection2;
            foundService.fourthSection = body.fourthSection;
            

            await service.save();
            return NextResponse.json({ data: service, message: "Service updated successfully" }, { status: 200 });
        }
        const service = await Service.findOneAndUpdate({}, body, { upsert: true, new: true });
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({ data: service, message: "Service updated successfully" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}