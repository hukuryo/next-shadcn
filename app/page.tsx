"use client";

import axios from "axios";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const getData = async () => {
    const response = await axios.get("/api");
    console.log(response);
  };

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Link href="/list">
            <Button variant="outline">クリック</Button>
          </Link>
          <Button variant="outline" onClick={getData}>
            GetData!!
          </Button>
        </div>
      </main>
    </>
  );
}
