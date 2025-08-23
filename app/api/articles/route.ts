import { NextResponse } from "next/server";
import { readJson } from "../readJson";
import { ArticleData } from "../../../../types/global";


export async function GET() {
    try {
        const articles = readJson<ArticleData>("./articles/articles.json");
        return NextResponse.json(articles);
    } catch(err) {
        return NextResponse.json({ error: `Failed to fetch articles: ${err}` }, { status: 500 });
    }
}