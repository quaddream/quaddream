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
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })
import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic'


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
        items: {
            label: string;
            value: string;
            image: string;
            imageAlt: string;
        }[]
    };
    secondSection: {
        title: string;
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[];
    };
    thirdSection: {
        title: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    productSection: {
        items: {
            title: string;
            items: {
                _id: string
            }[]
        }
    };
    productSection2: {
        title: string
        sections: {
            title: string;
            items: { _id: string }[];
        }[];
    };
    fourthSection: {
        title: string;
        description: string;
        items: {
            logo: string;
            logoAlt: string;
            image: string;
            imageAlt: string;
            title: string;
        }[];
    };
    fifthSection: {
        title: string;
        items: {
            question: string;
            answer: string;
        }[];
    };
    sixthSection: {
        image: string;
        imageAlt: string;
        title: string;
        description: string;
        buttonText: string;
    },
}

const IndividualService = () => {

    const { id } = useParams();

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<IndividualServiceFormProps>();


    const { fields: firstSectionItems, append: firstSectionAppend, remove: firstSectionRemove } = useFieldArray({
        control,
        name: "firstSection.items"
    });

    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });

    const { fields: thirdSectionItems, append: thirdSectionAppend, remove: thirdSectionRemove } = useFieldArray({
        control,
        name: "thirdSection.items"
    });


    const { fields: fourthSectionItems, append: fourthSectionAppend, remove: fourthSectionRemove } = useFieldArray({
        control,
        name: "fourthSection.items"
    });

    const { fields: fifthSectionItems, append: fifthSectionAppend, remove: fifthSectionRemove } = useFieldArray({
        control,
        name: "fifthSection.items"
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
                console.log("data", data)
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("firstSection.items", data.data.firstSection.items);
                setValue("secondSection", data.data.secondSection);
                setValue("secondSection.items", data.data.secondSection.items);
                setValue("productSection", data.data.productSection);
                setValue("productSection2.title", data.data.productSection2.title);
                setValue("productSection2.sections", data.data.productSection2.sections);
                // setValue("productSection.items", data.data.productSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("fourthSection.items", data.data.fourthSection.items);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSection.items", data.data.thirdSection.items);
                setValue("fifthSection", data.data.fifthSection);
                setValue("fifthSection.items", data.data.fifthSection.items);
                setValue("sixthSection", data.data.sixthSection);

            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching individual service data", error);
        }
    }

    // const fetchProductData = async () => {
    //     try {
    //         const response = await fetch(`/api/admin/products`);
    //         if (response.ok) {
    //             const data = await response.json();

    //             // Get previously selected items from the form
    //             const productSectionItems = getValues("productSection.items") || [];

    //             console.log("productSectionItems", productSectionItems)
    //             // Build productData with 'checked' flag
    //             const updatedProductData = data.data.map((item :{ _id: string }) => ({
    //                 ...item,
    //                 checked: productSectionItems.some((productItem:{_id:string}) => productItem._id === item._id),
    //             }));

    //             console.log("updatedProductData", updatedProductData)

    //             // Set productData (for display)
    //             setProductData(updatedProductData);

    //             // Set productSection.items in form with only the checked ones (excluding "checked" key)
    //             const selectedItems = updatedProductData
    //                 .filter((item: { checked: boolean }) => item.checked)
    //                 .map((item: { _id: string }) => ({ _id: item._id }));
    //             // remove the 'checked' field

    //             console.log("selectedItems", selectedItems)

    //             setValue("productSection.items", selectedItems);
    //         } else {
    //             const data = await response.json();
    //             toast.error(data.message);
    //         }
    //     } catch (error) {
    //         console.log("Error in fetching product data", error);
    //     }
    // };




    // const handleCheckboxChange = (id: string) => {
    //     if (!productData) return;

    //     // Toggle checked status
    //     const updatedProductData = productData.map((item) =>
    //         item._id === id ? { ...item, checked: !item.checked } : item
    //     );

    //     // Update local state
    //     setProductData(updatedProductData);

    //     // Filter only checked items (and remove `checked` before saving to form)
    //     const selectedItems = updatedProductData
    //         .filter((item: { checked: boolean }) => item.checked)
    //         .map((item: { _id: string }) => ({ _id: item._id }));
    //     ;



    //     console.log("selectedItems", selectedItems)

    //     // Update form field
    //     setValue("productSection.items", selectedItems);
    // };


    // const handleCheckboxChangeForSection = (sectionIndex: number, id: string) => {
    //     const currentItems = getValues(`productSection2.sections.${sectionIndex}.items`) || [];
    //     const exists = currentItems.some((item) => item._id === id);

    //     let updatedItems;
    //     if (exists) {
    //       updatedItems = currentItems.filter((item) => item._id !== id);
    //     } else {
    //       updatedItems = [...currentItems, { _id: id }];
    //     }

    //     setValue(`productSection2.sections.${sectionIndex}.items`, updatedItems);
    //   };


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
                                <Controller name="firstSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                    return <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
                                }} />
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

                        <div>
                            <Label className='font-bold'>Items</Label>
                            <div className='border p-2 rounded-md flex flex-col gap-5 mt-0.5'>


                                {firstSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b pb-5'>
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
                                                            isLogo
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
                                            <div className='flex flex-col gap-2'>
                                                <Label className='font-bold'>Label</Label>
                                                <Input type='text' placeholder='Label' {...register(`firstSection.items.${index}.label`)} />
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <Label className='font-bold'>Value</Label>
                                                <Input type='text' placeholder='Value' {...register(`firstSection.items.${index}.value`, {
                                                    required: "Value is required"
                                                })} />
                                                {errors.firstSection?.items?.[index]?.value && <p className='text-red-500'>{errors.firstSection?.items?.[index]?.value.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => firstSectionAppend({ label: "", value: "", image: "", imageAlt: "" })}>Add Item</Button>
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
                            {/* <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("fourthSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.fourthSection?.description && <p className='text-red-500'>{errors.fourthSection?.description.message}</p>}
                            </div> */}
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
                                                        <Label className='font-bold'>Image</Label>
                                                        <Controller
                                                            name={`secondSection.items.${index}.image`}
                                                            control={control}
                                                            rules={{ required: "Logo is required" }}
                                                            render={({ field }) => (
                                                                <ImageUploader
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                />
                                                            )}
                                                        />
                                                        {errors.secondSection?.items?.[index]?.image && (
                                                            <p className="text-red-500">{errors.secondSection?.items?.[index]?.image.message}</p>
                                                        )}
                                                    </div>

                                                    <div className='flex flex-col gap-2'>
                                                        <div className='flex flex-col gap-2'>
                                                            <Label className='font-bold'>Alt Tag</Label>
                                                            <Input type='text' placeholder='Alt Tag' {...register(`secondSection.items.${index}.imageAlt`, {
                                                                required: "Value is required"
                                                            })} />
                                                            {errors.secondSection?.items?.[index]?.imageAlt && <p className='text-red-500'>{errors.secondSection?.items?.[index]?.imageAlt.message}</p>}
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

                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Description</Label>
                                                    <Controller
                                                        name={`secondSection.items.${index}.description`}
                                                        control={control}
                                                        rules={{ required: "Description is required" }}
                                                        render={({ field }) => (
                                                            <ReactQuill
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                    {errors.secondSection?.items?.[index]?.description && (
                                                        <p className="text-red-500">{errors.secondSection?.items?.[index]?.description.message}</p>
                                                    )}
                                                </div>

                                            </div>



                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => secondSectionAppend({ title: "", description: "", image: "", imageAlt: "" })}>Add Item</Button>
                                    </div>

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
                            {/* <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("fourthSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.fourthSection?.description && <p className='text-red-500'>{errors.fourthSection?.description.message}</p>}
                            </div> */}
                        </div>

                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>
                                    {thirdSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => thirdSectionRemove(index)} className='cursor-pointer text-red-600' />
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
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Description</Label>
                                                    <Controller
                                                        name={`thirdSection.items.${index}.description`}
                                                        control={control}
                                                        rules={{ required: "Description is required" }}
                                                        render={({ field }) => (
                                                            <Textarea
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                    {errors.thirdSection?.items?.[index]?.description && (
                                                        <p className="text-red-500">{errors.thirdSection?.items?.[index]?.description.message}</p>
                                                    )}
                                                </div>

                                            </div>



                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => thirdSectionAppend({ title: "", description: "" })}>Add Item</Button>
                                    </div>

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
                            <div className='rounded-md flex flex-col gap-5 border border-black/20 p-2'>
                                {fourthSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
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
                                                <Label className=' font-bold'>Title</Label>
                                                <Input type='text' placeholder='Title' {...register(`fourthSection.items.${index}.title`)} />
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
                                        </div>
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => fourthSectionAppend({ logo: "", logoAlt: "", title: "", image: "", imageAlt: "" })}>Add Item</Button>
                                </div>

                            </div>


                        </div>

                    </div>


                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Fifth Section</Label>
                    <div className='p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("fifthSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.fifthSection?.title && <p className='text-red-500'>{errors.fifthSection?.title.message}</p>}
                            </div>
                            {/* <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Description</Label>
                                <Textarea placeholder='Description' {...register("fourthSection.description", {
                                    required: "Description is required"
                                })} />
                                {errors.fourthSection?.description && <p className='text-red-500'>{errors.fourthSection?.description.message}</p>}
                            </div> */}
                        </div>

                        <div>
                            <div className='rounded-md flex flex-col gap-2'>
                                <Label className=' font-bold'>Items</Label>
                                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>
                                    {fifthSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
                                            <div className='absolute top-2 right-2'>
                                                <RiDeleteBinLine onClick={() => fifthSectionRemove(index)} className='cursor-pointer text-red-600' />
                                            </div>

                                            <div className='flex flex-col gap-2'>

                                                <div className='flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Question</Label>
                                                        <Input type='text' placeholder='Question' {...register(`fifthSection.items.${index}.question`, {
                                                            required: "Question is required"
                                                        })} />
                                                        {errors.fifthSection?.items?.[index]?.question && <p className='text-red-500'>{errors.fifthSection?.items?.[index]?.question.message}</p>}
                                                    </div>
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <Label className='font-bold'>Answer</Label>
                                                    <Controller
                                                        name={`fifthSection.items.${index}.answer`}
                                                        control={control}
                                                        rules={{ required: "Answer is required" }}
                                                        render={({ field }) => (
                                                            <Textarea
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                            />
                                                        )}
                                                    />
                                                    {errors.fifthSection?.items?.[index]?.answer && (
                                                        <p className="text-red-500">{errors.fifthSection?.items?.[index]?.answer.message}</p>
                                                    )}
                                                </div>

                                            </div>



                                        </div>
                                    ))}

                                    <div className='flex justify-end'>
                                        <Button type='button' className="" addItem onClick={() => fifthSectionAppend({ question: "", answer: "" })}>Add Item</Button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label main>Sixth Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='grid grid-cols-1 gap-2'>
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
                                    <Label className='font-bold'>Alt Tag</Label>
                                    <Input type='text' placeholder='Alt Tag' {...register("sixthSection.imageAlt")} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("sixthSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.sixthSection?.title && <p className='text-red-500'>{errors.sixthSection?.title.message}</p>}
                            </div>

                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Description</Label>
                                <Controller name="sixthSection.description" control={control} render={({ field }) => {
                                    return <Textarea value={field.value} onChange={field.onChange} />
                                }} />
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


                {/* <AdminItemContainer>
                    <Label main>Product Section</Label>
                    <div className="p-5 flex flex-col gap-5  rounded-md">
                        <Label className="font-bold">Main Title</Label>
                        <Input
                            type="text"
                            placeholder="Main Title"
                            {...register("productSection2.title", {
                                required: "Title is required",
                            })}
                        />



                        {productSections.map((section, sectionIndex) => (
                            <div key={section.id} className="border border-black/20 p-4 rounded-md relative">
                                <div className="absolute top-2 right-2">
                                    <RiDeleteBinLine
                                        className="cursor-pointer text-red-500"
                                        onClick={() => removeProductSection(sectionIndex)}
                                    />
                                </div>

                                <Label className="font-bold">Section Title</Label>
                                <Input
                                    type="text"
                                    placeholder="Section Title"
                                    {...register(`productSection2.sections.${sectionIndex}.title`)}
                                />

                                <div className="flex justify-start mt-2">
                                    <Sheet>
                                        <SheetTrigger onClick={() => setCheckedProductInSheet(sectionIndex)} className='bg-green-400 p-2 rounded-xl'>Reorder</SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle>Reorder Items</SheetTitle>
                                                <SheetDescription className="flex flex-col gap-2 h-[80%] overflow-y-auto">
                                                    <DndContext
                                                        collisionDetection={closestCorners}
                                                        onDragEnd={(event) => handleDragEnd(event, sectionIndex)}
                                                    >
                                                        <SortableContext
                                                            items={sheetItems.map((item) => item._id)}
                                                            strategy={verticalListSortingStrategy}
                                                        >
                                                            {sheetItems.map((item) => (
                                                                <ProductCard key={item._id} title={item.title} id={item._id} />
                                                            ))}
                                                        </SortableContext>
                                                    </DndContext>
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                </div>

                                
                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    {productData?.map((product) => (
                                        <Controller
                                            key={product._id}
                                            control={control}
                                            name={`productSection2.sections.${sectionIndex}.items`}
                                            render={({ field }) => {
                                                
                                                const isChecked = field.value?.some((item: { _id: string }) => item._id === product._id) || false;
                                                return (
                                                    <div className="flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={() => {
                                                                const exists = field.value?.some((item: { _id: string }) => item._id === product._id);
                                                                let updatedItems;
                                                                if (exists) {
                                                                    updatedItems = field.value.filter((item: { _id: string }) => item._id !== product._id);
                                                                } else {
                                                                    updatedItems = [...(field.value || []), { _id: product._id }];
                                                                }
                                                                field.onChange(updatedItems);
                                                            }}
                                                        />
                                                        <span>{product.title}</span>
                                                    </div>
                                                );
                                            }}
                                        />

                                    ))}



                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end">
                            <Button type="button" addItem onClick={() => addProductSection({ title: "", items: [] })}>
                                Add Item
                            </Button>
                        </div>
                    </div>
                </AdminItemContainer> */}


                {/* <AdminItemContainer>
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
                                <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>
                                    {fourthSectionItems.map((field, index) => (
                                        <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
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
                </AdminItemContainer> */}


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

export default IndividualService