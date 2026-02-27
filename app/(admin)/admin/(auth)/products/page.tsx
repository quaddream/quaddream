"use client"

import React, { useEffect } from 'react'
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RiDeleteBinLine } from "react-icons/ri";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { ImageUploader } from '@/components/ui/image-uploader'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'


interface ProductFormProps {

    productSection: {
        items: {
            image: string;
            imageAlt: string;
            title: string;
            description: string;
        }[];
    };
}

const Products = () => {

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ProductFormProps>();

    const { fields: productSectionItems, append: productSectionAppend, remove: productSectionRemove } = useFieldArray({
        control,
        name: "productSection.items"
    });


    const handleAddProduct = async (data: ProductFormProps) => {
        try {
            const response = await fetch(`/api/admin/products`, {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
            }
        } catch (error) {
            console.log("Error in adding product", error);
        }
    }


    const fetchProductData = async () => {
        try {
            const response = await fetch(`/api/admin/products`);
            if (response.ok) {
                const data = await response.json();
                setValue("productSection.items", data.data);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching product data", error);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, []);


    return (
        <AdminItemContainer>
            <Label className='' main>Product Section</Label>
            <form onSubmit={handleSubmit(handleAddProduct)} className='p-5  flex flex-col gap-2'>
                <div>
                    <div className='rounded-md flex flex-col gap-2'>
                        <Label className=' font-bold'>Items</Label>
                        <div className='border border-black/20 p-2 rounded-md flex flex-col gap-5'>
                            {productSectionItems.map((field, index) => (
                                <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
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


                <div className='flex justify-center'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>



        </AdminItemContainer>

    )
}

export default Products