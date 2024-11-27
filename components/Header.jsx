/* eslint-disable @next/next/no-img-element */
import logoImage from "@/assets/logo.png"
import Link from "next/link"
import Image from "next/image"
import Navlink from "./Navlink"

export default function Header() {

    return (
        <main className="w-[80%] flex justify-between items-center mx-auto my-6 ">
            <Link href="/" className="flex items-center gap-4 font-[600] text-xl">
                {/* in NEXT.JS , the image url is inside 'src' property */}
                <Image src={logoImage} className="w-16" alt="food items in plate" priority />
                <p className="text-2xl font-[600] text-[#cacaca] px-2 py-1 rounded ">HUNGERS FOOD</p>
            </Link>
            <nav>
                <ul className="flex gap-10">
                    <Navlink href={"/meals"} text={"Browse Meals"} />
                    <Navlink href={"/community"} text={"Foodies Community"} />
                </ul>
            </nav>
        </main>
    )
}