import { Article } from "../../../types/global";
import Image from "next/image";
import Author from "./Author";
import styles from "./FeaturedArticle.module.css";
import Link from "next/link";

export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link href="/">
      <article className={`${styles.featuredArticle}`}>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <Image
              src={`/articles/${article.image}`}
              alt={article.title}
              fill
            />
          </div>
          <div className={styles.copy}>
            <div className={styles.type}>{article.type}</div>
            <h1>{article.title}</h1>
            <Author
              authorName={article.authorName}
              authorAvatar={article.authorAvatar}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
