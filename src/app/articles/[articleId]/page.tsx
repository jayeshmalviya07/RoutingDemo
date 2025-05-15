import Link from "next/link";

export default async function ArticlePage({params,searchParams}:{params:Promise<{articleId:string}>
    searchParams: Promise<{lang?:"en" | "es" | "fr"}>;
})
    {
        const {articleId}=await params;
        const {lang="en"}=await searchParams;
        return(
            <>
                <h1>Article {articleId}</h1>
                <h2>Reading in {lang}</h2>
                <div>
                    <Link href={`/articles/${articleId}?lang=en`}>english</Link>
                    <Link href={`/articles/${articleId}?lang=fr`}>french</Link>
                    <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                </div>
            </>
        )
}