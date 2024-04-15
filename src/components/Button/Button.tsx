"use client";

import { Button } from "@mui/material";

type ButtonComponentProps = {
  label: string;
  bgColor: string;
};

export default function ButtonComponent({
  label,
  bgColor,
}: ButtonComponentProps) {
  return (
    <Button
      style={{ border: "1px solid grey", background: bgColor }}
      onClick={() => {
        alert("Button clicked");
      }}
    >
      {label || `Click Me`}
    </Button>
  );
}
