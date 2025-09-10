"use client"

import React, { useEffect, useState } from 'react'
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
import { FilesIcon } from 'lucide-react';
import AdminItemContainer from '@/app/components/common/AdminItemContainer';



const AdminDownloads = () => {

    const [category, setCategory] = useState<string>("")

    const [categoryList, setCategoryList] = useState<{_id: string, category: string}[]>([]);

    const [banner, setBanner] = useState<string>("")
    const [bannerAlt, setBannerAlt] = useState<string>("")
    const [pageTitle, setPageTitle] = useState<string>("")
    const [metaTitle, setMetaTitle] = useState<string>("")
    const [metaDescription, setMetaDescription] = useState<string>("")

    const handleFetchCategory = async() => {
        try {
            const response = await fetch("/api/admin/downloads/category");
            if(response.ok) {
                const data = await response.json();
                console.log(data)
                setCategoryList(data.data);
            }
        } catch (error) {
            console.log("Error fetching category", error);
        }
    }

    useEffect(()=>{
        handleFetchCategory();
    },[])

    const handleAddCategory = async() => {
        try {
            const response = await fetch("/api/admin/downloads/category",{
                method: "POST",
                body: JSON.stringify({ name: category }),
            });
            if(response.ok) {
                const data = await response.json();
                setCategory("");
                alert(data.message);
                handleFetchCategory();
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error adding category", error);
        }
    }

    const handleEditCategory = async(id: string) => {
        try {
            const response = await fetch(`/api/admin/downloads/category?id=${id}`,{
                method: "PATCH",
                body: JSON.stringify({ name: category }),
            });
            if(response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchCategory();
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error editing category", error);
        }
    }

    const handleDeleteCategory = async(id: string) => {
        try {
            const response = await fetch(`/api/admin/downloads/category?id=${id}`,{
                method: "DELETE",
            });
            if(response.ok) {
                const data = await response.json();
                alert(data.message);
                handleFetchCategory();
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error deleting category", error);
        }
    }

    const submitMetaSection = async() => {
        try {
            const response = await fetch("/api/admin/downloads/meta",{
                method: "POST",
                body: JSON.stringify({ banner, bannerAlt, pageTitle, metaTitle, metaDescription }),
            });
            if(response.ok) {
                const data = await response.json();
                alert(data.message);
            }else{
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error submitting meta section", error);
        }
    }

    const fetchResourcesData = async () => {
        try {
            const response = await fetch(`/api/admin/downloads/meta`);
            if (response.ok) {
                const data = await response.json();
                setBanner(data.data.banner);
                setBannerAlt(data.data.bannerAlt);
                setPageTitle(data.data.pageTitle);
                setMetaTitle(data.data.metaTitle);
                setMetaDescription(data.data.metaDescription);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching downloads data", error);
        }
    }

    useEffect(()=>{
        fetchResourcesData();
    },[])


    return (
        <div className='flex flex-col gap-4'>
            <AdminItemContainer>
            <div className="h-fit w-full p-5 border-gray-300 rounded-md mt-5">
                                  <div className="flex justify-between border-b-2 pb-2">
                                      <Label>Intro / Meta Section</Label>
                                      <Button onClick={submitMetaSection}>Save</Button>
                                  </div>
                                  <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                                    <div>
                                      <Label>Banner</Label>
                                      <ImageUploader onChange={(url) => setBanner(url)} value={banner}/>
                                    </div>
                                    <div>
                                          <Label>Banner Alt</Label>
                                          <Input type="text" value={bannerAlt} onChange={(e) => setBannerAlt(e.target.value)} />
                                      </div>
                                      <div>
                                          <Label>Page Title</Label>
                                          <Input type="text" value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} />
                                      </div>
                                      <div>
                                          <Label>Meta title</Label>
                                          <Input type="text" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                                      </div>
                                      <div>
                                          <Label>Meta Description</Label>
                                          <Input type="text" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                                      </div>
                                  </div>
                              </div>
                              </AdminItemContainer>
                              <AdminItemContainer>
            <div className='flex justify-between items-center p-5'>
                <Label>Downloads</Label>
                <Dialog>
                        <DialogTrigger className='bg-primary text-white px-2 py-1 rounded-md' onClick={()=>setCategory("")}>Add Category</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Category</DialogTitle>
                                <DialogDescription>
                                    <Input type="text" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)} />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddCategory}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>
            </div>
            <div className='p-5 flex flex-col gap-2'>
            {categoryList.map((item)=>(
                <div className='flex justify-between items-center border rounded-md p-4 hover:bg-gray-100  hover:shadow-md transform  transition-all' key={item._id}>
                <div>
                    <p>{item.category}</p>
                </div>
                <div className='flex gap-8 items-center'>
                    <Dialog>
                        <DialogTrigger onClick={()=>setCategory(item.category)}><FaEdit className='text-lg cursor-pointer' /></DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit Category</DialogTitle>
                                <DialogDescription>
                                    <Input type="text" placeholder="Category Name" value={category} onChange={(e) => setCategory(e.target.value)} />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={()=>handleEditCategory(item._id)}>Save</DialogClose>
                        </DialogContent>

                    </Dialog>

                    <Link href={`/admin/downloads/${item._id}`}><FilesIcon className='text-lg cursor-pointer' /></Link>

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
            </AdminItemContainer>
        </div>
    )
}

export default AdminDownloads