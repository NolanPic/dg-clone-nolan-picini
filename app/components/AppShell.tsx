"use client";

import MenuProvider, {
  useNavigation,
} from "@/app/providers/NavigationProvider";
import Navbar from "./Navbar";
import Menu from "./Menu";
import styles from "./AppShell.module.css";
import classNames from "classnames";
import { cubicBezier, motion, AnimatePresence } from "framer-motion";
import Backdrop from "./common/Backdrop";

function ShellInner({ children }: { children: React.ReactNode }) {
  const { menuOpen, searchOpen, setSearchOpen } = useNavigation();
  return (
    <div className={classNames(styles.main, menuOpen && styles.menuOpen)}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: menuOpen ? "calc(var(--menuWidth) * -1)" : 0 }}
        exit={{ x: 0 }}
        transition={{
          duration: 0.2,
          ease: cubicBezier(0.21, 0.94, 0.25, 0.94),
        }}
      >
        <Navbar />
        <Backdrop isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        {children}
      </motion.div>
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "var(--menuWidth)" }}
            animate={{
              x: menuOpen ? 0 : "var(--menuWidth)",
            }}
            exit={{ x: "var(--menuWidth)" }}
            transition={{
              duration: 0.2,
              ease: cubicBezier(0.21, 0.94, 0.25, 0.94),
            }}
            className={styles.menu}
          >
            <Menu />
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <ShellInner>{children}</ShellInner>
    </MenuProvider>
  );
}
