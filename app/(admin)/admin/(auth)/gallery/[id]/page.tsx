"use client"

import { ImageUploader } from '@/components/ui/image-uploader'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { useForm , Controller } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation';
import { closestCorners, DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import ImageCard from '@/app/components/AdminProject/ImageCard'
import Image from 'next/image';
import { TbReorder } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import { toast } from 'sonner';
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
import { FaEdit } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { Textarea } from '@/components/ui/textarea';



interface GalleryPageProps {
    metaTitle: string;
    metaDescription: string;
    thumbnail: string;
    thumbnailAlt: string;
    bannerSection: {
            image: string;
            imageAlt: string;
            title: string;
    };
    firstSection: {
      title: string;
      description: string;
    }
    images: string[];
  }

const IndiGallery = () => {
    const router = useRouter();
    const { id } = useParams();
    const [reorderMode, setReorderMode] = useState(false);
    const [category, setCategory] = useState<string>("")
    const [categoryList, setCategoryList] = useState<{_id: string, title: string}[]>([])
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<GalleryPageProps>();


        const onSubmit = async (data: GalleryPageProps) => {
            try {
                const response = await fetch(`/api/admin/gallery/inside/meta?id=${id}`, {
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

    const fetchGalleryData = async () => {
        try {
            const response = await fetch(`/api/admin/gallery?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data.data);
                setValue("images", data.data.images);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("thumbnail", data.data.thumbnail);
                setValue("thumbnailAlt", data.data.thumbnailAlt);
                setImageUrls(data.data.images);
                setCategoryList(data.data.categories);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching gallery data", error);
        }
    }

        const [imageUrls, setImageUrls] = useState<string[]>([]);
        const handleImageUpload = async (uploadedUrl: string) => {
            setImageUrls((prev) => [...prev, uploadedUrl]);
            setValue("images", [...imageUrls, uploadedUrl]);
        };
    
        const handleRemoveImage = (indexToRemove: number) => {
            setImageUrls((prev) => prev.filter((_, index) => index !== indexToRemove));
            setValue(
                "images",
                imageUrls.filter((_, index) => index !== indexToRemove)
            );
        };
    
    
        const getTaskPos = (id: string) => imageUrls.findIndex((item: string) => (item == id))
        const handleDragEnd = (event: DragEndEvent) => {
            const { active, over } = event;
    
            if (!over || active.id === over.id) return;
    
            const oldIndex = getTaskPos(active.id as string);
            const newIndex = getTaskPos(over.id as string);
    
            const newPosition = arrayMove(imageUrls, oldIndex, newIndex);
            setImageUrls(newPosition);
            setValue("images", newPosition);
        };



    const handleAddGallery = async () => {
        try {
            const response = await fetch(`/api/admin/gallery?id=${id}`, {
                method: "POST",
                body: JSON.stringify({images: imageUrls}),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                router.push("/admin/gallery");
            }
        } catch (error) {
            console.log("Error in adding gallery", error);
        }
    }


        const handleAddCategory = async() => {
            try {
                const response = await fetch(`/api/admin/gallery/inside/category?id=${id}`,{
                    method: "POST",
                    body: JSON.stringify({ name: category }),
                });
                if(response.ok) {
                    const data = await response.json();
                    setCategory("");
                    toast.success(data.message);
                    fetchGalleryData();
                }else{
                    const data = await response.json();
                    toast.error(data.message);
                }
            } catch (error) {
                console.log("Error adding category", error);
            }
        }


            const handleEditCategory = async(categoryId: string) => {
                try {
                    const response = await fetch(`/api/admin/gallery/inside/category?id=${categoryId}`,{
                        method: "PATCH",
                        body: JSON.stringify({ name: category, galleryId: id }),
                    });
                    if(response.ok) {
                        const data = await response.json();
                        toast.success(data.message);
                        fetchGalleryData();
                    }else{
                        const data = await response.json();
                        toast.error(data.message);
                    }
                } catch (error) {
                    console.log("Error editing category", error);
                }
            }
        
            const handleDeleteCategory = async(categoryId: string) => {
                try {
                    const response = await fetch(`/api/admin/gallery/inside/category?id=${categoryId}`,{
                        method: "DELETE",
                        body: JSON.stringify({ galleryId: id }),
                    });
                    if(response.ok) {
                        const data = await response.json();
                        toast.success(data.message);
                        fetchGalleryData();
                    }else{
                        const data = await response.json();
                        toast.error(data.message);
                    }
                } catch (error) {
                    console.log("Error deleting category", error);
                }
            }



    useEffect(() => {
        fetchGalleryData();
    }, []);


    return (
        <div className='flex flex-col gap-5'>

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
                                          <Label className='font-bold'>Thumbnail</Label>
                                          <Controller
                                              name={`thumbnail`}
                                              control={control}
                                              rules={{ required: "Image is required" }}
                                              render={({ field }) => (
                                                  <ImageUploader
                                                      value={field.value}
                                                      onChange={field.onChange}
                                                  />
                                              )}
                                          />
                                          {errors.thumbnail && (
                                              <p className="text-red-500">{errors.thumbnail.message}</p>
                                          )}
                                      </div>
      
                                      <div className='flex flex-col gap-2'>
                                          <div className='flex flex-col gap-2'>
                                              <Label className='font-bold'>Alt Tag</Label>
                                              <Input type='text' placeholder='Alt Tag' {...register(`thumbnailAlt`, {
                                                  required: "Value is required"
                                              })} />
                                              {errors.thumbnailAlt && <p className='text-red-500'>{errors.thumbnailAlt.message}</p>}
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

                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Meta Title</Label>
                                    <Input type='text' placeholder='Meta Title' {...register("metaTitle")} />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label className='font-bold'>Meta Description</Label>
                                    <Input type='text' placeholder='Meta Description' {...register("metaDescription")} />
                                </div>
                
                                <div className='flex justify-center mt-5'>
                                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                                </div>

                </form>

            <div className="flex flex-col gap-2 p-5 rounded-md bg-white shadow-md">
                <div className='flex justify-between items-center'>
            <Label className="block text-sm">Categories</Label>
            <Dialog>
                        <DialogTrigger className='bg-primary text-white px-3 py-1 rounded-md font-semibold' onClick={()=>setCategory("")}>Add Item</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Item</DialogTitle>
                                <DialogDescription>
                                    <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddCategory}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
                    </div>
            <div className='flex flex-col gap-4 py-3'>
                {categoryList?.map((item)=>(
                    <div className='flex justify-between items-center border rounded-md p-4 hover:bg-gray-100  hover:shadow-md transform  transition-all' key={item._id}>
                    <div>
                        <p>{item.title}</p>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <Dialog>
                            <DialogTrigger onClick={()=>setCategory(item.title)}><FaEdit className='text-lg cursor-pointer' /></DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Item</DialogTitle>
                                    <DialogDescription>
                                        <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleEditCategory(item._id)}>Save</DialogClose>
                            </DialogContent>
    
                        </Dialog>
    
                        <Link href={`/admin/gallery/${id}/${item._id}`}><IoIosImages className='text-lg cursor-pointer' /></Link>
    
                        <Dialog>
                                      <DialogTrigger><MdDelete className='text-lg cursor-pointer' /></DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Are you sure?</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex gap-2">
                                          <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                          <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleDeleteCategory(item._id)}>Yes</DialogClose>
                                        </div>
                        
                                      </DialogContent>
                        
                                    </Dialog>
    
    
                        
                    </div>
                </div>
                ))}
                </div>

            </div>

            <div className='flex flex-col gap-2 p-5 rounded-md bg-white shadow-md'>


<div>
    <div className='flex justify-between items-center'>
        <Label className="block text-sm">Images</Label>
        <div className='flex gap-5'>
        <Button className="bg-green-600 text-white" type="button" onClick={() => setReorderMode(!reorderMode)}>{reorderMode ? <GiConfirmed /> : <TbReorder />}</Button>
        </div>
    </div>
    <div className="mt-2">
        <ImageUploader onChange={handleImageUpload} deleteAfterUpload={true} multiple={true} />
    </div>




    {reorderMode && <div className="mt-4 grid grid-cols-3 gap-4">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <SortableContext items={imageUrls} strategy={verticalListSortingStrategy}>
                {imageUrls.map((url, index) => (
                    <ImageCard key={url} url={url} index={index} handleRemoveImage={handleRemoveImage} id={url} />
                ))}
            </SortableContext>
        </DndContext>
    </div>}


    {!reorderMode && <div className="mt-4 grid grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
            <div key={index} className="relative h-40">
                <Image
                    src={url}
                    alt={`Uploaded image ${index + 1}`}
                    className="h-full w-full object-cover rounded-lg"
                    width={100}
                    height={100}
                />
                <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    ×
                </button>
            </div>
        ))}
    </div>}


    <Button type="button" disabled={imageUrls.length === 0 || reorderMode} onClick={() => handleAddGallery()} className='w-full text-white mt-5'>Save</Button>
</div>

</div>

        </div>
    )
}

export default IndiGallery