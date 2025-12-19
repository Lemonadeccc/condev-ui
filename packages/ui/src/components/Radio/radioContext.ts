import { createContext } from "react";

import type { RadioGroupContextProps } from "./types";

const defaultContextValue: RadioGroupContextProps = {
  type: "radio",
};

export const RadioGroupContext =
  createContext<RadioGroupContextProps>(defaultContextValue);
