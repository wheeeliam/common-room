import { useState, useEffect } from "react";

// TODO: this state should live the store to avoid having multiple listeners
export function useScreenSize() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 480);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 480);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return { isMobile, width: width, height: height };
}
