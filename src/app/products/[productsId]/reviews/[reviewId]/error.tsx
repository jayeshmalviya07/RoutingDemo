"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function errorBoundary({error,reset}:{error: Error;reset: () => void}){
    const router=useRouter();
    const reload=()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        });
    }
    return(
        <div>
            {error.message} 
            <button onClick={reload}>Try again</button>
        </div>
    )
}