"use client";
import {useRouter} from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order.");
        router.push("/");
        // **router.replace("/");** - replaces the current route in the history stack with the new route, so the user cannot go back to the previous page using the back button.
        // **router.forward("/");** - to go to previous page
        // **router.back("/");** - to move forward in the history stack to the next page
    }

    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}