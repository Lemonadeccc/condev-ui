import React from "react";

import { Button } from "@condev-ui/ui";

export default function ButtonEvent() {
  function handleClick() {
    alert("clicked");
  }
  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}
