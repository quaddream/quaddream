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
import { useForm, Controller } from "react-hook-form";
import { ImageUploader } from '@/components/ui/image-uploader'
import { Textarea } from "@/components/ui/textarea";


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
  },
  lastSection: {
      image: string;
      imageAlt: string;
      mainTitle: string;
      subTitle: string;
      buttonText: string;
  };
}



export default function Projects() {

  const [sector, setSector] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [projectList, setProjectList] = useState<{_id:string,firstSection:{title:string,description:string}}[]>([]);
  const [locationList, setLocationList] = useState<{ _id: string, name: string }[]>([]);
  const [sectorList, setSectorList] = useState<{ _id: string, name: string }[]>([]);

  const router = useRouter();

  const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ProjectPageProps>();

  const handleFetchProjects = async () => {
    try {
      const response = await fetch("/api/admin/project");
      if (response.ok) {
        const data = await response.json();
        setProjectList(data.data.projects);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching projects", error);
    }
  }

  const handleAddSector = async () => {
    try {
      const response = await fetch("/api/admin/project/sector", {
        method: "POST",
        body: JSON.stringify({ name: sector }),
      });
      if (response.ok) {
        const data = await response.json();
        setSector("");
        alert(data.message);
        handleFetchSector();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error adding sector", error);
    }
  }

  const handleFetchSector = async () => {
    try {
      const response = await fetch("/api/admin/project/sector");
      if (response.ok) {
        const data = await response.json();
        setSectorList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching sector", error);
    }
  }

  const handleEditSector = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project/sector?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: sector }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchSector();
        setSector("");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error editing sector", error);
    }
  }

  const handleDeleteSector = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project/sector?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchSector();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting sector", error);
    }
  }


  const handleFetchLocation = async () => {
    try {
      const response = await fetch("/api/admin/project/location");
      if (response.ok) {
        const data = await response.json();
        setLocationList(data.data);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching location", error);
    }
  }

  const handleAddLocation = async () => {
    try {
      const response = await fetch("/api/admin/project/location", {
        method: "POST",
        body: JSON.stringify({ name: location }),
      });
      if (response.ok) {
        const data = await response.json();
        setLocation("");
        alert(data.message);
        handleFetchLocation();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error adding location", error);
    }
  }

  const handleEditLocation = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project/location?id=${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: location }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchLocation();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error editing location", error);
    }
  }

  const handleDeleteLocation = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project/location?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchLocation();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting location", error);
    }
  }

  const handleDeleteProject = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/project?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        handleFetchProjects();
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error deleting project", error);
    }
  }

  const onSubmit = async (data: ProjectPageProps) => {
    try {
        const response = await fetch(`/api/admin/project`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const data = await response.json();
            alert(data.message);
            // router.push("/admin/commitment");
        }
    } catch (error) {
        console.log("Error in submitting project details", error);
    }
}

  const fetchProjectDetails = async() => {
    try {
      const response = await fetch("/api/admin/project");
      if(response.ok) {
        const data = await response.json();
        setValue("metaTitle", data.data.metaTitle);
        setValue("metaDescription", data.data.metaDescription);
        setValue("bannerSection", data.data.bannerSection);
        setValue("firstSection", data.data.firstSection);
        setValue("lastSection", data.data.lastSection);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching project details", error);
    }
  }

  useEffect(() => {
    handleFetchProjects();
    handleFetchSector();
    handleFetchLocation();
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
                                <Label className='font-bold'>Button Text</Label>
                                <Input type='text' placeholder='Button Text' {...register("lastSection.buttonText", {
                                    required: "Button Text is required"
                                })} />
                                {errors.lastSection?.buttonText && <p className='text-red-500'>{errors.lastSection?.buttonText.message}</p>}
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


      <div className="h-screen grid grid-cols-2 gap-5">

        <div className="flex flex-col gap-2 h-screen">
          <div className="h-1/2 w-full p-5 shadow-md border-gray-300 rounded-md overflow-y-hidden bg-white">
            <div className="flex justify-between border-b-2 pb-2">
              <Label className="text-sm font-bold">Sector</Label>
              <Dialog>
                <DialogTrigger className="bg-black text-white px-2 py-1 rounded-md" onClick={() => setSector("")}>Add Sector</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Sector</DialogTitle>
                    <DialogDescription>
                      <Input type="text" placeholder="Sector Name" value={sector} onChange={(e) => setSector(e.target.value)} />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddSector}>Save</DialogClose>
                </DialogContent>

              </Dialog>
            </div>
            <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[80%]">
              {sectorList.map((item) => (
                <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                  <div className="text-[16px]">
                    {item.name}
                  </div>
                  <div className="flex gap-5">
                    <Dialog>
                      <DialogTrigger onClick={() => { setSector(item.name)}}><MdEdit /></DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Sector</DialogTitle>
                          <DialogDescription>
                            <Input type="text" placeholder="Sector Name" value={sector} onChange={(e) => setSector(e.target.value)} />
                          </DialogDescription>
                        </DialogHeader>
                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditSector(item._id)}>Save</DialogClose>
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
                          <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteSector(item._id)}>Yes</DialogClose>
                        </div>

                      </DialogContent>

                    </Dialog>

                  </div>
                </div>
              ))}

            </div>
          </div>


          <div className="h-1/2 w-full p-5 shadow-md border-gray-300 rounded-md overflow-y-hidden bg-white">
            <div className="flex justify-between border-b-2 pb-2">
              <Label className="text-sm font-bold">Location</Label>
              <Dialog>
                <DialogTrigger className="bg-black text-white px-2 py-1 rounded-md" onClick={() => setLocation("")}>Add Location</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Location</DialogTitle>
                    <DialogDescription>
                      <Input type="text" placeholder="Location Name" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={handleAddLocation}>Save</DialogClose>
                </DialogContent>

              </Dialog>
            </div>
            <div className="h-full">

              <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[80%]">
                {locationList.map((item) => (
                  <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                    <div className="text-[16px]">
                      {item.name}
                    </div>
                    <div className="flex gap-5">
                      <Dialog>
                        <DialogTrigger onClick={() => { setLocation(item.name)}}><MdEdit /></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Location</DialogTitle>
                            <DialogDescription>
                              <Input type="text" placeholder="Location Name" value={location} onChange={(e) => setLocation(e.target.value)} />
                            </DialogDescription>
                          </DialogHeader>
                          <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleEditLocation(item._id)}>Save</DialogClose>
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
                            <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteLocation(item._id)}>Yes</DialogClose>
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

        <div className="h-screen w-full p-5 shadow-md border-gray-300 rounded-md overflow-y-hidden bg-white">
          <div className="flex justify-between border-b-2 pb-2">
            <Label className="text-sm font-bold">Projects</Label>
            <Button onClick={() => router.push("/admin/projects/add")}>Add Project</Button>
          </div>
          <div className="mt-2 flex flex-col gap-2 overflow-y-scroll h-[90%]">
            {projectList.map((item) => (
              <div className="flex justify-between border p-2 items-center rounded-md shadow-md hover:shadow-lg transition-all duration-300" key={item._id}>
                <div className="text-[16px]">
                  {item.firstSection.title}
                </div>
                <div className="flex gap-5">
                  <MdEdit onClick={() => router.push(`/admin/projects/edit/${item._id}`)} />

                  <Dialog>
                    <DialogTrigger><MdDelete /></DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                      </DialogHeader>
                      <div className="flex gap-2">
                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md">No</DialogClose>
                        <DialogClose className="bg-black text-white px-2 py-1 rounded-md" onClick={() => handleDeleteProject(item._id)}>Yes</DialogClose>
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
