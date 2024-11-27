'use client'
import { useForm } from "react-hook-form"
import ImagePicker from "./ImagePicker"
import { createMeal } from "@/lib/operations"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useState } from "react"

export default function ShareMealForm() {

    const router = useRouter()
    const [pending, setPending] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm()

    const image = watch('image')

    async function createMealHandler(data) {
        try {
            setPending(true)
            toast.loading('Submitting your meal...');
            // await new Promise((resolve) => setTimeout(resolve, 5000)) //to test the pending state
            await createMeal(data);
            toast.dismiss(); // Remove the loading toast
            toast.success('Meal created successfully!');
            reset(); // Clear the form
            setPending(false)
            router.push('/meals'); // Navigate to meals page
        } catch (error) {
            console.error('Error creating meal:', error);
            toast.dismiss(); // Remove the loading toast
            toast.error('Failed to create meal. Please try again.');
            setPending(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createMealHandler)} className="share-meal-form w-[60%]
                text-[white] flex flex-col gap-4 " >
                <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-full">
                        <label htmlFor="creator" >Your Name</label>
                        <input
                            type="text"
                            id="creator"
                            {...register("creator", { required: true })}
                        />
                        {
                            errors.creator &&
                            <span>please enter your name</span>
                        }
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="creator_email" >Your Email</label>
                        <input
                            type="text"
                            id="creator_email"
                            {...register("creator_email", { required: true })}
                        />
                        {
                            errors.creator_email &&
                            <span>please enter your email</span>
                        }
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" >Title</label>
                    <input
                        type="text"
                        id="title"
                        {...register("title", { required: true })}
                    />
                    {
                        errors.title &&
                        <span>please enter the title</span>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="summary" >Short Summary</label>
                    <input
                        type="text"
                        id="summary"
                        {...register("summary", { required: true })}
                    />
                    {
                        errors.summary &&
                        <span>please enter short summary of the meal</span>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="instructions" >Instructions</label>
                    <textarea
                        rows={4}
                        id="instructions"
                        {...register("instructions", { required: true })}
                    />
                    {
                        errors.instructions &&
                        <span>please enter the instructions</span>
                    }
                </div>
                <div>
                    <ImagePicker
                        label="upload Image"
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        image={image}
                    />
                </div>
                <div className="mb-6 w-full flex justify-end ">
                    <button type="submit"
                        className="bg-gradient-to-r from-orange-700 to-orange-400 py-2 px-6 rounded-sm font-extralight "
                    >
                        {
                            pending ? ("Submiting...") : ("Submit Meal")
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}