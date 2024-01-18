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
    <div className="bg-custom-brown h-50 sticky top-0 flex w-full flex-row justify-between pt-2 font-serif text-lg text-white">
      <div onClick={goHome} className="cursor-pointer">
        Radha Jain
      </div>
      <ul className="flex flex-row gap-5">
        <li>
          <button onClick={goToExperience}>Experience</button>
        </li>
        <li>
          <button onClick={goToWriting}>Writing</button>
        </li>
      </ul>
    </div>
  );
}
