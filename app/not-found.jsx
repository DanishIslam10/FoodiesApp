export default function NotFoundPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-16">
            <p className="text-[60px] font-[550] bg-gradient-to-r from-orange-700 to-orange-400
             bg-clip-text text-transparent uppercase">
                Not Found
            </p>
            <p className="text-[#ababab] ">
                Unfortunately,we could not find the requested page or resource.
            </p>
        </div>
    )
}