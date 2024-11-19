import type { Meta, StoryObj } from "@storybook/vue3";
// import "condev-element/dist/index.css";
import "condev-element/dist/theme/Collapse.css";

import { CdCollapse, CdCollapseItem } from "condev-element";

type Story = StoryObj<typeof CdCollapse>;

const meta: Meta<typeof CdCollapse> = {
  title: "Example/Collapse",
  component: CdCollapse,
  subcomponents: { CdCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      CdCollapse,
      CdCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <cd-collapse v-bind="args">
      <cd-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </cd-collapse-item>
      <cd-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </cd-collapse-item>
      <cd-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </cd-collapse-item>
    </cd-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;
