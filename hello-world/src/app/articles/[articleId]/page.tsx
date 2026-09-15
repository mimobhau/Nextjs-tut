"use client";
import Link from "next/link";
import {use} from "react";

export default function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{articleId: string}>;
    // ***params*** is a promise that resolves to an object containing the dynamic route parameters (like id)
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
    // ***searchParams*** is a promise that resolves to an object containing the query parameters (like filters and sorting)
}) {
    const {articleId} = use(params);
    const {lang = "en"} = use(searchParams);
    return(
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in language: {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link><br/>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link><br/>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link><br/>
            </div>
        </div>
    )
}