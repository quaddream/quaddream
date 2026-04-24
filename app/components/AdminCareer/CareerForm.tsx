"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { RiAiGenerateText } from 'react-icons/ri'
// import ImageCard from './ImageCard'
import AdminItemContainer from '../common/AdminItemContainer'
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
// import { statusData } from './statusData'



interface ProjectFormProps {
    firstSection: {
        title: string;
        department: string;
        jobType: string;
        experience: string;
        location: string;
    };
    secondSection: {
        title: string;
        items: {
            title: string;
        }[]
    }
    thirdSection: {
        title: string;
        items: {
            title: string;
        }[]
    }
    fourthSection: {
        title: string;
        description: string;
    }
    slug: string;
    metaTitle: string;
    metaDescription: string;
}

const CareerForm = ({ editMode }: { editMode?: boolean }) => {

    const router = useRouter();
    const { id } = useParams();

    const [departmentList, setDepartmentList] = useState<{ _id: string; name: string }[]>([]);
    const [jobTypeList, setJobTypeList] = useState<{ _id: string; name: string }[]>([]);

    const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<ProjectFormProps>();

    const { fields: secondSectionItems, append: secondSectionAppend, remove: secondSectionRemove } = useFieldArray({
        control,
        name: "secondSection.items"
    });

    const { fields: thirdSectionItems, append: thirdSectionAppend, remove: thirdSectionRemove } = useFieldArray({
        control,
        name: "thirdSection.items"
    });

    const handleAddCareer = async (data: ProjectFormProps) => {
        try {
            const response = await fetch(editMode ? `/api/admin/careers?id=${id}` : `/api/admin/careers`, {
                method: editMode ? "PATCH" : "POST",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                router.push("/admin/careers");
            }
        } catch (error) {
            console.log("Error in adding career", error);
        }
    }

    const fetchCareerData = async () => {
        try {
            const response = await fetch(`/api/admin/careers?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("firstSection", {
                    ...data.data.firstSection,
                    department: data.data.firstSection.department?._id || "",
                    jobType: data.data.firstSection.jobType?._id || "",
                });
                setValue("secondSection", data.data.secondSection);
                setValue("secondSection.items", data.data.secondSection.items);
                setValue("thirdSection", data.data.thirdSection);
                setValue("thirdSection.items", data.data.thirdSection.items);
                setValue("fourthSection", data.data.fourthSection);
                setValue("metaTitle", data.data.metaTitle);
                setValue("metaDescription", data.data.metaDescription);
                setValue("slug", data.data.slug);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching career data", error);
        }
    }


    const fetchJobType = async () => {
        try {
            const response = await fetch("/api/admin/careers/job-type");
            if (response.ok) {
                const data = await response.json();
                setJobTypeList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching job type", error);
        }
    }

    const fetchDepartment = async () => {
        try {
            const response = await fetch("/api/admin/careers/department");
            if (response.ok) {
                const data = await response.json();
                setDepartmentList(data.data);
            }
        } catch (error) {
            console.log("Error in fetching department", error);
        }
    }


    useEffect(() => {
        if (editMode) {
            fetchJobType().then(() => fetchDepartment()).then(() => fetchCareerData());
        } else {
            fetchJobType().then(() => fetchDepartment());
        }
    }, []);

    useEffect(() => {
        if (watch("slug") === undefined) return;
        const slug = watch("slug").replace(/\s+/g, '-');
        setValue("slug", slug);
    }, [watch("slug")])

    const handleAutoGenerate = () => {
        const name = watch("firstSection.title");
        if (!name) return;
        const slug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes
        setValue("slug", slug);
    };


    return (
        <div className='flex flex-col gap-5'>
            <form className='flex flex-col gap-5 rounded-md' onSubmit={handleSubmit(handleAddCareer)}>


                <AdminItemContainer>
                    <Label className='' main>First Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("firstSection.title", { required: "Title is required" })} />
                            {errors.firstSection?.title && <p className='text-red-500'>{errors.firstSection.title.message}</p>}
                        </div>
                        <div>
                            <Label className='flex gap-2 items-center mb-1'>
                                Slug
                                <div className='flex gap-2 items-center bg-green-600 text-white p-1 rounded-md cursor-pointer w-fit' onClick={handleAutoGenerate}>
                                    <p>Auto Generate</p>
                                    <RiAiGenerateText />
                                </div>
                            </Label>
                            <Input type='text' placeholder='Slug' {...register("slug", {
                                required: "Slug is required", pattern: {
                                    value: /^[a-z0-9]+(-[a-z0-9]+)*$/,
                                    message: "Slug must contain only lowercase letters, numbers, and hyphens (no spaces)"
                                }
                            })} />
                            {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label className=''>Department</Label>
                            <Controller
                                name="firstSection.department"
                                control={control}
                                rules={{ required: "Department is required" }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue=""
                                    >

                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Department" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {departmentList.map((item, index) => (
                                                <SelectItem key={index} value={item._id}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.firstSection?.department && <p className="text-red-500">{errors.firstSection.department.message}</p>}

                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label className=''>Job Type</Label>
                            <Controller
                                name="firstSection.jobType"
                                control={control}
                                rules={{ required: "Job Type is required" }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue=""
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Job Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {jobTypeList.map((item, index) => (
                                                <SelectItem key={index} value={item._id}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.firstSection?.jobType && <p className="text-red-500">{errors.firstSection.jobType.message}</p>}

                        </div>


                        {/* <div className='flex flex-col gap-2'>
                            <Label className=''>Status</Label>
                            <Controller
                                name="firstSection.status"
                                control={control}
                                rules={{ required: "Status is required" }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue=""
                                    >
                                        <SelectTrigger className="w-full bg-white">
                                            <SelectValue placeholder="Select Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statusData.map((item, index) => (
                                                <SelectItem key={index} value={item.value.toString()}>
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.firstSection?.status && <p className="text-red-500">{errors.firstSection.status.message}</p>}

                        </div> */}

                        <div>
                            <Label className=''>Experience</Label>
                            <Input type='text' placeholder='Experience' {...register("firstSection.experience")} />
                        </div>

                        <div>
                            <Label className=''>Location</Label>
                            <Input type='text' placeholder='Location' {...register("firstSection.location")} />
                        </div>

                    </div>

                </AdminItemContainer>

                <AdminItemContainer>
                    <Label className='' main>Second Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("secondSection.title", { required: "Title is required" })} />
                            {errors.secondSection?.title && <p className='text-red-500'>{errors.secondSection.title.message}</p>}
                        </div>
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

                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => secondSectionAppend({ title: "" })}>Add Item</Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Third Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("thirdSection.title", { required: "Title is required" })} />
                            {errors.thirdSection?.title && <p className='text-red-500'>{errors.thirdSection.title.message}</p>}
                        </div>
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
                                                    <div className='flex flex-col gap-2'>
                                                        <Label className='font-bold'>Title</Label>
                                                        <Input type='text' placeholder='Title' {...register(`thirdSection.items.${index}.title`, {
                                                            required: "Value is required"
                                                        })} />
                                                        {errors.thirdSection?.items?.[index]?.title && <p className='text-red-500'>{errors.thirdSection?.items?.[index]?.title.message}</p>}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                ))}

                                <div className='flex justify-end'>
                                    <Button type='button' className="" addItem onClick={() => thirdSectionAppend({ title: "" })}>Add Item</Button>
                                </div>

                            </div>

                        </div>
                    </div>
                </AdminItemContainer>


                <AdminItemContainer>
                    <Label className='' main>Fourth Section</Label>
                    <div className='p-5 rounded-md flex flex-col gap-5'>
                        <div>
                            <Label className=''>Title</Label>
                            <Input type='text' placeholder='Title' {...register("fourthSection.title", { required: "Title is required" })} />
                            {errors.fourthSection?.title && <p className='text-red-500'>{errors.fourthSection.title.message}</p>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Label className=' font-bold'>Description</Label>
                            <Controller name="fourthSection.description" control={control} rules={{ required: "Description is required" }} render={({ field }) => {
                                return <Textarea value={field.value} onChange={field.onChange} />
                            }} />
                            {errors.fourthSection?.description && <p className='text-red-500'>{errors.fourthSection?.description.message}</p>}
                        </div>
                    </div>
                </AdminItemContainer>

                <AdminItemContainer>
                    <Label main>SEO</Label>
                    <div className="flex flex-col gap-2 p-5">

                        <div className="mt-2 grid grid-cols-1 gap-2  h-fit">
                            <div>
                                <Label>Title</Label>
                                <Input type="text" {...register("metaTitle")} />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input type="text" {...register("metaDescription")} />
                            </div>
                        </div>
                    </div>
                </AdminItemContainer>


                <div className='flex w-full justify-center'>
                    <Button type='submit' className="cursor-pointer text-white w-full">Submit</Button>
                </div>

            </form>
        </div>
    )
}

export default CareerForm