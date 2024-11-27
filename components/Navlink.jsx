"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navlink({ href, text }) {

    const path = usePathname()

    return (
        <Link href={href} className={path.startsWith(href) ? "text-orange-600" : "text-white" } >
            <li className="font-[600] text-lg  px-2 py-1 rounded-md cursor-pointer duration-100 hover:text-orange-600">
                {text}
            </li>
        </Link>
    )
}
// IMPORTANT FOR OPTIMIZATION :
// we have made this component as client side because we are using react hooks, and react hooks are the
// feature available only on the client side.
// when we need to use a component for client side , we need to make sure that we are only using "use client"
// feature for the smallest part of that web page.
// entire page ko "use client" set krne ki zrurat nahi hai.
// page ka jitna part client side features ko use kr rha h bs usi part ko "client side" 
// bna do ek alag component bna kr
