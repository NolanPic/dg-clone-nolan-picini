import { Article } from "../../../../types/global";
import Image from "next/image";
import styles from "./ArticleCard.module.css";
import classNames from "classnames";
import Link from "next/link";
import Author from "./Author";

function ResourceType({ type }: { type: string }) {
  const typeMap = {
    Article: "audio.svg",
    "Ask Pastor John": "apj.svg",
    "Look at the Book": "lookatthebook.svg",
    "Light + Truth": "lighttruth.svg",
    Message: "video.svg",
  };

  let typeClass = null;
  switch (type) {
    case "Article":
    case "Message":
      typeClass = styles.smallIcon;
      break;
    case "Look at the Book":
      typeClass = styles.noOpacity;
      break;
  }

  return (
    <div className={classNames(styles.type, typeClass)}>
      <Image
        src={`/${typeMap[type as keyof typeof typeMap]}`}
        alt={type}
        width={20}
        height={20}
      />
      <p>{type}</p>
    </div>
  );
}

export default function ArticleCard({
  article,
  className,
  featured,
}: {
  article: Article;
  className?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href="/"
      className={classNames(className, featured && styles.featured)}
    >
      <article
        className={classNames(
          styles.articleCard,
          article.upcoming && styles.upcoming
        )}
      >
        <div className={styles.imageWrapper}>
          <Image src={`/articles/${article.image}`} alt={article.title} fill />
        </div>
        <ResourceType type={article.type} />
        <div className={styles.copy}>
          <p className={styles.typeMobile}>{article.type}</p>
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.date}>{article.publicationDate}</p>
          <p className={styles.authorMobile}>
            {article.authorName} <span>{article.publicationDate}</span>
          </p>
          <p className={styles.excerpt}>{article.description}</p>
        </div>
        <Author
          className={styles.author}
          authorName={article.authorName}
          authorAvatar={article.authorAvatar}
        />
      </article>
    </Link>
  );
}
