import styles from "./ThemeArticles.module.css";
import { ArticleData } from "../../../../types/global";
import Image from "next/image";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import classNames from "classnames";

export default function ThemeArticles({
  theme,
}: {
  theme: ArticleData["theme"];
}) {
  const firstArticleImage = theme.articles?.[0]?.image;

  return (
    <>
      <div className={styles.themeArticlesMobile}>
        <div className={styles.inner}>
          <Link href="/">
            <div className={styles.themeTitle}>
              <p>
                Current Theme
                <span>{theme.title}</span>
              </p>
              <Image
                src="/arrow-right.svg"
                alt="Arrow Right"
                width={18}
                height={18}
              />
            </div>
          </Link>
          <div className={styles.articles}>
            {theme.articles.map((article, idx) => (
              <ArticleCard key={idx} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.themeArticlesDesktop}>
        <div className={styles.inner}>
          {firstArticleImage && (
            <div className={styles.imageWrapper}>
              <Image
                src={`/articles/${firstArticleImage}`}
                alt={theme.title}
                fill
              />
            </div>
          )}
          <div className={styles.copy}>
            <div className={styles.themeTitle}>
              <small>Current Theme</small>
              <p>{theme.title}</p>
            </div>

            <div className={styles.articles}>
              {theme.articles.map((article, idx) => (
                <article
                  key={idx}
                  className={classNames(
                    styles.article,
                    article.upcoming && styles.upcoming
                  )}
                >
                  <small>{article.shortDate}</small>
                  <div className={styles.details}>
                    <h2>{article.title}</h2>
                    <small>{article.authorName}</small>
                  </div>
                </article>
              ))}
              <Link href="/" className={styles.viewAll}>
                All Available{" "}
                <Image
                  src="/arrow-right.svg"
                  width={18}
                  height={18}
                  alt="Arrow Right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
