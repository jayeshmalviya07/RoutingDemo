export const metadata={
    title:"blog",
}

export default async function blog(){
    await new Promise((resolve)=>{
        setTimeout(()=>{resolve("Intentionally delay")},
        2000)
});
    return <h1>Blog Page</h1>;
}