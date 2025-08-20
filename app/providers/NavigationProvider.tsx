"use client";

import { createContext, useContext, useMemo, useState } from "react";
import useDisableAppScroll from "@/app/hooks/useDisableAppScroll";

type NavigationContextValue = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  toggleSearch: () => void;
};

const NavigationContext = createContext<NavigationContextValue | undefined>(
  undefined
);

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return ctx;
}

export default function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useDisableAppScroll(menuOpen);

  const value = useMemo<NavigationContextValue>(
    () => ({
      menuOpen,
      setMenuOpen,
      toggleMenu: () => setMenuOpen((prev) => !prev),
      searchOpen,
      setSearchOpen,
      toggleSearch: () => setSearchOpen((prev) => !prev),
    }),
    [menuOpen, searchOpen, setMenuOpen, setSearchOpen]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
