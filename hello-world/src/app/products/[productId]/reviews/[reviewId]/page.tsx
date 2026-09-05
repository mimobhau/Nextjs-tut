import {notFound} from "next/navigation";
// importing "not-found" from 'next/navigation', which can be also used to render a custom not-found page corresponding to a trigger

export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string, reviewId: string}>;
})
{
    const {productId, reviewId} = await params;
    // this is a standard JavaScript object destucturing. It takes the resolved object and instantly *"unpacks"*the **productId** and **reviewId** properties into their own standalone variables.
    if(parseInt(reviewId) > 1000) {
        notFound();
    }
    // trigger - if reviewId is greater than 1000
    return <h1>Details about product {productId} and review {reviewId}</h1>;
}