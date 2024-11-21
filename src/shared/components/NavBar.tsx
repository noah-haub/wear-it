import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import Text from "@/shared/components/Text";
import { cn } from "../utils";
import { platform } from "@tauri-apps/plugin-os";

interface Props {
  className?: string;
}

const Navbar: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = useMemo(
    () => Math.min(Math.max(scrollPosition - 50, 0), 20) * 5,
    [scrollPosition]
  );

  const useNavbar = useMemo(() => {
    try {
      const currentPlatform = platform();
      return currentPlatform === "ios" || currentPlatform === "android";
    } catch {
      return false;
    }
  }, []);

  return (
    <>
      {useNavbar && (
        <div
          className={cn(
            "bg-primary text-primary fixed top-0 left-0 right-0 h-16 transition-opacity flex items-center justify-center"
          )}
          style={{
            opacity: opacity / 100,
          }}
        >
          <Text className="text-lg font-bold">{children}</Text>
        </div>
      )}
      <div className={cn(["text-white", className])}>
        <Text variant="title">{children}</Text>
      </div>
    </>
  );
};

export default Navbar;
