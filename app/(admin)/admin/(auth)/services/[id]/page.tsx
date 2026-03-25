import { getIsOldDesignService } from "@/lib/getIsOldDesignService";
import OldDesign from './OldDesign'
import NewDesign from './NewDesign'

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ServicePage({ params }: Props) {
    const { id } = await params;

    if (!id) return null;

    const isOldDesign = await getIsOldDesignService(id);

    if (isOldDesign) {
        return <OldDesign />;
    }

    return <NewDesign />;
}