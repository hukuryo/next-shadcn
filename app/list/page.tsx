import React from "react";
import { Header } from "@/components/header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Container } from "@/components/container";
import { DataTableDemo } from "@/components/data-table";

export default function page() {
  return (
    <>
      <Header />
      <Container pageTitle="LIST">
        <DataTableDemo />
      </Container>
    </>
  );
}
