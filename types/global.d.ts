export type Article = {
    title: string;
    subtitle?: string;
    type: string;
    publicationDate: string;
    shortDate: string;
    image?: string;
    authorName: string;
    authorAvatar?: string;
    description?: string;
    upcoming?: boolean;
}

export type ArticleData = {
    featuredArticle: Article;
    theme: {
        title: string;
        articles: Article[];
    };
    recentArticles: Article[];
}