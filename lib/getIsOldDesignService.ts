import Service from "@/app/models/Service";

export const getIsOldDesignService = async (id: string) => {
    if (!id) return false;

    const service = await Service.findOne({});
    if (!service) return false;

    const foundService = service.thirdSection?.items?.find(
        (item: { _id: string }) => item._id.toString() === id
    );

    if (!foundService) return false;

    return foundService?.type === "old-design" || foundService?.type === undefined;
};