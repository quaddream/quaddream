"use client"

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MdDelete, MdEdit } from "react-icons/md";
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
import { useRouter } from "next/navigation";
import AdminItemContainer from '@/app/components/common/AdminItemContainer';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ImageUploader } from '@/components/ui/image-uploader'
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
// import { DragEndEvent } from "@dnd-kit/core";
// import { arrayMove } from "@dnd-kit/sortable";
// import { DndContext, closestCorners } from "@dnd-kit/core";
// import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { RiDeleteBinLine } from "react-icons/ri";


interface ProjectPageProps {
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
        buttonText: string;
    },
    secondSection: {
        title: string;
        items: {
            logo: string;
            logoAlt: string;
            title: string;
        }[]
    },
    thirdSection: {
        title: string;
    },
    lastSection: {
        image: string;
        imageAlt: string;
        mainTitle: string;
        subTitle: string;
        email: string;
        phone: string;
    };
}



export default function Projects() {

    const [department, setDepartment] = useState<string>("");
    const [jobType, setJobType] = useState<string>("");
    const [jobList, setJobList] = useState<{ _id: string, firstSection: { title: string, description: string } }[]>([]);
    const [jobTypeList, setJobTypeList] = useState<{ _id: string, name: string }[]>([]);
    const [departmentList, setDepartmentList] = useState<{ _id: string, name: string }[]>([]);
    // const [reorderMode, setReorderMode] = useState(false);

    const router = useRouter();

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ProjectPageProps>();

    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });

    const handleFetchJobs = async () => {
        try {
            const response = await fetch("/api/admin/careers");
            if (response.ok) {
                const data = await response.json();
                setJobList(data.data.careers);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching jobs", error);
        }
    }

    const handleAddDepartment = async () => {
        try {
            const response = await fetch("/api/admin/careers/department", {
                method: "POST",
                body: JSON.stringify({ name: department }),
            });
            if (response.ok) {
                const data = await response.json();
                setDepartment("");
                toast.success(data.message);
                handleFetchDepartment();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error adding department", error);
        }
    }

    const handleFetchDepartment = async () => {
        try {
            const response = await fetch("/api/admin/careers/department");
            if (response.ok) {
                const data = await response.json();
                setDepartmentList(data.data);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching department", error);
        }
    }

    const handleEditDepartment= async (id: string) => {
        try {
            const response = await fetch(`/api/admin/careers/department?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ name: department }),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchDepartment();
                setDepartment("");
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error editing department", error);
        }
    }

    const handleDeleteDepartment = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/careers/department?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchDepartment();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting department", error);
        }
    }


    const handleFetchJobType = async () => {
        try {
            const response = await fetch("/api/admin/careers/job-type");
            if (response.ok) {
                const data = await response.json();
                setJobTypeList(data.data);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching job type", error);
        }
    }

    const handleAddJobType = async () => {
        try {
            const response = await fetch("/api/admin/careers/job-type", {
                method: "POST",
                body: JSON.stringify({ name: jobType }),
            });
            if (response.ok) {
                const data = await response.json();
                setJobType("");
                toast.success(data.message);
                handleFetchJobType();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error adding job type", error);
        }
    }

    const handleEditJobType = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/careers/job-type?id=${id}`, {
                method: "PATCH",
                body: JSON.stringify({ name: jobType }),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchJobType();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error editing job type", error);
        }
    }

    const handleDeleteJobType = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/careers/job-type?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchJobType();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting job type", error);
        }
    }

    const handleDeleteJob = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/careers?id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                handleFetchJobs();
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error deleting jobs", error);
        }
    }

    const onSubmit = async (data: ProjectPageProps) => {
        try {
            const response = await fetch(`/api/admin/careers`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                // router.push("/admin/commitment");
            }
        } catch (error) {
            console.log("Error in submitting careers details", error);
        }
    }

    const fetchProjectDetails = async () => {
        try {
            const response = await fetch("/api/admin/careers");
            if (response.ok) {
                const data = await response.json();
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("bannerSection", data.data.bannerSection);
                setValue("firstSection", data.data.firstSection);
                setValue("secondSection", data.data.secondSection);
                setValue("secondSection.items", data.data.secondSection.items);
                setValue("thirdSection", data.data.thirdSection);
                setValue("lastSection", data.data.lastSection);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error fetching career details", error);
        }
    }


    // const getProjectPos = (id: string) => projectList.findIndex((item) => item._id === id);

    // const handleDragEnd = (event: DragEndEvent) => {
    //     const { active, over } = event;
    //     if (!over || active.id === over.id) return;

    //     const oldIndex = getProjectPos(active.id as string);
    //     const newIndex = getProjectPos(over.id as string);

    //     setProjectList((items) => arrayMove(items, oldIndex, newIndex));
    // };

    // const confirmProjectOrder = async () => {
    //     setReorderMode(false);

    //     const orderedIds = projectList.map((p) => p._id);

    //     const formData = new FormData();
    //     formData.append("projects", JSON.stringify(orderedIds));

    //     const res = await fetch("/api/admin/careers/reorder", {
    //         method: "POST",
    //         body: formData,
    //     });

    //     if (res.ok) {
    //         const data = await res.json();
    //         toast.success(data.message);
    //     }
    // };

    useEffect(() => {
        handleFetchJobs();
        handleFetchDepartment();
        handleFetchJobType();
        fetchProjectDetails();
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
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Button Text</Label>
                                <Input type='text' placeholder='Title' {...register("firstSection.buttonText", {
                                    required: "Button Text is required"
                                })} />
                                {errors.firstSection?.buttonText && <p className='text-red-500'>{errors.firstSection?.buttonText.message}</p>}
                            </div>
                        </div>

                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>Second Section</Label>
                    <div className='rounded-md flex flex-col gap-5 p-5'>

                        <div className='flex flex-col gap-1'>
                            <Label className=' font-bold'>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", {
                                required: "Title is required"
                            })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection?.title.message}</p>}
                        </div>

                        <div className=''>
                            <Label className=' font-bold'>Items</Label>
                            <div className='rounded-md flex flex-col gap-5 border border-black/20 p-2'>
                                {secondSectionItems.map((field, index) => (
                                    <div key={field.id} className='grid grid-cols-2 gap-2 relative border-b border-black/20 pb-5'>
                                        <div className='absolute top-0 right-2'>
                                            <RiDeleteBinLine onClick={() => secondSectionRemove(index)} className='cursor-pointer text-red-600' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <Label className=' font-bold'>Logo</Label>
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
                                                <Label className=' font-bold'>Alt Tag</Label>
                                                <Input type='text' placeholder='Alt Tag' {...register(`secondSection.items.${index}.logoAlt`)} />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-col gap-2'>
                                                <Label className=' font-bold'>Title</Label>
                                                <Textarea placeholder='Title' {...register(`secondSection.items.${index}.title`)} />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => secondSectionAppend({ logo: "", logoAlt: "", title: "" })}>Add Item</Button>
                                </div>

                            </div>


                        </div>

                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>Third Section</Label>
                    <div className='p-5 flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className=' font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register("thirdSection.title", {
                                    required: "Title is required"
                                })} />
                                {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection?.title.message}</p>}
                            </div>
                        </div>

                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>Last Section</Label>
                    <div className=' p-5  flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Image</Label>
                                <Controller
                                    name="lastSection.image"
                                    control={control}
                                    rules={{ required: "Image is required" }}
                                    render={({ field }) => (
                                        <ImageUploader
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.lastSection?.image && (
                                    <p className="text-red-500">{errors.lastSection?.image.message}</p>
                                )}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Alt Tag</Label>
                                <Input type='text' placeholder='Alt Tag' {...register("lastSection.imageAlt", {
                                    required: "Alt Tag is required"
                                })} />
                                {errors.lastSection?.imageAlt && <p className='text-red-500'>{errors.lastSection?.imageAlt.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Main Title</Label>
                                <Input type='text' placeholder='Main Title' {...register("lastSection.mainTitle", {
                                    required: "Main Title is required"
                                })} />
                                {errors.lastSection?.mainTitle && <p className='text-red-500'>{errors.lastSection?.mainTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Sub Title</Label>
                                <Input type='text' placeholder='Sub Title' {...register("lastSection.subTitle", {
                                    required: "Sub Title is required"
                                })} />
                                {errors.lastSection?.subTitle && <p className='text-red-500'>{errors.lastSection?.subTitle.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Email</Label>
                                <Input type='text' placeholder='Email' {...register("lastSection.email", {
                                    required: "Email is required"
                                })} />
                                {errors.lastSection?.email && <p className='text-red-500'>{errors.lastSection?.email.message}</p>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Label className='font-bold'>Phone</Label>
                                <Input type='text' placeholder='Phone' {...register("lastSection.phone", {
                                    required: "Phone is required"
                                })} />
                                {errors.lastSection?.phone && <p className='text-red-500'>{errors.lastSection?.phone.message}</p>}
                            </div>
                        </div>

                    </div>

                </AdminItemContainer>

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

                <div className='flex justify-center mt-5'>
                    <Button type='submit' className="cursor-pointer text-white text-[16px] w-full">Submit</Button>
                </div>

            </form>


            <div className="h-screen grid grid-cols-2 gap-5">

                <div className="flex flex-col gap-2 h-screen">
                    <div className="h-1/2 w-full p-5 shadow-md border-black/20 rounded-md overflow-y-hidden bg-white">
                        <div className="flex justify-between border-b-2 border-black/20 pb-2">
                            <Label className="text-sm font-bold">Department</Label>
                            <Dialog>
                                <DialogTrigger className="bg-black text-white px-2 py-1 rounded-md" onClick={() => setDepartment("")}>Add Department</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Add Department</DialogTitle>
                                        <DialogDescription>
                                            <Input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddDepartment}>Save</DialogClose>
                                </DialogContent>

                            </Dialog>
                        </div>
                        <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[80%]">
                            {departmentList?.map((item) => (
                                <div className="flex justify-between border border-black/20 p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                                    <div className="text-[16px]">
                                        {item.name}
                                    </div>
                                    <div className="flex gap-5">
                                        <Dialog>
                                            <DialogTrigger onClick={() => { setDepartment(item.name) }}><MdEdit /></DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Edit Department</DialogTitle>
                                                    <DialogDescription>
                                                        <Input type="text" placeholder="Sector Name" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditDepartment(item._id)}>Save</DialogClose>
                                            </DialogContent>

                                        </Dialog>



                                        <Dialog>
                                            <DialogTrigger><MdDelete /></DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Are you sure?</DialogTitle>
                                                </DialogHeader>
                                                <div className="flex gap-2">
                                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteDepartment(item._id)}>Yes</DialogClose>
                                                </div>

                                            </DialogContent>

                                        </Dialog>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                    <div className="h-1/2 w-full p-5 shadow-md border-black/20 rounded-md overflow-y-hidden bg-white">
                        <div className="flex justify-between border-b-2 border-black/20 pb-2">
                            <Label className="text-sm font-bold">Job Type</Label>
                            <Dialog>
                                <DialogTrigger className="bg-black text-white px-2 py-1 rounded-md" onClick={() => setJobType("")}>Add Job Type</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Add Job Type</DialogTitle>
                                        <DialogDescription>
                                            <Input type="text" placeholder="Job Type" value={jobType} onChange={(e) => setJobType(e.target.value)} />
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddJobType}>Save</DialogClose>
                                </DialogContent>

                            </Dialog>
                        </div>
                        <div className="h-full">

                            <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[80%]">
                                {jobTypeList?.map((item) => (
                                    <div className="flex justify-between border border-black/20 p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                                        <div className="text-[16px]">
                                            {item.name}
                                        </div>
                                        <div className="flex gap-5">
                                            <Dialog>
                                                <DialogTrigger onClick={() => { setJobType(item.name) }}><MdEdit /></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edit Job Type</DialogTitle>
                                                        <DialogDescription>
                                                            <Input type="text" placeholder="Job Type" value={jobType} onChange={(e) => setJobType(e.target.value)} />
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditJobType(item._id)}>Save</DialogClose>
                                                </DialogContent>

                                            </Dialog>



                                            <Dialog>
                                                <DialogTrigger><MdDelete /></DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Are you sure?</DialogTitle>
                                                    </DialogHeader>
                                                    <div className="flex gap-2">
                                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteJobType(item._id)}>Yes</DialogClose>
                                                    </div>

                                                </DialogContent>

                                            </Dialog>

                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>

                <div className="h-screen w-full p-5 shadow-md border-black/20 rounded-md overflow-y-hidden bg-white">
                    <div className="flex justify-between border-b-2 border-black/20 pb-2">
                        <Label className="text-sm font-bold">Jobs</Label>
                        <div className="flex gap-2">
                            <Button onClick={() => router.push("/admin/careers/add")} className="text-white cursor-pointer">Add Job</Button>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[90%]">

                        {jobList?.map((item) => (
                            <div className="flex justify-between border border-black/20 p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                                <div className="text-[16px]">
                                    {item.firstSection.title}
                                </div>
                                <div className="flex gap-5">
                                    <MdEdit onClick={() => router.push(`/admin/careers/edit/${item._id}`)} />

                                    <Dialog>
                                        <DialogTrigger><MdDelete /></DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you sure?</DialogTitle>
                                            </DialogHeader>
                                            <div className="flex gap-2">
                                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                                                <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteJob(item._id)}>Yes</DialogClose>
                                            </div>

                                        </DialogContent>

                                    </Dialog>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    );
}
