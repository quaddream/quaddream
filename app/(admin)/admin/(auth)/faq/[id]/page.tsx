"use client"

import { Label } from '@radix-ui/react-label'
import React, { useEffect } from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation';
import { RiDeleteBinLine } from "react-icons/ri";
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner';


interface FaqForm {

    faqSection: {
        items: {
            question: string;
            answer: string;
        }[];
    };
}

const IndiFaq = () => {
    const router = useRouter();
    const { id } = useParams();

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<FaqForm>();

    const { fields: faqSectionItems, append: faqSectionAppend, remove: faqSectionRemove } = useFieldArray({
        control,
        name: "faqSection.items"
    });

    const fetchFaqData = async () => {
        try {
            const response = await fetch(`/api/admin/faq?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setValue("faqSection.items", data.data);
            } else {
                const data = await response.json();
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error in fetching faq data", error);
        }
    }


    const handleAddFaq = async (data: FaqForm) => {
        try {
            const response = await fetch(`/api/admin/faq?id=${id}`, {
                method: "POST",
                body: JSON.stringify({ faqSection: data.faqSection }),
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data.message);
                router.push("/admin/faq");
            }
        } catch (error) {
            console.log("Error in adding faq", error);
        }
    }

    useEffect(() => {
        fetchFaqData();
    }, []);


    return (
        <form onSubmit={handleSubmit(handleAddFaq)} className='flex flex-col gap-2'>
            <Label className=' font-bold'>Items</Label>
            <div className='border p-2 rounded-md flex flex-col gap-5'>


                {faqSectionItems.map((field, index) => (
                    <div key={field.id} className='grid grid-cols-1 gap-2 relative border-b  pb-5'>
                        <div className='absolute top-2 right-2'>
                            <RiDeleteBinLine onClick={() => faqSectionRemove(index)} className='cursor-pointer text-red-600' />
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='w-full flex flex-col gap-2'>
                                <Label className=' font-bold'>Question</Label>
                                <Controller
                                    name={`faqSection.items.${index}.question`}
                                    control={control}
                                    rules={{ required: "Question is required" }}
                                    render={({ field }) => (
                                        <Textarea
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                {errors.faqSection?.items?.[index]?.question && (
                                    <p className="text-red-500">{errors.faqSection?.items?.[index]?.question.message}</p>
                                )}

                            </div>

                            <div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Label className=' font-bold'>Answer</Label>
                                        <Textarea placeholder='Answer' {...register(`faqSection.items.${index}.answer`)} />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                ))}

                <div className='flex justify-end'>
                    <Button type='button' className="" addItem onClick={() => faqSectionAppend({ question: "", answer: "" })}>Add Item</Button>
                </div>

            </div>

            <Button type='submit' className='text-white cursor-pointer'>Submit</Button>
        </form>
    )
}

export default IndiFaq