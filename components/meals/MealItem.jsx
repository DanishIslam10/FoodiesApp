import Image from "next/image";
import Link from "next/link";

export default function MealItem({ meal }) {
    return (
        <div className=" bg-[#191309] flex flex-col gap-1 h-fit ">
            <div className="">
                <Image
                    src={meal.image}
                    alt={meal.title}
                    width={200}
                    height={200}
                   layout="responsive"
                />
            </div>

            <div className="flex flex-col gap-3 p-2">
                <div>
                    <p className="text-[#d5cdc8] text-xl font-[550] w-fit"> {meal.title} </p>
                    <p className="text-[#f2cbb3] text-xs italic w-fit">by {meal.creator}</p>
                </div>
                <p className="text-[#d5cdc8] text-sm ">{meal.summary}</p>
                <Link
                    href={`/meals/${meal.slug}`}
                    className="bg-gradient-to-r from-orange-700 to-orange-400 w-fit px-2 py-1 rounded 
                 hover:scale-[1.02]"
                >
                    <p className="text-[#f8dbc3] font-[550]">View Details</p>
                </Link>
            </div>
        </div>
    );
}
