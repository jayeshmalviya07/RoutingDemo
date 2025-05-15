"use client";

import {useRouter} from "next/navigation";
export default function OrderProductPage(){
    const router=useRouter();
    const handleClick=async()=>{
        console.log("Placing your order");
        router.push("/");
    }

    return(
        <>
            <h1>Order Product</h1>
            <button id="btn-1" onClick={()=>{console.log("Order Placed");handleClick();}}>Place Order</button>
           
        </>
    )
}