import ImageSliceShow from "@/components/ImageSlideShow";
import InformationSection from "@/components/InformationSection";
import Link from "next/link";
import { data } from "@/data/homepageData"

export default function Home() {

  console.log("Running in:", process.env.NODE_ENV);

  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex gap-10 mt-10">
        <div>
          <ImageSliceShow />
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <div >
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">NEXT LEVEL FOOD FOR</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-800 to-orange-400 bg-clip-text text-transparent">NEXT LEVEL FOODIES</p>
          </div>
          <p className="text-[#c6c6c6] ">Taste & share food from all over the world</p>
          <div className="flex gap-8 items-center">
            <p className="text-[#f59942] ">Join the Community</p>
            <Link href="/meals" className="bg-gradient-to-r from-orange-800 to-orange-500 px-3 py-1 rounded" >
              <p className="text-[white] font-[550] ">Explore Meals</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col justify-center items-center">
        {
          data.map((item, index) => (
            <InformationSection
              key={index}
              title={item.title}
              para_1={item.para_1}
              para_2={item.para_2}
            />
          ))
        }
      </div>
    </div>
  );
}
