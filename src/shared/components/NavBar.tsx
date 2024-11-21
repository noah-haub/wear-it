import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { cn } from "../utils";

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

  return (
    <>
      {/* <div className="bg-white fixed top-0 left-0 right-0 -mt-4">
        {children}
      </div> */}
      <div className={cn(["text-white", className])}>{children}</div>
    </>
  );
};

export default Navbar;
