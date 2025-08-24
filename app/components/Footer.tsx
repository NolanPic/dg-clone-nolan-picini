import styles from "./Footer.module.css";
import Image from "next/image";
import SubscribeForm from "./common/SubscribeForm";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.about}>
          <Image src="/dg-icon.svg" alt="Desiring God" width={28} height={28} />
          <div className={styles.tagline}>
            <p>
              God is most glorified in us
              <br /> when we are most satisfied in him.
            </p>
            <Link href="/">
              <small>
                Learn more about Desiring God{" "}
                <Image
                  src="/arrow-right.svg"
                  alt="arrow-right"
                  width={18}
                  height={18}
                />
              </small>
            </Link>
          </div>
        </section>
        <section className={styles.social}>
          <small className={styles.footerTitle}>Ways to Follow</small>
          <ul>
            <li>
              <Link href="#">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.subscribe}>
          <small className={styles.footerTitle}>
            New resources in your inbox
          </small>
          <div className={styles.subscribeForm}>
            <SubscribeForm className={styles.subscribeForm} />
          </div>
        </section>
      </div>
      <div className={styles.links}>
        <Link href="/">Translations</Link>
        <Link href="/">Permissions</Link>
        <Link href="/">Privacy</Link>
        <Link href="/">Give</Link>
      </div>
    </footer>
  );
}
