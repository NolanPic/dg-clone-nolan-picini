import styles from "./page.module.css";
import FeaturedArticle from "./components/articles/FeaturedArticle";
import { ArticleData } from "../../types/global";
import ThemeArticles from "./components/articles/ThemeArticles";
import RecentArticles from "./components/articles/RecentArticles";
import SubscribeCTA from "./components/SubscribeCTA";
import Footer from "./components/Footer";

export default async function Home() {
  const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
  const apiUrl = `${baseUrl}/api`;

  const data: ArticleData = await fetch(`${apiUrl}/articles`).then((res) =>
    res.json()
  );

  return (
    <div className={styles.home}>
      <FeaturedArticle article={data.featuredArticle} />
      <ThemeArticles theme={data.theme} />
      <RecentArticles articles={data.recentArticles} />
      <SubscribeCTA />
      <Footer />
    </div>
  );
}
