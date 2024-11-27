import { getMeal } from "@/lib/meals"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function MealDetailsPage({ params }) {

    const meal = getMeal(params.mealSlug)

    if (!meal) {
        notFound()
        //this function is provided by next.js.
        //this will render the nearest not-found.jsx component
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-10 justify-center items-center my-10 w-[80%] ">
                <div className="flex gap-16 justify-between">
                    <Image src={meal.image} width={350} height={300} alt={meal.title} className="rounded" />
                    <div className="flex flex-col gap-4 p-4">
                        <p className="text-[60px] font-[600] text-[#d6cdc1] leading-[70px] uppercase "> {meal.title} </p>
                        <p className="text-[#d6cdc1] italic ">by
                            <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent ml-2">
                                {meal.creator}
                            </span>
                        </p>
                        <p className="text-[#d6cdc1]"> {meal.summary} </p>
                    </div>
                </div>
                <div className="w-[80%] bg-[#5c5051] px-6 py-4 text-[#dedede] border-[1px] border-[#999999] rounded ">
                    <p dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }} ></p>
                </div>
            </div>
        </main>
    )
}