"use client"

import React, { useEffect, useState } from 'react'
import { IoIosImages } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ImageUploader } from '@/components/ui/image-uploader';
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { Textarea } from '@/components/ui/textarea';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { RiAiGenerateText } from 'react-icons/ri';

interface GalleryPageProps {
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
    }
}

const AdminGallery = () => {

    const [category, setCategory] = useState<string>("")
    const [slug, setSlug] = useState<string>("")

    const [categoryList, setCategoryList] = useState<{ _id: string, title: string, slug: string }[]>([]);

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<GalleryPageProps>();


    const handleAddCategory = async () => {
        try {
            const response = await fetch("/api/admin/gallery", {
                method: "POST",
                body: JSON.stringify({ name: category, slug }),
            });
            if (response.ok) {
                const data = await response.json();
                setCategory("");
                toast.success(data.message);
                fetchGalleryData();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error adding category", error);
        }
    }

    const handleEditCategory = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/gallery?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ name: category, slug }),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                fetchGalleryData();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error editing category", error);
        }
    }

    const handleDeleteCategory = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/gallery?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                fetchGalleryData();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting category", error);
        }
    }

    const fetchGalleryData = async () => {
        try {
            const response = await fetch(`/api/admin/gallery/meta`);
            if (response.ok) {
                const data = await response.json();
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setCategoryList(data.data.gallery);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching gallery data", error);
        }
    }

    useEffect(() => {
        fetchGalleryData();
    }, [])

    const onSubmit = async (data: GalleryPageProps) => {
        try {
            const response = await fetch(`/api/admin/gallery/meta`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in submitting project details", error);
        }
    }


    const handleAutoGenerate = () => {
        const name = category;
        if (!name) return;
        const slug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
        setSlug(slug);
    };


    return (
        <div className='flex flex-col gap-4'>
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
            <AdminItemContainer>
                <div className='flex justify-between items-center p-5'>
                    <h1 className='text-md font-semibold'>Gallery</h1>
                    <Dialog>
                        <DialogTrigger className='bg-primary text-white px-3 py-1 rounded-md font-semibold' onClick={() => { setCategory(""); setSlug("") }}>Add Item</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Item</DialogTitle>
                                <DialogDescription>
                                    <Label className='font-bold'>Category</Label>
                                    <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className='mt-2' />
                                    <div className='flex gap-2 mt-4'>
                                        <Label className='font-bold'>Slug</Label>
                                        <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit' onClick={handleAutoGenerate}>
                                            <p>Auto Generate</p>
                                            <RiAiGenerateText />
                                        </div>
                                    </div>
                                    <Input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} className='mt-2' />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddCategory}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                </div>
                <div className='px-5 flex flex-col gap-4 py-3'>
                    {categoryList.map((item) => (
                        <div className='flex justify-between items-center border rounded-md p-4 hover:bg-gray-100  hover:shadow-md transform  transition-all' key={item._id}>
                            <div>
                                <p>{item.title}</p>
                            </div>
                            <div className='flex gap-8 items-center'>
                                <Dialog>
                                    <DialogTrigger onClick={() => { setCategory(item.title); setSlug(item.slug) }}><FaEdit className='text-lg cursor-pointer' /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit Item</DialogTitle>
                                            <DialogDescription>
                                                <Label className='font-bold'>Category</Label>
                                                <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                <div className='flex gap-2 mt-4'>
                                                    <Label className='font-bold'>Slug</Label>
                                                    <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit' onClick={handleAutoGenerate}>
                                                        <div>Auto Generate</div>
                                                        <RiAiGenerateText />
                                                    </div>
                                                </div>
                                                <Input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} className='mt-2' />
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditCategory(item._id)}>Save</DialogClose>
                                    </DialogContent>

                                </Dialog>

                                <Link href={`/admin/gallery/${item._id}`}><IoIosImages className='text-lg cursor-pointer' /></Link>

                                <Dialog>
                                    <DialogTrigger><MdDelete className='text-lg cursor-pointer' /></DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you sure?</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex gap-2">
                                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteCategory(item._id)}>Yes</DialogClose>
                                        </div>

                                    </DialogContent>

                                </Dialog>



                            </div>
                        </div>
                    ))}
                </div>
            </AdminItemContainer>
        </div>
    )
}

export default AdminGallery