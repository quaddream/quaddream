"use client"

import React, { useEffect } from 'react'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'sonner';


interface ServiceFormProps {
    secondSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
            title: string;
        }[];
    };
}


const ServicesSection = () => {

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ServiceFormProps>();


    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });


    const handleAddServiceSection = async (data: ServiceFormProps) => {
        try {

            const response = await fetch(`/api/admin/services/second-section`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                fetchIndividualServiceData();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding individual service", error);
        }
    }


    const fetchIndividualServiceData = async () => {
        try {
            const response = await fetch(`/api/admin/services/second-section`);
            if (response.ok) {
                const data = await response.json();
                setValue("secondSection.title", data.data.title);
                setValue("secondSection.items", data.data.items);
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
        <AdminItemContainer>
            <Label className='' main>Services Section</Label>
            <form onSubmit={handleSubmit(handleAddServiceSection)} className='p-5  flex flex-col gap-2'>
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
                        <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>
                            {secondSectionItems.map((field, index) => (
                                <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
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


                <div className='flex justify-center'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>
        </AdminItemContainer>
    )
}

export default ServicesSection