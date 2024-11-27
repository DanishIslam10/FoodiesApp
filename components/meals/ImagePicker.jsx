'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function ImagePicker({ label = "Upload Image", register, errors, setValue, image }) {
    const [imagePreview, setImagePreview] = useState(null);

    console.log("image preview value:", imagePreview)
    console.log("image:", image)

    useEffect(() => {
        if (image && image[0]) {
            const imageUrl = URL.createObjectURL(image[0]);
            setImagePreview(imageUrl); // Update state with the new file's preview URL
            setValue("image", image[0])
        }
        else if(!image) {
            setImagePreview(null)
        }
    }, [image,setValue])

    const clearPreview = () => {
        setImagePreview(null);
        setValue("image", null); // Reset the image field in the form
    };

    return (
        <div>
            {imagePreview ? (
                <div className="relative w-fit">
                    <Image
                        src={imagePreview}
                        alt="Image preview"
                        width={200}
                        height={200}
                        className="rounded-md"
                    />
                    <AiOutlineDelete
                        onClick={clearPreview}
                        className="absolute top-0 right-0 text-3xl text-white bg-red-600 
                            p-1 m-1 rounded-full cursor-pointer hover:scale-105"
                    />
                </div>
            ) : (
                <div className="flex flex-col">
                    {/* File input field */}
                    <input
                        type="file"
                        id="image"
                        accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
                        className="hidden"
                        {...register("image", { required: true })}
                    />
                    {errors.image && (
                        <span className="text-red-500">please upload an image</span>
                    )}
                    {/* File picker label */}
                    <label
                        htmlFor="image"
                        style={{color:"black"}}
                        className="bg-gray-300 text-black py-1 px-3 w-fit cursor-pointer rounded-md"
                    >
                        {label}
                    </label>
                </div>
            )}
        </div>
    );
}
