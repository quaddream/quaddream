"use client";

import { useEffect } from "react";
import { useForm, useFieldArray, Controller, Control } from "react-hook-form";
import AdminItemContainer from "@/app/components/common/AdminItemContainer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ui/image-uploader";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

interface ChildrenFieldsProps {
    control: Control<SitemapFormProps>;
    parentIndex: number;
}

interface SitemapFormProps {
    metaTitle: string;
    metaDescription: string;

    bannerSection: {
        image: string;
        imageAlt: string;
        title: string;
    };

    sitemap: {
        label: string;
        link?: string;
        href?: string;
        children?: {
            label: string;
            href: string;
        }[];
    }[];
}

const SitemapAdmin = () => {
    const { register, handleSubmit, control, setValue } = useForm<SitemapFormProps>();

    const {
        fields: sitemapFields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "sitemap",
    });

    //  API Handlers
    const handleSave = async (data: SitemapFormProps) => {
        try {
            const res = await fetch("/api/admin/sitemap", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            res.ok ? toast.success(result.message) : toast.error(result.message);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchData = async () => {
        try {
            const res = await fetch("/api/admin/sitemap");
            const data = await res.json();

            if (res.ok) {
                setValue("metaTitle", data.data.metaTitle || "");
                setValue("metaDescription", data.data.metaDescription || "");
                setValue("bannerSection", data.data.bannerSection || {});
                setValue("sitemap", data.data.sitemap || []);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AdminItemContainer>
            <Label main>Sitemap Page</Label>

            <form onSubmit={handleSubmit(handleSave)} className="p-5 flex flex-col gap-6">
                <div className="border border-black/20 p-4 rounded-md flex flex-col gap-3">
                    <Label className="font-bold">Banner Section</Label>

                    <Controller
                        name="bannerSection.image"
                        control={control}
                        render={({ field }) => <ImageUploader value={field.value} onChange={field.onChange} />}
                    />

                    <Input placeholder="Banner Image Alt" {...register("bannerSection.imageAlt")} />

                    <Input placeholder="Banner Title" {...register("bannerSection.title")} />
                </div>

                <div className="border border-black/20 p-4 rounded-md flex flex-col gap-4">
                    <Label className="font-bold">Sitemap Links</Label>

                    {sitemapFields.map((field, index) => (
                        <div key={field.id} className="border border-black/20 p-3 rounded-md relative">
                            <RiDeleteBinLine
                                className="absolute top-2 right-2 text-red-600 cursor-pointer"
                                onClick={() => remove(index)}
                            />

                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <Input placeholder="Label" {...register(`sitemap.${index}.label`)} />

                                <Input placeholder="Parent Link (optional)" {...register(`sitemap.${index}.link`)} />
                            </div>

                            <ChildrenFields control={control} parentIndex={index} />
                        </div>
                    ))}

                    <Button
                        className="w-fit"
                        type="button"
                        addItem
                        onClick={() => append({ label: "", link: "", children: [] })}
                    >
                        Add Sitemap Item
                    </Button>
                </div>

                <AdminItemContainer>
                    <Label main>SEO</Label>
                    <div className="flex flex-col gap-2 p-5">
                        <div className="border border-black/20 p-4 rounded-md flex flex-col gap-3">
                            <Label className="font-bold">Title</Label>

                            <Input placeholder="" {...register("metaTitle")} />

                            <Label className="font-bold">Description</Label>
                            <Input placeholder="" {...register("metaDescription")} />
                        </div>
                    </div>
                </AdminItemContainer>

                <Button className="text-white text-sm" type="submit">
                    Save Sitemap Page
                </Button>
            </form>
        </AdminItemContainer>
    );
};

export default SitemapAdmin;

const ChildrenFields = ({ control, parentIndex }: ChildrenFieldsProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `sitemap.${parentIndex}.children`,
    });

    return (
        <div className="mt-4 ml-6 pl-4 border-l-2 border-dashed border-gray-300">
            <Label className="font-medium text-sm text-gray-600">
                Children
            </Label>

            <div className="mt-2 flex flex-col gap-2 bg-gray-50 rounded-md">
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center"
                    >
                        <Input
                            placeholder="Child Label"
                            {...control.register(
                                `sitemap.${parentIndex}.children.${index}.label`
                            )}
                        />

                        <Input
                            placeholder="Child URL"
                            {...control.register(
                                `sitemap.${parentIndex}.children.${index}.href`
                            )}
                        />

                        <RiDeleteBinLine
                            className="text-red-600 cursor-pointer"
                            onClick={() => remove(index)}
                        />
                    </div>
                ))}

                <Button
                    className="w-fit"
                    type="button"
                    addItem
                    onClick={() => append({ label: "", href: "" })}
                >
                    Add Child
                </Button>
            </div>
        </div>

    );
};
