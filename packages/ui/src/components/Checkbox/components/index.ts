import { Checkbox as InnerCheckbox } from "./checkbox";
import { CheckboxContext } from "./context";
import { Group } from "./group";

const Checkbox = {
  CheckboxContext,
  Root: InnerCheckbox,
  Group,
};

export { Checkbox };
