"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/image-uploader'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import { VideoUploader } from '@/components/ui/video-uploader';
import AdminItemContainer from '@/app/components/common/AdminItemContainer';

interface HomeFormProps {

    metaTitle: string;
    metaDescription: string;
    bannerSection: {
        items: {
            image: string;
            imageAlt: string;
            title: string;
        }[];
    };
    firstSection: {
        movingText: string;
        title: string;
        description: string;
        buttonText: string;
        items: {
            logo: string;
            logoAlt: string;
            number: string;
            value: string;
        }[];
    };
    servicesSection: {
        mainTitle: string;
        subTitle: string;
        description: string;
        items: {
            title: string;
            image: string;
            imageAlt: string;
            slug: string;
        }[];
    };
    industriesSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
            title: string;
            image: string;
            imageAlt: string;
        }[];
    };
    fourthSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
            mainTitle: string;
            subTitle: string;
            description: string;
            image: string;
            imageAlt: string;
        }[];
    };
    partnersSection: {
        title: string;
        description: string;
        items: {
            logo: string;
            logoAlt: string;
        }[];
    };
    seventhSection: {
        mainTitle: string;
        image: string;
        imageAlt: string;
        subTitle: string;
        buttonText: string;
    };
}

const Home = () => {


    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<HomeFormProps>();


    const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
        control,
        name: "firstSection.items"
    });

    const { fields: bannerSectionItems, append: bannerSectionAppend, remove: bannerSectionRemove } = useFieldArray({
        control,
        name: "bannerSection.items"
    });


    const { fields: industriesSectionItems, append: industriesSectionAppend, remove: industriesSectionRemove } = useFieldArray({
        control,
        name: "industriesSection.items"
    });

    const { fields: servicesSectionItems, append: servicesSectionAppend, remove: servicesSectionRemove } = useFieldArray({
        control,
        name: "servicesSection.items"
    });

    const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
        control,
        name: "fourthSection.items"
    });

    const { fields: partnersSectionItems, append: partnersSectionAppend, remove: partnersSectionRemove } = useFieldArray({
        control,
        name: "partnersSection.items"
    });


    const handleAddHome = async (data: HomeFormProps) => {
        try {
            const response = await fetch(`/api/admin/home`, {
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

    const fetchHomeData = async () => {
        try {
            const response = await fetch(`/api/admin/home`);
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("firstSection", data.data.firstSection);
                setValue("firstSection.items", data.data.firstSection.items);
                setValue("industriesSection", data.data.industriesSection);
                setValue("industriesSection.items", data.data.industriesSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSection.items", data.data.fourthSection.items);
                setValue("partnersSection", data.data.partnersSection);
                setValue("partnersSection.items", data.data.partnersSection.items);
                setValue("servicesSection", data.data.servicesSection);
                setValue("servicesSection.items", data.data.servicesSection.items);
                setValue("bannerSection.items", data.data.bannerSection.items);
                setValue("seventhSection", data.data.seventhSection);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching home data", error);
        }
    }



    useEffect(() => {
        fetchHomeData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit(handleAddHome)}>


                <AdminItemContainer>
                    <Label className='' main>Banner Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>

                        {bannerSectionItems.map((field, index) => (
                            <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                <div className='absolute top-2 right-2'>
                                    <RiDeleteBinLine onClick={() => bannerSectionRemove(index)} className='cursor-pointer text-red-600' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className='font-bold'>Image</Label>
                                        <Controller
                                            name={`bannerSection.items.${index}.image`}
                                            control={control}
                                            rules={{ required: "Image is required" }}
                                            render={({ field }) => (
                                                <ImageUploader
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            )}
                                        />
                                        {errors.bannerSection?.items?.[index]?.image && (
                                            <p className="text-red-500">{errors.bannerSection?.items?.[index]?.image.message}</p>
                                        )}
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Alt Tag</Label>
                                            <Input type='text' placeholder='Alt Tag' {...register(`bannerSection.items.${index}.imageAlt`, {
                                                required: "Value is required"
                                            })} />
                                            {errors.bannerSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.bannerSection?.items?.[index]?.imageAlt.message}</p>}
                                        </div>
                                    </div>


                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <Label className='font-bold'>Title</Label>
                                            <Input type='text' placeholder='Title' {...register(`bannerSection.items.${index}.title`, {
                                                required: "Value is required"
                                            })} />
                                            {errors.bannerSection?.items?.[index]?.title && <p className='text-red-500'>{errors.bannerSection?.items?.[index]?.title.message}</p>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                        <div className='flex justify-end mt-2'>
                            <Button type='button' className="" addItem onClick={() => bannerSectionAppend({ title: "", image: "", imageAlt: "" })}>Add Item</Button>
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
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Button Text</Label>
                                <Input type='text' placeholder='Button Text' {...register("firstSection.buttonText", {
                                    required: "Button Text is required"
                                })} />
                                {errors.firstSection?.buttonText && <p className='text-red-500'>{errors.firstSection?.buttonText.message}</p>}
                            </div>
                        </div>


                        <div className='flex flex-col gap-2'>
                            <Label className=' font-bold'>Items</Label>
                            <div className='border p-2 rounded-md flex flex-col gap-5'>


                                {firstSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b  pb-5'>
                                        <div className='absolute top-2 right-2'>
                                            <RiDeleteBinLine onClick={() => firstSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Label className=' font-bold'>Logo</Label>
                                            <Controller
                                                name={`firstSection.items.${index}.logo`}
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
                                            {errors.firstSection?.items?.[index]?.logo && (
                                                <p className="text-red-500">{errors.firstSection?.items?.[index]?.logo.message}</p>
                                            )}

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <Label className=' font-bold'>Alt Tag</Label>
                                                    <Input type='text' placeholder='Alt Tag' {...register(`firstSection.items.${index}.logoAlt`)} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Number</Label>
                                                <Input type='text' placeholder='Number' {...register(`firstSection.items.${index}.number`)} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Value</Label>
                                                <Input type='text' placeholder='Value' {...register(`firstSection.items.${index}.value`, {
                                                    required: "Value is required"
                                                })} />
                                                {errors.firstSection?.items?.[index]?.value && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.value.message}</p>}
                                            </div>
                                        </div>

                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => firstSectionAppend({ number: "", value: "", logo: "", logoAlt: "" })}>Add Item</Button>
                                </div>

                            </div>
                        </div>


                    </div>
                </AdminItemContainer>



                <AdminItemContainer>
                    <Label className='' main>Services Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Main Title</Label>
                                <Input type='text' placeholder='Main Title' {...register("servicesSection.mainTitle", {
                                    required: "Title is required"
                                })} />
                                {errors.servicesSection?.mainTitle && <p className='text-red-500'>{errors.servicesSection?.mainTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Sub Title</Label>
                                <Input type='text' placeholder='Sub Title' {...register("servicesSection.subTitle", {
                                    required: "Title is required"
                                })} />
                                {errors.servicesSection?.subTitle && <p className='text-red-500'>{errors.servicesSection?.subTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("servicesSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.servicesSection?.description && <p className='text-red-500'>{errors.servicesSection?.description.message}</p>}
                            </div>
                        </div>


                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border p-2 rounded-md flex flex-col gap-5'>
                                    {servicesSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => servicesSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Image</Label>
                                                        <Controller
                                                            name={`servicesSection.items.${index}.image`}
                                                            control={control}
                                                            rules={{ required: "Image is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                            )}
                                                        />
                                                        {errors.servicesSection?.items?.[index]?.image && (
                                                            <p className="text-red-500">{errors.servicesSection?.items?.[index]?.image.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`servicesSection.items.${index}.imageAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.servicesSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.servicesSection?.items?.[index]?.imageAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>


                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`servicesSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.servicesSection?.items?.[index]?.title && <p className='text-red-500'>{errors.servicesSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Slug</Label>
                                                        <Input type='text' placeholder='Slug' {...register(`servicesSection.items.${index}.slug`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.servicesSection?.items?.[index]?.slug && <p className='text-red-500'>{errors.servicesSection?.items?.[index]?.slug.message}</p>}
                                                    </div>
                                                </div>

                                            </div>



                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => servicesSectionAppend({ title: "", image: "", imageAlt: "", slug: "" })}>Add Item</Button>
                                    </div>

                                </div>



                            </div>
                        </div>


                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Industries Section</Label>
                    <div className='rounded-md flex flex-col gap-5 p-5'>

                        <div className='flex flex-col gap-1'>
                            <Label className=' font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("industriesSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.industriesSection?.title && <p className='text-red-500'>{errors.industriesSection?.title.message}</p>}
                        </div>

                        <div className=''>
                            <Label className=' font-bold'>Items</Label>
                            <div className='rounded-md flex flex-col gap-5 border p-2'>
                                {industriesSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                        <div className='absolute top-0 right-2'>
                                            <RiDeleteBinLine onClick={() => industriesSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Logo</Label>
                                                <Controller
                                                    name={`industriesSection.items.${index}.logo`}
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
                                                {errors.industriesSection?.items?.[index]?.logo && (
                                                    <p className="text-red-500">{errors.industriesSection?.items?.[index]?.logo.message}</p>
                                                )}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`industriesSection.items.${index}.logoAlt`)} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Title</Label>
                                                <Input type='text' placeholder='Title' {...register(`industriesSection.items.${index}.title`)} />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Image</Label>
                                                <Controller
                                                    name={`industriesSection.items.${index}.image`}
                                                    control={control}
                                                    rules={{ required: "Image is required" }}
                                                    render={({ field }) => (
                                                        <ImageUploader
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />
                                                {errors.industriesSection?.items?.[index]?.image && (
                                                    <p className="text-red-500">{errors.industriesSection?.items?.[index]?.image.message}</p>
                                                )}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`industriesSection.items.${index}.imageAlt`)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => industriesSectionAppend({ logo: "", logoAlt: "", title: "", image: "", imageAlt: "" })}>Add Item</Button>
                                </div>

                            </div>


                        </div>

                    </div>


                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Fourth Section</Label>
                    <div className='rounded-md flex flex-col gap-5 p-5'>

                        <div className='flex flex-col gap-1'>
                            <Label className=' font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("fourthSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection?.title.message}</p>}
                        </div>

                        <div className=''>
                            <Label className=' font-bold'>Items</Label>
                            <div className='rounded-md flex flex-col gap-5 border p-2'>
                                {fourthSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
                                        <div className='absolute top-0 right-2'>
                                            <RiDeleteBinLine onClick={() => fourthSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Logo</Label>
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
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`fourthSection.items.${index}.logoAlt`)} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Main Title</Label>
                                                <Input type='text' placeholder='Main Title' {...register(`fourthSection.items.${index}.mainTitle`)} />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Image</Label>
                                                <Controller
                                                    name={`fourthSection.items.${index}.image`}
                                                    control={control}
                                                    rules={{ required: "Image is required" }}
                                                    render={({ field }) => (
                                                        <ImageUploader
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                    )}
                                                />
                                                {errors.fourthSection?.items?.[index]?.image && (
                                                    <p className="text-red-500">{errors.fourthSection?.items?.[index]?.image.message}</p>
                                                )}
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`fourthSection.items.${index}.imageAlt`)} />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Sub Title</Label>
                                                <Input type='text' placeholder='Sub Title' {...register(`fourthSection.items.${index}.subTitle`)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => fourthSectionAppend({ logo: "", logoAlt: "", mainTitle: "", subTitle: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
                                </div>

                            </div>


                        </div>

                    </div>


                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Partners Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("partnersSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.partnersSection?.title && <p className='text-red-500'>{errors.partnersSection?.title.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("partnersSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.partnersSection?.description && <p className='text-red-500'>{errors.partnersSection?.description.message}</p>}
                            </div>
                        </div>


                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border p-2 rounded-md grid grid-cols-3 gap-5'>
                                    {partnersSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-1 gap-2 relative border-r pr-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => partnersSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Logo</Label>
                                                        <Controller
                                                            name={`partnersSection.items.${index}.logo`}
                                                            control={control}
                                                            rules={{ required: "Logo is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                            )}
                                                        />
                                                        {errors.partnersSection?.items?.[index]?.logo && (
                                                            <p className="text-red-500">{errors.partnersSection?.items?.[index]?.logo.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`partnersSection.items.${index}.logoAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.partnersSection?.items?.[index]?.logoAlt && <p className='text-red-500'>{errors.partnersSection?.items?.[index]?.logoAlt.message}</p>}
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>

                        <div className='flex justify-end'>
                            <Button type='button' className="" addItem onClick={() => partnersSectionAppend({ logo: "", logoAlt: "" })}>Add Item</Button>
                        </div>
                    </div>
                </AdminItemContainer>



                <AdminItemContainer>
                    <Label className='' main>Seventh Section</Label>
                    <div className=' p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Image</Label>
                                <Controller
                                    name="seventhSection.image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.seventhSection?.image && (
                                    <p className="text-red-500">{errors.seventhSection?.image.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Main Title</Label>
                                <Input type='text' placeholder='Main Title' {...register("seventhSection.mainTitle", {
                                    required: "Main Title is required"
                                })} />
                                {errors.seventhSection?.mainTitle && <p className='text-red-500'>{errors.seventhSection?.mainTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Sub Title</Label>
                                <Input type='text' placeholder='Sub Title' {...register("seventhSection.subTitle", {
                                    required: "Sub Title is required"
                                })} />
                                {errors.seventhSection?.subTitle && <p className='text-red-500'>{errors.seventhSection?.subTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Button Text</Label>
                                <Input type='text' placeholder='Button Text' {...register("seventhSection.buttonText", {
                                    required: "Button Text is required"
                                })} />
                                {errors.seventhSection?.buttonText && <p className='text-red-500'>{errors.seventhSection?.buttonText.message}</p>}
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

export default Home