"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { uploadToDropbox } from "@/lib/connectDropbox";

interface ImageUploaderProps {
  value?: string;
  onChange: (url: string, imageData?: File) => void;
  className?: string;
  deleteAfterUpload?: boolean;
  isLogo?: boolean;
  multiple?: boolean;
}

export function ImageUploader({ value, onChange, className, deleteAfterUpload = false, isLogo = false,multiple = false }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [localImageUrl, setLocalImageUrl] = useState<string | null>(null);
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  useEffect(() => {
    setIsUploadComplete(!!value);
  }, [value]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      try {
        setIsUploading(true);
        setError(null);
        setIsUploadComplete(false);

        if(multiple){
          const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("files", file); // same key for all files
      });
      formData.append("fileType", "image");
      const response = await fetch("/api/admin/upload-multiple", {
        method: "POST",
        body: formData,
      });

      if (response.status !== 200) {
        alert("Upload failed");
        return;
      }

      const data = await response.json();
      // You get back an array of URLs
      if (Array.isArray(data.urls)) {
        data.urls.forEach((url: string, index: number) => {
          onChange(url, acceptedFiles[index]); // optional second arg
        });
      }

        }else{
        //   const formData = new FormData();
        // formData.append("file", file);
        // formData.append("fileType", "image");
        // const response = await fetch("/api/admin/upload", {
        //   method: "POST",
        //   body: formData,
        // });

        // if (response.status !== 200) {
        //   setLocalImageUrl(null);
        //   alert("Upload failed");
        //   return;
        // }

        // const data = await response.json();
        const filePath = `/uploads/images/${Date.now()}${file.name}`;
        const uploadResult = await uploadToDropbox(file, filePath);
        setLocalImageUrl(uploadResult);
        onChange(uploadResult, file);
        setIsUploadComplete(true);
        }

        
        if (deleteAfterUpload) {
          setLocalImageUrl(null);
          setIsUploadComplete(false);
        }
      } catch (err) {
        setLocalImageUrl(null);
        setError(err instanceof Error ? err.message : "Failed to upload image");
      } finally {
        setIsUploading(false);
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif",".svg"],
    },
    maxFiles: multiple ? undefined : 1,
    multiple: multiple,
  });

  const removeImage = useCallback(() => {
    setLocalImageUrl(null);
    setIsUploadComplete(false);
    onChange("", undefined);
  }, [onChange, localImageUrl]);

  const displayUrl = localImageUrl || value;

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {displayUrl && isUploadComplete ? (
        <div className={`relative w-full max-w-[300px] aspect-[4/3] overflow-hidden rounded-lg border ${isLogo ? "max-w-[100px] h-[100px] bg-black" : "max-w-[300px]"}`}>
          <Image src={value ? value : displayUrl} alt="Uploaded image" className={isLogo ? "object-contain p-2" : "object-cover"} fill />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2 cursor-pointer bg-red-500"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-8 transition-colors hover:border-gray-400",
            "flex flex-col items-center justify-center gap-2 cursor-pointer",
            isDragActive && "border-blue-500 bg-blue-50",
            isUploading && "pointer-events-none opacity-60"
          )}
        >
          <input {...getInputProps()} />
          {isUploading ? (
            <>
              <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
              <p className="text-sm text-gray-600">Uploading...</p>
            </>
          ) : (
            <>
              <Upload className="h-10 w-10 text-gray-400" />
              <p className="text-sm text-gray-600">
                {isDragActive ? "Drop the image here" : "Drag & drop an image here, or click to select"}
              </p>
            </>
          )}
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
