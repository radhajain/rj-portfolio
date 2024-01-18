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
  return (
    <div className="bg-custom-brown flex h-10 w-full flex-row justify-between p-5 font-serif text-lg text-white">
      <div onClick={goHome}>Radha Jain</div>
      <ul className="flex flex-row gap-5">
        <li>
          <button onClick={goToWriting}>Writing</button>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
