"use client";
import React from "react";
import Navbar from "./Navbar";

export default function PortfolioPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (ref.current == null) return;
      const { clientX, clientY } = event;
      ref.current.style.setProperty("--x", `${clientX}px`);
      ref.current.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={
        "flex h-full w-full justify-center bg-background bg-[radial-gradient(circle_farthest-side_at_var(--x,100px)_var(--y,100px),_var(--color-background-highlight)_0%,_transparent_50%)] font-light text-text-color"
      }
    >
      <div className="flex w-full flex-col items-center md:max-w-6xl ">
        <div className="w-full p-10">
          <Navbar />
          <div className="mt-20">{children}</div>
        </div>
      </div>
    </div>
  );
}
