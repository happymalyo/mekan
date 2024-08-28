"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DEFAULT_IMAGE } from "@/constants";

interface ImageThemeProps {
  darkName: string;
  lightName: string;
}

const useImageTheme = ({ darkName, lightName }: ImageThemeProps) => {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState(lightName);

  useEffect(() => {
    switch (resolvedTheme) {
      case "light":
        setSrc(lightName);
        break;
      case "dark":
        setSrc(darkName);
        break;
      default:
        setSrc(DEFAULT_IMAGE);
        break;
    }
  }, [resolvedTheme, darkName, lightName]);

  return src;
};

export default useImageTheme;
