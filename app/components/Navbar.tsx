"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import hamburger from "@/public/hamburger.svg";
import close from "@/public/close.svg";
import { useState, useRef, useEffect } from "react";
import useDisableAppScroll from "@/app/hooks/useDisableAppScroll";
import {
  motion,
  AnimatePresence,
  cubicBezier,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useNavigation } from "@/app/providers/NavigationProvider";

export default function Navbar() {
  const searchbarRef = useRef<HTMLInputElement>(null);
  const { toggleMenu, searchOpen, setSearchOpen, scrollContainerRef } =
    useNavigation();
  const [navHidden, setNavHidden] = useState(false);
  const { scrollY } = useScroll({ container: scrollContainerRef });
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current;
    if (Math.abs(diff) > 400) {
      setNavHidden(diff > 0);
      lastYRef.current = y;
    }
  });

  useEffect(() => {
    if (searchOpen && searchbarRef.current) {
      searchbarRef.current.focus();
    }
  }, [searchOpen, searchbarRef]);

  useDisableAppScroll(searchOpen);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: navHidden ? "-100%" : 0 }}
        exit={{ y: navHidden ? 0 : "-100%" }}
        transition={{
          duration: 0.3,
          ease: cubicBezier(0.21, 0.94, 0.25, 0.94),
        }}
        className={styles.navbar}
      >
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              className={styles.search}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.3,
                ease: cubicBezier(0.21, 0.94, 0.25, 0.94),
              }}
            >
              <Image
                src={search}
                alt=""
                role="presentation"
                className={styles.searchIcon}
              />
              <input
                type="text"
                placeholder="Search our resources"
                ref={searchbarRef}
              />
              <button onClick={() => setSearchOpen(false)}>
                <Image src={close} alt="Close" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className={styles.navbarContent}
          initial={{ y: 0 }}
          animate={{ y: searchOpen ? "100%" : 0 }}
          exit={{ y: searchOpen ? 0 : "-100%" }}
          transition={{
            duration: 0.3,
            ease: cubicBezier(0.21, 0.94, 0.25, 0.94),
          }}
        >
          <div className={styles.logo}>
            <Image src={logo} alt="Desiring God" />
          </div>
          <ol className={styles.links}>
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
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Give</Link>
            </li>
          </ol>
          <motion.div
            className={styles.actions}
            initial={{ x: 0 }}
            animate={{ x: searchOpen ? "100%" : 0 }}
            exit={{ x: searchOpen ? 0 : "100%" }}
            transition={{ duration: 0.2, ease: cubicBezier(0.3, 0.2, 0.5, 1) }}
          >
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Image src={search} alt="Search" />
            </button>
            <button onClick={toggleMenu}>
              <Image src={hamburger} alt="Menu" />
            </button>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}
