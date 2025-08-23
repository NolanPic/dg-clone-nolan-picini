import Image from "next/image";
import styles from "./Author.module.css";
import classNames from "classnames";

export default function Author({
  authorName,
  authorAvatar,
  className,
}: {
  authorName: string;
  authorAvatar?: string;
  className?: string;
}) {
  return (
    <div className={classNames(styles.author, className)}>
      {authorAvatar && (
        <Image
          src={`/authors/${authorAvatar}`}
          alt={authorName}
          width={30}
          height={30}
        />
      )}
      <small>{authorName}</small>
    </div>
  );
}
