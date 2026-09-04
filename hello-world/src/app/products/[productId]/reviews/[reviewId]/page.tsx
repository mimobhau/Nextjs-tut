export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string, reviewId: string}>;
})
{
    const {productId, reviewId} = await params;
    // this is a standard JavaScript object destucturing. It takes the resolved object and instantly *"unpacks"*the **productId** and **reviewId** properties into their own standalone variables.
    return <h1>Details about product {productId} and review {reviewId}</h1>
}