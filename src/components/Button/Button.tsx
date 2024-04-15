"use client";

import { Button } from "@mui/material";

export default function ButtonComponent() {
  return (
    <Button
      style={{ border: "1px solid grey" }}
      onClick={() => {
        alert("Button clicked");
      }}
    >
      Click Me
    </Button>
  );
}
