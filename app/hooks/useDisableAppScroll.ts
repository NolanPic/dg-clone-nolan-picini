"use client";

import { useEffect } from "react";

export default function useDisableAppScroll(disableScroll: boolean): void {
  useEffect(() => {
    const elements = document.querySelectorAll("body, html");

    const setOverflow = (overflow: string) => {
      elements.forEach((elem) => {
        (elem as HTMLElement).style.overflow = overflow;
      });
    };

    if (disableScroll) {
      setOverflow("hidden");
    } else {
      setOverflow("");
    }

    return () => {
      setOverflow("");
    };
  }, [disableScroll]);
}


