import React from 'react'
import {client} from "@/sanity/lib/client";
import {STARTUP_BY_ID_QUERY} from "@/lib/queries";
import {notFound} from "next/navigation";

const Page = async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id;
    const post = await client.fetch(STARTUP_BY_ID_QUERY,{id});
    if(!post) return notFound();
    return (
        <>
        <h1>{post.title}</h1>
        </>
    )
}
export default Page
