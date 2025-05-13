// 'use client';
import {notFound} from "next/navigation"
// import { usePathname } from "next/navigation"; 

export default async function ProductReview({
    params
}:{params:Promise<{productsId:string;reviewId:string}>}){
    const {productsId,reviewId} = await params
    if(parseInt(reviewId)>1000){
        notFound();
    }
    return <h1>Review {reviewId} for product {productsId}</h1>
}

// export default function ProductReview(){
//     const pathname=usePathname();
//     const productId=pathname.split('/')[2];
//     const reviewId=pathname.split('/')[4];
//     if(parseInt(reviewId)>1000){ notFound();}
//     return <h1>Review {reviewId} for product {productId}</h1>;

// }