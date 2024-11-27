"use client"

export default function Error({ error }) {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-16">
            <p className="text-[60px] font-[550] bg-gradient-to-r from-orange-700 to-orange-400
             bg-clip-text text-transparent uppercase">
                An Error Occurred!</p>
            <p className="text-[#ababab] ">Failed to fetch meal data,please try again.</p>
        </div>
    )
}