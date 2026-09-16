import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog",
    },
}
export default async function Blog() {
    // 'async' is required here because we are using 'await' inside the function. This is a server component, so we can use async/await to fetch data from an API or database
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentioanal delay");
        }, 2000);
        // In this case, we are simulating a delay of 2 seconds using setTimeout to demonstrate how loading states work in Next.js, using Promise
    });
    return <h1>My Blog</h1>;
}