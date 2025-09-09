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
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

interface IndividualServiceFormProps {

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
        image: string;
        imageAlt: string;
    };
    secondSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
            title: string;
        }[];
    };
    productSection: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[];
    };
    fourthSection: {
        title: string;
        description: string;
        items: {
            logo: string;
            logoAlt: string;
            title: string;
        }[];
    };
}

const IndividualService = () => {

    const { id } = useParams();


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<IndividualServiceFormProps>();


    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });


    const { fields: productSectionItems, append: productSectionAppend, remove: productSectionRemove } = useFieldArray({
        control,
        name: "productSection.items"
    });

    const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
        control,
        name: "fourthSection.items"
    });




    const handleAddIndividualService = async (data: IndividualServiceFormProps) => {
        try {
            const response = await fetch(`/api/admin/services?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding individual service", error);
        }
    }

    const fetchIndividualServiceData = async () => {
        try {
            const response = await fetch(`/api/admin/services?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("secondSection.items", data.data.secondSection.items);
                setValue("productSection", data.data.productSection);
                setValue("productSection.items", data.data.productSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSection.items", data.data.fourthSection.items);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching individual service data", error);
        }
    }



    useEffect(() => {
        fetchIndividualServiceData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddIndividualService)}>


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
                            <div className='flex flex-col gap-2'>
                                <Label className='font-bold'>Image</Label>
                                <Controller
                                    name={`firstSection.image`}
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.firstSection?.image && (
                                    <p className="text-red-500">{errors.firstSection?.image.message}</p>
                                )}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register(`firstSection.imageAlt`, {
                                        required: "Value is required"
                                    })} />
                                    {errors.firstSection?.imageAlt && <p className='text-red-500'>{errors.firstSection?.imageAlt.message}</p>}
                                </div>
                            </div>
                        </div>

                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Second Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                            </div>
                        </div>

                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border p-2 rounded-md flex flex-col gap-5'>
                                    {secondSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => secondSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Logo</Label>
                                                        <Controller
                                                            name={`secondSection.items.${index}.logo`}
                                                            control={control}
                                                            rules={{ required: "Logo is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                    isLogo
                                                                />
                                                            )}
                                                        />
                                                        {errors.secondSection?.items?.[index]?.logo && (
                                                            <p className="text-red-500">{errors.secondSection?.items?.[index]?.logo.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`secondSection.items.${index}.logoAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.secondSection?.items?.[index]?.logoAlt && <p className='text-red-500'>{errors.secondSection?.items?.[index]?.logoAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>


                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`secondSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.secondSection?.items?.[index]?.title && <p className='text-red-500'>{errors.secondSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => secondSectionAppend({ title: "", logo: "", logoAlt: "" })}>Add Item</Button>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Product Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("productSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.productSection?.title && <p className='text-red-500'>{errors.productSection?.title.message}</p>}
                            </div>
                        </div>

                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border p-2 rounded-md flex flex-col gap-5'>
                                    {productSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => productSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Image</Label>
                                                        <Controller
                                                            name={`productSection.items.${index}.image`}
                                                            control={control}
                                                            rules={{ required: "Image is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                            )}
                                                        />
                                                        {errors.productSection?.items?.[index]?.image && (
                                                            <p className="text-red-500">{errors.productSection?.items?.[index]?.image.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`productSection.items.${index}.imageAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.productSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.productSection?.items?.[index]?.imageAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>


                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`productSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.productSection?.items?.[index]?.title && <p className='text-red-500'>{errors.productSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Description</Label>
                                                        <Textarea placeholder='Description' {...register(`productSection.items.${index}.description`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.productSection?.items?.[index]?.description && <p className='text-red-500'>{errors.productSection?.items?.[index]?.description.message}</p>}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => productSectionAppend({ title: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </AdminItemContainer>



                <AdminItemContainer>
                    <Label className='' main>Fourth Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("fourthSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection?.title.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("fourthSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.fourthSection?.description && <p className='text-red-500'>{errors.fourthSection?.description.message}</p>}
                            </div>
                        </div>

                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border p-2 rounded-md flex flex-col gap-5'>
                                    {fourthSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => fourthSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Logo</Label>
                                                        <Controller
                                                            name={`fourthSection.items.${index}.logo`}
                                                            control={control}
                                                            rules={{ required: "Logo is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                    isLogo
                                                                />
                                                            )}
                                                        />
                                                        {errors.fourthSection?.items?.[index]?.logo && (
                                                            <p className="text-red-500">{errors.fourthSection?.items?.[index]?.logo.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`fourthSection.items.${index}.logoAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.fourthSection?.items?.[index]?.logoAlt && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.logoAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`fourthSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.fourthSection?.items?.[index]?.title && <p className='text-red-500'>{errors.fourthSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => fourthSectionAppend({ title: "", logo: "", logoAlt: "" })}>Add Item</Button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </AdminItemContainer>


                <div className='flex flex-col gap-2'>
                    <Label className='font-bold'>Meta Title</Label>
                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label className='font-bold'>Meta Description</Label>
                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                </div>

                <div className='flex justify-center'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default IndividualService