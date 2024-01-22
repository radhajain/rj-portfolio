"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const goHome = React.useCallback(() => router.push("/"), [router]);
  const goToWriting = React.useCallback(
    () => router.push("/writing"),
    [router],
  );
  const goToExperience = React.useCallback(
    () => router.push("/experience"),
    [router],
  );
  return (
    <div className=" h-50 sticky top-0 flex w-full flex-row justify-between pb-2 pt-2 text-lg font-semibold backdrop-blur">
      <div
        onClick={goHome}
        className="cursor-pointer hover:text-secondary hover:underline-offset-1"
      >
        Radha Jain
      </div>
      <ul className="flex flex-row gap-5">
        <li>
          <button onClick={goToExperience} className="hover:text-secondary">
            Experience
          </button>
        </li>
        <li>
          <button onClick={goToWriting} className="hover:text-secondary">
            Writing
          </button>
        </li>
      </ul>
    </div>
  );
}