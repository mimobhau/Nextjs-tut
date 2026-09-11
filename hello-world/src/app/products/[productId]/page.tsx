import {Metadata} from "next";

type Props = {
    params: Promise<{productId: string}>;
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);
        }, 100);
    });
    return{
        title: `Product ${title}`,
    };
};

// each page in app router receives route parameter through the "params" props
export default async function ProductDetails({
    params,
}: {
    params: Promise<{productId: string}>;
}) {
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>;
}

/**
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
 */