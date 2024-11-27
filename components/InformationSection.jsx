export default function InformationSection({title,para_1,para_2}) {
    return (
        <div className="flex flex-col gap-4 w-[70%] my-5">
           <p className="text-3xl font-[550] text-[white] text-center "> {title} </p>
           <p className="text-base text-[white] text-center "> {para_1} </p>
           <p className="text-base text-[white] text-center "> {para_2} </p>
        </div>
    )
}