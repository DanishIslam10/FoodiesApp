import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-2 grid-cols-1 gap-12 w-[80%] my-4 ">
            {
                meals.map((meal) => (
                    <MealItem key={meal.id} meal={meal} />
                ))
            }
        </div>
    )
}