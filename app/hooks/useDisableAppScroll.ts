"use client";

import { useEffect } from "react";
import { useNavigation } from "@/app/providers/NavigationProvider";

export default function useDisableAppScroll(disableScroll: boolean): void {
  const { scrollContainerRef } = useNavigation();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if(!scrollContainer) return;
    
    if(disableScroll) {
      scrollContainer.style.overflow = "hidden";
    } else {
      scrollContainer.style.overflow = "";
    }

    return () => {
      scrollContainer.style.overflow = "";
    };
  }, [disableScroll, scrollContainerRef]);
}


