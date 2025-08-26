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

interface AboutFormProps {

    metaTitle: string;
    metaDescription: string;
    bannerSection: {
            image: string;
            imageAlt: string;
            title: string;
    };
    firstSection: {
        movingText: string;
        title: string;
        description: string;
        buttonText: string;
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
            logo: string;
            logoAlt: string;
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
    historySection: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            year: string;
            description: string;
        }[];
    };
    sixthSection: {
        image: string;
        imageAlt: string;
        mainTitle: string;
        subTitle: string;
        buttonText: string;
    };
}

const About = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<AboutFormProps>();


    const { fields: thirdSectionItems, append: thirdSectionAppend, remove: thirdSectionRemove } = useFieldArray({
        control,
        name: "thirdSection.items"
    });

    const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
        control,
        name: "fourthSection.items"
    });

    const { fields: historySectionItems, append: historySectionAppend, remove: historySectionRemove } = useFieldArray({
        control,
        name: "historySection.items"
    });


    const handleAddAbout = async (data: AboutFormProps) => {
        try {
            const response = await fetch(`/api/admin/about`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in adding home", error);
        }
    }

    const fetchAboutData = async () => {
        try {
            const response = await fetch(`/api/admin/about`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSection.items", data.data.thirdSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSection.items", data.data.fourthSection.items);
                setValue("historySection", data.data.historySection);
                setValue("historySection.items", data.data.historySection.items);
                setValue("sixthSection", data.data.sixthSection);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching about data", error);
        }
    }



    useEffect(() => {
        fetchAboutData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddAbout)}>


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
                                <Label className=' font-bold'>Moving Text</Label>
                                <Input type='text' placeholder='Moving Text' {...register("firstSection.movingText", {
                                    required: "Moving Text is required"
                                })} />
                                {errors.firstSection?.movingText && <p className='text-red-500'>{errors.firstSection?.movingText.message}</p>}
                            </div>
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
                                <div className='border p-2 rounded-md flex flex-col gap-5'>
                                    {thirdSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => thirdSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Logo</Label>
                                                        <Controller
                                                            name={`thirdSection.items.${index}.logo`}
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
                                                        {errors.thirdSection?.items?.[index]?.logo && (
                                                            <p className="text-red-500">{errors.thirdSection?.items?.[index]?.logo.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`thirdSection.items.${index}.logoAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.thirdSection?.items?.[index]?.logoAlt && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.logoAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>


                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`thirdSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.thirdSection?.items?.[index]?.title && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Description</Label>
                                                        <Textarea placeholder='Description' {...register(`thirdSection.items.${index}.description`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.thirdSection?.items?.[index]?.description && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.description.message}</p>}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => thirdSectionAppend({ title: "", description: "", logo: "", logoAlt: "" })}>Add Item</Button>
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


                <AdminItemContainer>
                    <Label className='' main>History Section</Label>
                    <div className='rounded-md flex flex-col gap-5 p-5'>

                        <div className='flex flex-col gap-1'>
                            <Label className=' font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("historySection.title", {
                                required: "Title is required"
                            })} />
                            {errors.historySection?.title && <p className='text-red-500'>{errors.historySection?.title.message}</p>}
                        </div>

                        <div className=''>
                            <Label className=' font-bold'>Items</Label>
                            <div className='rounded-md flex flex-col gap-5 border p-2'>
                                {historySectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                        <div className='absolute top-0 right-2'>
                                            <RiDeleteBinLine onClick={() => historySectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Image</Label>
                                                <Controller
                                                    name={`historySection.items.${index}.image`}
                                                    control={control}
                                                    rules={{ required: "Image is required" }}
                                                    render={({ field }) => (
                                                        <ImageUploader
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />
                                                {errors.historySection?.items?.[index]?.image && (
                                                    <p className="text-red-500">{errors.historySection?.items?.[index]?.image.message}</p>
                                                )}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`historySection.items.${index}.imageAlt`)} />
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col'>
                                                <Label className=' font-bold'>Title</Label>
                                                <Input type='text' placeholder='Title' {...register(`historySection.items.${index}.title`)} />
                                            </div>
                                            <div className='flex flex-col'>
                                                <Label className=' font-bold'>Year</Label>
                                                <Input type='text' placeholder='Year' {...register(`historySection.items.${index}.year`)} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Description</Label>
                                                <Textarea placeholder='Description' {...register(`historySection.items.${index}.description`, {
                                                    required: "Description is required"
                                                })} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => historySectionAppend({ title: "", image: "", imageAlt: "", year: "", description: "" })}>Add Item</Button>
                                </div>

                            </div>


                        </div>

                    </div>


                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>Sixth Section</Label>
                    <div className=' p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Image</Label>
                                <Controller
                                    name="sixthSection.image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.sixthSection?.image && (
                                    <p className="text-red-500">{errors.sixthSection?.image.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("sixthSection.imageAlt", {
                                    required: "Alt Tag is required"
                                })} />
                                {errors.sixthSection?.imageAlt && <p className='text-red-500'>{errors.sixthSection?.imageAlt.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Main Title</Label>
                                <Input type='text' placeholder='Main Title' {...register("sixthSection.mainTitle", {
                                    required: "Main Title is required"
                                })} />
                                {errors.sixthSection?.mainTitle && <p className='text-red-500'>{errors.sixthSection?.mainTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Sub Title</Label>
                                <Input type='text' placeholder='Sub Title' {...register("sixthSection.subTitle", {
                                    required: "Sub Title is required"
                                })} />
                                {errors.sixthSection?.subTitle && <p className='text-red-500'>{errors.sixthSection?.subTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Button Text</Label>
                                <Input type='text' placeholder='Button Text' {...register("sixthSection.buttonText", {
                                    required: "Button Text is required"
                                })} />
                                {errors.sixthSection?.buttonText && <p className='text-red-500'>{errors.sixthSection?.buttonText.message}</p>}
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

export default About