import { describe, expect, test } from "vitest";

import { render } from "@testing-library/react";

const But = ({ children }: React.PropsWithChildren) => (
  <button>{children}</button>
);

describe("Button", () => {
  test("should render a button", () => {
    const { getByRole } = render(<But>Click me</But>);
    expect(getByRole("button")).toBeInTheDocument();
  });
});
