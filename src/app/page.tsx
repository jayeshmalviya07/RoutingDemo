import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home(){
    return (
        <>
            <h1>Hey There</h1>
            <div style={{display:"flex",gap:"1rem", fontSize:"1.5rem",fontWeight:"bold"}}>
                <Link href="/blog">Blog</Link>
                <Link href="/products">Product</Link>
                <Link href="/complex-dashboard">Dashboard</Link>
                <Link href="/articles/breaking-news-123?lang=en">Read in english</Link>
                <Link href="/articles/breaking-news-123?lang=fr">Read in french</Link>
                <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
            </div>
        </>
    )
}