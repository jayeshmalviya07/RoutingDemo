import Link from "next/link";

export default function products(){
    const productId=1000;
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Products</h1>
            <h2><Link href="products/1">Products 1</Link></h2>
            <h2><Link href="products/2">Products 2</Link></h2>
            <h2><Link href="products/3" replace>Products 3</Link></h2>
            <h2><Link href="products/4">Products 4</Link></h2>
            <h2><Link href="products/5">Products 5</Link></h2>
            <Link href={`products/${productId}`}><h2>Products {productId}</h2></Link>
        </>
    )
}