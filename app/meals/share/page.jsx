import ShareMealForm from "@/components/meals/ShareMealForm";

export default function ShareMealPage() {

    return (
        <div>
            <div className="flex flex-col gap-10 ml-[100px] mt-16 ">
                <div className="flex flex-col gap-4">
                    <p className="text-4xl text-[#d6ccbe] font-[600] ">Share your
                        <span className="bg-gradient-to-r from-orange-700 to-orange-400 
                        bg-clip-text text-transparent ml-3 ">
                            favourite meal
                        </span>
                    </p>
                    <p className="text-[#d6ccbe]">Or any other meal you feel needs sharing!</p>
                </div>
                <ShareMealForm />
            </div>
        </div>
    );
}