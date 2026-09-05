"use client";
// this proves that this a client-component and not a default server-component. This is important because the usePathname hook is a client-side hook and cannot be used in server components.

import {usePathname} from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    // the pathname is a string that contains the current url path. It is split into an array using the "/" as a separator. The productId and reviewId are extracted from the array using their respective indexes.
    return(
        <div>
            <h2>Review {reviewId} Not Found for product {productId}</h2>
            <p>Could not find requested review</p>
        </div>
    )
}
/**
 in the url - ***http://localhost:3000/products/17/reviews/1010***,
    - productId = pathname.split("/")[2] = 17
    - reviewId = pathname.split("/")[4] = 1010
 */
