import React from "react";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/container";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <>
      <Header />
      <Container pageTitle="POST">
        <Input />
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
      </Container>
    </>
  );
}
