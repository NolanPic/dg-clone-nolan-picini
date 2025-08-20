"use client";

import styles from "./Menu.module.css";
import close from "@/public/close.svg";
import Image from "next/image";
import Link from "next/link";
import apj from "@/public/apj.svg";
import lookatthebook from "@/public/lookatthebook.svg";
import solidjoys from "@/public/solidjoys.svg";
import lighttruth from "@/public/lighttruth.svg";
import arrowRight from "@/public/arrow-right.svg";
import { useEffect, useRef } from "react";
import { useNavigation } from "@/app/providers/NavigationProvider";

export default function Menu() {
  const { setMenuOpen } = useNavigation();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setMenuOpen]);
  return (
    <nav className={styles.menu} ref={ref}>
      <button className={styles.close} onClick={() => setMenuOpen(false)}>
        <Image src={close} alt="Close" />
      </button>
      <section className={styles.mainSection}>
        <ol>
          <li>
            <Link href="/">Articles</Link>
          </li>
          <li>
            <Link href="/">Messages</Link>
          </li>
          <li>
            <Link href="/">Books</Link>
          </li>
          <li>
            <Link href="/">Podcasts</Link>
          </li>
        </ol>
        <small>
          Filter resources by <Image src={arrowRight} alt="Arrow right" />
        </small>
      </section>
      <section className={styles.featuresSection}>
        <ol>
          <li>
            <Link href="/">
              <div className={styles.menuItemLeft}>
                Ask Pastor John
                <small>Questions and answers with John Piper</small>
              </div>
              <div className={styles.menuItemRight}>
                <Image src={apj} alt="Ask Pastor John" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.menuItemLeft}>
                Look at the Book
                <small>Interactive Bible study with John Piper</small>
              </div>
              <div className={styles.menuItemRight}>
                <Image src={lookatthebook} alt="Look at the Book" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.menuItemLeft}>
                Solid Joys
                <small>Daily devotional with John Piper</small>
              </div>
              <div className={styles.menuItemRight}>
                <Image src={solidjoys} alt="Solid Joys" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className={styles.menuItemLeft}>
                Light + Truth
                <small>Classic sermons from John Piper</small>
              </div>
              <div className={styles.menuItemRight}>
                <Image src={lighttruth} alt="Light + Truth" />
              </div>
            </Link>
          </li>
        </ol>
      </section>
      <section className={styles.aboutSection}>
        <p>
          Most people in the world have no experience of lasting joy in their
          lives. We’re on a mission to change that. All of our resources exist
          to guide you toward everlasting joy in Jesus Christ.
        </p>

        <div className={styles.buttons}>
          <button>About</button>
          <button>Account</button>
          <button>Give</button>
        </div>
      </section>
    </nav>
  );
}
