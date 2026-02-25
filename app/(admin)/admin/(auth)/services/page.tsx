"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { RiAiGenerateText } from 'react-icons/ri'
import { useRefetchServices } from '@/app/contexts/refetchServices';
import { toast } from 'sonner';

interface ServiceFormProps {

    metaTitle: string;
    metaDescription: string;
    bannerSection: {
        image: string;
        imageAlt: string;
        title: string;
    };
    firstSection: {
        title: string;
        description: string;
    };
    secondSection: {
        title: string;
        description: string;
        image: string;
        imageAlt: string;
    };
    thirdSection: {
        title: string;
        items: {
            thumbnail: string;
            thumbnailAlt: string;
            thumbnailTitle: string;
            slug: string;
        }[];
    };
}

const ServiceMainPage = () => {


    const { register, handleSubmit, setValue, control, formState: { errors }, watch } = useForm<ServiceFormProps>();

    const { refetchServices, setRefetchServices } = useRefetchServices();

    const { fields: thirdSectionItems, append: thirdSectionAppend, remove: thirdSectionRemove } = useFieldArray({
        control,
        name: "thirdSection.items"
    });


    const handleAddService = async (data: ServiceFormProps) => {
        try {
            const response = await fetch(`/api/admin/services`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                setRefetchServices(!refetchServices);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding service", error);
        }
    }

    const fetchServiceData = async () => {
        try {
            const response = await fetch(`/api/admin/services`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSection.items", data.data.thirdSection.items);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching service data", error);
        }
    }


    const handleAutoGenerate = (title: string, index: number) => {
        console.log(title)
        if (!title) return;
        const slug = title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
        setValue(`thirdSection.items.${index}.slug`, slug);
    };



    useEffect(() => {
        fetchServiceData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddService)}>


                <AdminItemContainer>
                    <Label className='' main>Banner Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div className='grid grid-cols-2 gap-2 relative pb-5'>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Image</Label>
                                    <Controller
                                        name={`bannerSection.image`}
                                        control={control}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <ImageUploader
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.bannerSection?.image && (
                                        <p className="text-red-500">{errors.bannerSection?.image.message}</p>
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='font-bold'>Alt Tag</Label>
                                        <Input type='text' placeholder='Alt Tag' {...register(`bannerSection.imageAlt`, {
                                            required: "Value is required"
                                        })} />
                                        {errors.bannerSection?.imageAlt && <p className='text-red-500'>{errors.bannerSection?.imageAlt.message}</p>}
                                    </div>
                                </div>


                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='font-bold'>Title</Label>
                                        <Input type='text' placeholder='Title' {...register(`bannerSection.title`, {
                                            required: "Value is required"
                                        })} />
                                        {errors.bannerSection?.title && <p className='text-red-500'>{errors.bannerSection?.title.message}</p>}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>First Section</Label>
                    <div className='p-5 flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("firstSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.firstSection?.title && <p className='text-red-500'>{errors.firstSection?.title.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("firstSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.firstSection?.description && <p className='text-red-500'>{errors.firstSection?.description.message}</p>}
                            </div>
                        </div>

                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Second Section</Label>
                    <div className='p-5 flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("secondSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.secondSection?.description && <p className='text-red-500'>{errors.secondSection?.description.message}</p>}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label className='font-bold'>Image</Label>
                                <Controller
                                    name={`secondSection.image`}
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.secondSection?.image && (
                                    <p className="text-red-500">{errors.secondSection?.image.message}</p>
                                )}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`secondSection.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.secondSection?.imageAlt && <p className='text-red-500'>{errors.secondSection?.imageAlt.message}</p>}
                                </div>
                            </div>

                        </div>

                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>Third Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                            </div>
                        </div>

                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>
                                    {thirdSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20  pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => thirdSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Image</Label>
                                                        <Controller
                                                            name={`thirdSection.items.${index}.thumbnail`}
                                                            control={control}
                                                            rules={{ required: "Image is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                            )}
                                                        />
                                                        {errors.thirdSection?.items?.[index]?.thumbnail && (
                                                            <p className="text-red-500">{errors.thirdSection?.items?.[index]?.thumbnail.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`thirdSection.items.${index}.thumbnailAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.thirdSection?.items?.[index]?.thumbnailAlt && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.thumbnailAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>


                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-4'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`thirdSection.items.${index}.thumbnailTitle`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.thirdSection?.items?.[index]?.thumbnailTitle && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.thumbnailTitle.message}</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-2'>

                                                        <div className='flex gap-2 items-center'><Label className='font-bold'>Slug</Label>
                                                            <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit' onClick={() => handleAutoGenerate(watch(`thirdSection.items.${index}.thumbnailTitle`), index)}>
                                                                <p>Auto Generate</p>
                                                                <RiAiGenerateText />
                                                            </div></div>

                                                        <Input type='text' placeholder='Slug' {...register(`thirdSection.items.${index}.slug`, {
                                                            validate: (value) =>
                                                                !value || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) ||
                                                                "Only lowercase letters, numbers, and hyphens allowed (no leading/trailing hyphens)."
                                                        })} />
                                                        {errors.thirdSection?.items?.[index]?.slug && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.slug.message}</p>}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => thirdSectionAppend({ thumbnail: "", thumbnailAlt: "", thumbnailTitle: "", slug: "" })}>Add Item</Button>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label main>SEO</Label>
                    <div className="p-5 flex flex-col gap-2">
                        <div className='flex flex-col gap-2'>
                            <Label className='font-bold'>Title</Label>
                            <Input type='text' placeholder='' {...register("metaTitle")} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label className='font-bold'>Description</Label>
                            <Input type='text' placeholder='' {...register("metaDescription")} />
                        </div>
                    </div>
                </AdminItemContainer>

                <div className='flex justify-center'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default ServiceMainPage