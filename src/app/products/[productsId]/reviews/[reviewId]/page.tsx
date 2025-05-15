// 'use client';
import { get } from "http";
import {notFound,redirect} from "next/navigation"
// import { usePathname } from "next/navigation"; 

function getRandomInt(max:number){
    return Math.floor(Math.random() * max);
}

export default async function ProductReview({
    params
}:{params:Promise<{productsId:string;reviewId:string}>}){
    const random=getRandomInt(2); 
    if(random===1){
        throw new Error("random is 1");
    }
    const {productsId,reviewId} = await params
    if(parseInt(reviewId)>1000){
        // notFound();
        redirect("/");
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