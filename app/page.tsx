import styles from "./page.module.css";
import FeaturedArticle from "./components/articles/FeaturedArticle";
import { ArticleData } from "../../types/global";
import ThemeArticles from "./components/articles/ThemeArticles";
import RecentArticles from "./components/articles/RecentArticles";
import SubscribeCTA from "./components/SubscribeCTA";
import Footer from "./components/Footer";
import { readJson } from "./data/readJson";

export default function Home() {
  const data = readJson<ArticleData>("./articles/articles.json");

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
