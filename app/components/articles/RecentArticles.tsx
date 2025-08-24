"use client";

import Link from "next/link";
import { ArticleData } from "../../../../types/global";
import ArticleCard from "./ArticleCard";
import styles from "./RecentArticles.module.css";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";

export default function RecentArticles({
  articles,
}: {
  articles: ArticleData["recentArticles"];
}) {
  const { width } = useWindowSize();

  let featuredIndexes = [1, 5];
  if (width && width >= 1270) {
    featuredIndexes = [2, 3];
  }

  return (
    <div className={`${styles.recentArticles} section`}>
      <Link href="/ " className={styles.recentHeading}>
        <p>Recent</p>
        <div className={styles.arrowWrapper}>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            width={18}
            height={18}
          />
        </div>
      </Link>
      <div className={styles.articles}>
        {articles.map((article, idx) => (
          <ArticleCard
            key={idx}
            article={article}
            featured={featuredIndexes.includes(idx)}
            className={styles.article}
          />
        ))}
      </div>
      <div className={styles.moreBtnWrapper}>
        <Link href="/" className={styles.moreBtn}>
          More{" "}
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            width={18}
            height={18}
          />
        </Link>
      </div>
    </div>
  );
}
