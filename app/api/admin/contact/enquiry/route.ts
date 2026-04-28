import connectDB from "@/lib/mongodb";
import ContactEnquiry from "@/app/models/ContactEnquiry";


export async function GET(req: Request) {
    await connectDB()
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    const enquiries = await ContactEnquiry.find()
        .skip(skip)
        .limit(limit)
        .sort({ _id: -1 })
        .lean();

    const total = await ContactEnquiry.countDocuments();

    return Response.json({
        data: enquiries,
        totalPages: Math.ceil(total / limit),
    });
}