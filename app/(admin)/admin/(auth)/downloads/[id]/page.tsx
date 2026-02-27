"use client"

import { Label } from '@radix-ui/react-label';
import React, { useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { RiDeleteBinLine } from 'react-icons/ri';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileUploader } from '@/components/ui/file-uploader';
import { useRouter, useParams } from 'next/navigation'

interface Certifications {
    files: {
        title: string;
        file: string;
        size: string;
    }[];
}

const IndiDownloads = () => {
    const router = useRouter();
    const { id } = useParams();

    const { control, register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm<Certifications>();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "files"
    });

    useEffect(() => {
        console.log(watch("files"))
    }, [watch("files")])

    const onSubmit = async () => {
        try {
            const response = await fetch(`/api/admin/downloads?id=${id}`, {
                method: "POST",
                body: JSON.stringify(getValues("files")),
            });
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                router.push("/admin/downloads");
            }
        } catch (error) {
            console.log("Error adding downloads", error);
        }
    };

    const fetchDownloadsData = async () => {
        try {
            const response = await fetch(`/api/admin/downloads?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setValue("files", data.data.files);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.log("Error in fetching downloads data", error);
        }
    }

    useEffect(() => {
        fetchDownloadsData();
    }, []);

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-md font-semibold'>Files</h1>
            <div className='border-2 border-black/20 p-2 rounded-md grid grid-cols-2 gap-5'>


                {fields.map((field, index) => (
                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-r border-black/20 pr-5 even:border-r-0'>
                        <div className='absolute top-2 right-2'>
                            <RiDeleteBinLine onClick={() => remove(index)} className='cursor-pointer text-red-600' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <Label className='pl-3 font-bold'>File</Label>
                                <Controller
                                    name={`files.${index}.file`}
                                    control={control}
                                    rules={{ required: "File is required" }}
                                    render={({ field }) => (
                                        <FileUploader
                                            value={field.value}
                                            onChange={(url, fileName, size) => {
                                                field.onChange(url); // update file URL
                                                setValue(`files.${index}.size`, size); // update size separately
                                            }}
                                        />
                                    )}
                                />
                                {errors.files?.[index]?.file && <p className='text-red-500'>{errors.files?.[index]?.file.message}</p>}
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label className='pl-3 font-bold'>Title</Label>
                                <Input type='text' placeholder='Title' {...register(`files.${index}.title`)} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Label className='pl-3 font-bold'>Size</Label>
                                <Input type='text' placeholder='Size' {...register(`files.${index}.size`)} readOnly />
                            </div>
                        </div>

                    </div>
                ))}



            </div>
            <div className='flex justify-end'>
                <Button type='button' addItem className="cursor-pointer" onClick={() => append({ file: "", title: "", size: "" })}>Add Item</Button>
            </div>

            <Button type='submit' onClick={handleSubmit(onSubmit)} className='w-full mx-auto cursor-pointer text-white'>Submit</Button>
        </div>
    )
}

export default IndiDownloads