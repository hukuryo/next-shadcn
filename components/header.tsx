"use client";

import React from "react";
import { ModeToggle } from "./toggle";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-bg-gray-800 text-2xl font-semibold">TODO APP</h1>
        <div className="flex items-center gap-5">
          <Link href="/">List</Link>
          <Link href="add">Add</Link>
          <ModeToggle /> {/* モード切替コンポーネントの挿入 */}
        </div>
      </div>
    </header>
  );
};
