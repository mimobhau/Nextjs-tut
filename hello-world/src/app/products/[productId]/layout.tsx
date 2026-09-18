import { get } from "http";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}
// this function is created to demonstrate "how to handle errors in layout files"

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error loading Product");
    }
    return(
        <>
        {children}
        <h2>Featured products</h2>
        </>
    )
}
