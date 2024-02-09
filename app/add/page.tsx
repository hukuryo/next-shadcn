import React from "react";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/container";

export default function page() {
  return (
    <>
      <Header />
      <Container pageTitle="POST">
        <Input />
      </Container>
    </>
  );
}
