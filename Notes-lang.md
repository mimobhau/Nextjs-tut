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

## src/app/docs/[...slug]/page.tsx
`
export default async function Docs(
    {
        params,
    }: {
        params: Promise<{slug: string[]}>;
    }
) {
    const {slug} = await params;
    if(slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        );
    }
    else if(slug?.length === 1) {
        return <h1>Viewing docs for feature {slug[0]}</h1>;
    }
    return <h1>Docs Home page</h1>;
}
`

1. this code snippet stores the params/url in **string array**
2. if there is only *1 element* after the parent folder name (here, docs) seperated by a "/", it will execute the "else if" section
   - url - ***localhost:3000/docs/element1***
   - outcome - ***Viewing docs for feature element1***
3. if there is are *2 elements* after the parent folder name seperated by two "/", it will execute the "if" section
   - url - ***localhost:3000/docs/element1/element2***
   - outcome - ***Viewing docs for feature element1 and concept element2***

## src/app/products/[productId]/reviews/[reviewId]/not-found.tsx
`
"use client";

import {usePathname} from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return(
        <div>
            <h2>Review {reviewId} Not Found for product {productId}</h2>
            <p>Could not find requested review</p>
        </div>
    )
}
`

#### Line1: "use client";
- this proves that this a client-component and not a default server-component. 

#### Line2: import {usePathname} from "next/navigation";
-This is important because the usePathname hook is a client-side hook and cannot be used in server components.

#### Line4: const pathname = usePathname();
#### Line5: const productId = pathname.split("/")[2];
#### Line6: const reviewId = pathname.split("/")[4];
- the pathname is a string that contains the current url path. It is split into an array using the "/" as a separator. The productId and reviewId are extracted from the array using their respective indexes.
- in the url - ***http://localhost:3000/products/17/reviews/1010***,
    - productId = pathname.split("/")[2] = 17
    - reviewId = pathname.split("/")[4] = 1010