import Link from "next/link"
export default function Home(){
    return (
        <>
            <h1>Hey There</h1>
            <Link href="/blog">Blog</Link>
        </>
    )
}