import MealsGrid from "@/components/meals/MealsGrid"
import { getMeals } from "@/lib/meals"
import Link from "next/link"
import { Suspense } from "react"

//its a component (Meals) , and its an async function that return <MealsGrid/> component
//We can use async with react components because they are treated as server components in Next.js
//Suspense is react component which gets triggered when a async function is activated
//Suspense take a fallback value as an attribute

async function Meals() {
    const meals = await getMeals()
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {

    return (
        <>
            <header className="w-fit my-10 mx-14 flex flex-col gap-5">
                <p className="text-4xl text-[#f6e5d2] font-[600] ">Delicious Meals, created
                    <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"> by you</span>
                </p>
                <div className="flex flex-col gap-2">
                    <p className="text-base text-[#f9e9d8] ">Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
                    <p className="w-fit px-2 py-1 rounded-md text-[#f3ebe1] text-lg font-[550] 
                    bg-gradient-to-r from-orange-600 to-orange-400 cursor-pointer
                    transition-all duration-200 hover:scale-[1.02]">
                        <Link href="/meals/share" >
                            Share Your Favourite Recipe
                        </Link>
                    </p>
                </div>
            </header>
            <main className="flex justify-center">
                <Suspense
                    fallback={
                        <p className="text-[white] ">Fetching Meals...</p>
                    }>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}