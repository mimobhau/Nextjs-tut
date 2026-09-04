## src/app/products/[productId]/page.tsx
`
export default async function ProductDetails({
    params,
}: {
    params: Promise<{productId: string}>;
}) {
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
}
`
#### Line1 : export default async function ProductDetails({
- **export default** - a standard JavaScript module feature. Next.js requires the main component of a page or lauout to be the "default export" of the file so the framework can find and render it.
- **async function** - this makes it a React Server Component. Unlike traditional client-side React components, Server Components can be 'async', meaning you can pause rendering to fetch data or await Promises directly inside the component without needing 'useEffect'.

#### Line2:  params,
- Next.js automatically passes specifc props to page components. The **params** prop contains the dynamic route parameter from the URL

#### Line3: }: {
- This Switches from JavaScript destructing into TypeScript type definitions. It tells TypeScript, "here is the shape of the props this function expects"

#### Line4: params: Promise<{productId: string}>;
- this is the TypeScript definiton. It says that **params** is a **Promise** that will eventually resolve to an object containing a **productId** property, which is a string.

#### Line6: const productId = (await params).productId;
- **await params** - because **params** is a Promise, the component pauses execution here until the route parameters are fully resolved by the server
- **.productId** - once the promise resolves into an object (ex, {productId: "122"}), it extracts just the **productId** value
- **const productId** - stores the *extracted* string into a local variable


## src/app/products/[productId]/reviews/[reviewId]/page.tsx
`
export default async function ProductReview({
    params,
}: {
    params: Promise<{ productId: string, reviewId: string}>;
})
{
    const {productId, reviewId} = await params;
    return <h1>Details about product {productId} and review {reviewId}</h1>
}
`
#### Line7: const {productId, reviewId} = await params;
- **const {productId, reviewId}** - this is a standard JavaScript object destucturing. It takes the resolved object and instantly *"unpacks"*the **productId** and **reviewId** properties into their own standalone variables.
- alternate code, this does the exact same thing as line 7, but in 3 lines of code<br>
1. const resolvedParams = await params;<br>
2. const productId = resolvedParams.productId;<br>
3. const reviewId = resolvedParams.reviewId;<br>