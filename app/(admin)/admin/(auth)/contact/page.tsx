"use client"

import React, { useEffect } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ImageUploader } from '@/components/ui/image-uploader'
import { Textarea } from "@/components/ui/textarea";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'sonner';


interface ContactPageProps {
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
        items: {
            title: string
            map: string
            address: string
            image: string
            imageAlt: string
            contact: { value: string }[]
            mail: { value: string }[]
        }[];
    },
    secondSection: {
        title: string;
        description: string;
    };
}



export default function Projects() {

    const { register, handleSubmit, setValue, control, formState: { errors }, watch } = useForm<ContactPageProps>();

    const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
        control,
        name: "firstSection.items"
    });


    const handleFetchContact = async () => {
        try {
            const response = await fetch("/api/admin/contact");
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("firstSection.items", data.data.firstSection.items);
                setValue("secondSection", data.data.secondSection);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching contact", error);
        }
    }



    const onSubmit = async (data: ContactPageProps) => {
        try {
            const response = await fetch(`/api/admin/contact`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in submitting contact details", error);
        }
    }


    const handleAddContact = (index: number) => {
        const currentContacts = watch(`firstSection.items.${index}.contact`) || [];
        setValue(`firstSection.items.${index}.contact`, [...currentContacts, { value: "" }]);
    };

    const handleRemoveContact = (index: number, contactIndex: number) => {
        const currentContacts = watch(`firstSection.items.${index}.contact`) || [];
        setValue(`firstSection.items.${index}.contact`, currentContacts.filter((_, i) => i !== contactIndex));
    }

    const handleAddMail = (index: number) => {
        const currentMails = watch(`firstSection.items.${index}.mail`) || [];
        setValue(`firstSection.items.${index}.mail`, [...currentMails, { value: "" }]);
    };

    const handleRemoveMail = (index: number, mailIndex: number) => {
        const currentMails = watch(`firstSection.items.${index}.mail`) || [];
        setValue(`firstSection.items.${index}.mail`, currentMails.filter((_, i) => i !== mailIndex));
    }


    useEffect(() => {
        handleFetchContact();
    }, [])

    return (
        <div className="flex flex-col gap-5">

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
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

                            <div>
                                <Label className='font-bold'>Items</Label>
                                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>


                                    {firstSectionItems.map((field, index) => (
                                        <div key={field.id}>
                                            <div className='grid grid-cols-2 gap-2 relative border border-black/20 p-2 rounded-md'>
                                                <div className='absolute top-2 right-2'>
                                                    <RiDeleteBinLine onClick={() => firstSectionRemove(index)} className='cursor-pointer text-red-600' />
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Image</Label>
                                                        <Controller
                                                            name={`firstSection.items.${index}.image`}
                                                            control={control}
                                                            rules={{ required: "Image is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                            )}
                                                        />
                                                        {errors.firstSection?.items?.[index]?.image && (
                                                            <p className="text-red-500">{errors.firstSection?.items?.[index]?.image.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`firstSection.items.${index}.imageAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.firstSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.imageAlt.message}</p>}
                                                        </div>


                                                    </div>



                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <div>
                                                        <Label>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`firstSection.items.${index}.title`, {
                                                            required: "Title is required"
                                                        })} />
                                                        {errors.firstSection?.items?.[index]?.title && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.title.message}</p>}
                                                    </div>

                                                    <div>
                                                        <Label>Address</Label>
                                                        <Input type='text' placeholder='Address' {...register(`firstSection.items.${index}.address`, {
                                                            required: "Address is required"
                                                        })} />
                                                        {errors.firstSection?.items?.[index]?.address && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.address.message}</p>}
                                                    </div>

                                                    <div>
                                                        <Label>Map</Label>
                                                        <Input type='text' placeholder='Map' {...register(`firstSection.items.${index}.map`, {
                                                            required: "Map is required"
                                                        })} />
                                                        {errors.firstSection?.items?.[index]?.map && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.map.message}</p>}
                                                    </div>


                                                </div>

                                            </div>

                                            <div className="grid grid-cols-2 gap-2 mt-5">
                                                <div>
                                                    <div>
                                                        <Button type='button' className="w-full cursor-pointer text-white bg-green-400 text-[16px]" onClick={() => { handleAddContact(index) }}>Add Contact</Button>
                                                    </div>
                                                    <div className='grid grid-cols-1 gap-2 mt-5'>
                                                        {watch(`firstSection.items.${index}.contact`).map((_, contactIndex) => (
                                                            <div key={contactIndex} className='grid grid-cols-1 gap-2 relative border border-black/20 p-2 rounded-md'>
                                                                <div className='absolute top-2 right-2'>
                                                                    <RiDeleteBinLine onClick={() => handleRemoveContact(index, contactIndex)} className='cursor-pointer text-red-600' />
                                                                </div>

                                                                <div className='flex flex-col gap-2'>
                                                                    <div className='flex flex-col gap-2'>
                                                                        <Label className='font-bold'>Contact</Label>
                                                                        <Controller
                                                                            name={`firstSection.items.${index}.contact.${contactIndex}.value`}
                                                                            control={control}
                                                                            rules={{ required: "Contact is required" }}
                                                                            render={({ field }) => (
                                                                                <Input type='text' placeholder='Contact' {...field} />
                                                                            )}
                                                                        />
                                                                        {errors.firstSection?.items?.[index]?.contact?.[contactIndex]?.value && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.contact?.[contactIndex]?.value.message}</p>}
                                                                    </div>


                                                                </div>

                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>


                                                <div>
                                                    <div>
                                                        <Button type='button' className="w-full cursor-pointer text-white bg-green-400 text-[16px]" onClick={() => { handleAddMail(index) }}>Add Mail</Button>
                                                    </div>
                                                    <div className='grid grid-cols-1 gap-2 mt-5'>
                                                        {watch(`firstSection.items.${index}.mail`).map((_, mailIndex) => (
                                                            <div key={mailIndex} className='grid grid-cols-1 gap-2 relative border border-black/20 p-2 rounded-md'>
                                                                <div className='absolute top-2 right-2'>
                                                                    <RiDeleteBinLine onClick={() => handleRemoveMail(index, mailIndex)} className='cursor-pointer text-red-600' />
                                                                </div>

                                                                <div className='flex flex-col gap-2'>
                                                                    <div className='flex flex-col gap-2'>
                                                                        <Label className='font-bold'>Mail</Label>
                                                                        <Controller
                                                                            name={`firstSection.items.${index}.mail.${mailIndex}.value`}
                                                                            control={control}
                                                                            rules={{ required: "Mail is required" }}
                                                                            render={({ field }) => (
                                                                                <Input type='text' placeholder='Mail' {...field} />
                                                                            )}
                                                                        />
                                                                        {errors.firstSection?.items?.[index]?.mail?.[mailIndex]?.value && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.mail?.[mailIndex]?.value.message}</p>}
                                                                    </div>


                                                                </div>

                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    ))}

                                    <div>
                                        <Button type='button' className="w-full cursor-pointer text-white text-[16px]" onClick={() => { firstSectionAppend({ image: "", imageAlt: "", title: "", contact: [], mail: [], address: "", map: "" }) }}>Add Item</Button>
                                    </div>

                                </div>
                            </div>



                        </div>

                    </div>
                </AdminItemContainer>



                <AdminItemContainer>
                    <Label className='' main>Second Section</Label>
                    <div className=' p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>

                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("secondSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.secondSection?.description && <p className='text-red-500'>{errors.secondSection?.description.message}</p>}
                            </div>
                        </div>

                    </div>

                </AdminItemContainer>

                <AdminItemContainer>
                    <Label main>SEO</Label>
                    <div className="flex flex-col gap-2 p-5">
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

                <div className='flex justify-center mt-5'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>


        </div>
    );
}
