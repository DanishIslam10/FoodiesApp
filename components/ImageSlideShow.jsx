"use client"

import burgerImg from "@/assets/burger.jpg"
import curryImg from "@/assets/curry.jpg"
import dumplingsImg from "@/assets/dumplings.jpg"
import macncheeseImg from "@/assets/macncheese.jpg"
import pizzaImg from "@/assets/pizza.jpg"
import schnitzelImg from "@/assets/schnitzel.jpg"
import tomataSaladImg from "@/assets/tomato-salad.jpg"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const images = [burgerImg, curryImg, dumplingsImg, macncheeseImg, pizzaImg, schnitzelImg, tomataSaladImg]

export default function ImageSliceShow() {

    const [imageIndex, setImageIndex] = useState(0)
    const imageRef = useRef(null);

    useEffect(() => {
        // Animate image opacity with GSAP when the imageIndex changes
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 2 }
              );
              
        }
        //change image in 2 sec
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => prevIndex < images.length - 1 ? prevIndex + 1 : 0)
        }, 2000)
        return () => clearInterval(interval); // Clean up interval

    }, [imageIndex])

    return (
        <div>

            <Image
                className="rounded-md transition-opacity duration-300 ease-in-out animate-fade-in "
                ref={imageRef}
                key={imageIndex}
                width={350}
                src={images[imageIndex]}
                alt="food item image" >
            </Image>

        </div>
    )
}