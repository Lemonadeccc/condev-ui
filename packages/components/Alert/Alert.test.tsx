import type { AlertType } from "./types.ts";

import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
// import { withInstall } from "@condev-element/utils";
// import { CdAlert } from "./index";

import Alert from "./Alert.vue";
import CdIcon from "../Icon/Icon.vue";

describe("Alert.vue", () => {
  const title = "Test Alert" as const;
  const desc = "This is a test description" as const;
  it("should render the alert with default props", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["CdIcon"],
      },
    });
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(desc);

    // close icon
    const iconElement = wrapper.findComponent(CdIcon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe("xmark");

    const wrapper2 = mount(() => (
      <Alert title={title} description={desc}></Alert>
    ));

    expect(wrapper2.text()).toContain(title);
    expect(wrapper2.text()).toContain(desc);
  });

  it.each([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["error", "circle-xmark"],
    ["non-compliance", "circle-info"], // 不符合 type 定义的
  ])("should has the correct icon when props type is %s", (type, iconName) => {
    const wrapper = mount(Alert, {
      props: {
        title,
        closable: false,
        showIcon: true,
        type: type as AlertType,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["CdIcon"],
      },
    });

    const iconElement = wrapper.findComponent(CdIcon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe(iconName);
  });

  it("should emit close event when close icon is clicked", () => {
    const onClose = vi.fn();

    const wrapper = mount(Alert, {
      props: {
        title,
        closable: true,
        showIcon: false,
        onClose,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["CdIcon"],
      },
    });
    wrapper.findComponent(CdIcon).trigger("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("should allow custom content via slots", () => {
    const wrapper = mount(Alert, {
      props: {
        title: "test title",
      },
      slots: {
        default: desc,
        title,
      },
    });
    expect(wrapper.text()).toContain(desc);
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).not.toContain("test title");
  });

  it("should support centering text", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        description: desc,
        center: true,
      },
    });
    //class
    const rootNode = wrapper.find(".cd-alert");
    expect(rootNode.classes()).toContain("text-center");
  });

  it("should not render close icon when closable is false", () => {
    const wrapper = mount(Alert, {
      props: { closable: false },
    });
    expect(wrapper.find(".cd-alert__close").exists()).toBe(false);
  });

  it("should toggle visibility when open and close methods are called", async () => {
    const wrapper = mount(Alert, {
      props: { title, closable: false },
    });
    await wrapper.vm.close();
    expect(wrapper.find(".cd-alert").attributes().style).toBe("display: none;");
    await wrapper.vm.open();
    expect(wrapper.find(".cd-alert").attributes().style).toBe("");
  });
});

// describe("Alert/index", () => {
//   it("should be exported with withInstall()", () => {
//     expect(CdAlert.install).toBeDefined();
//   });
//   it("component should be exported", () => {
//     expect(CdAlert).toBe(Alert);
//   });

//   // 可选
//   it("should enhance Alert component", () => {
//     const enhancedAlert = withInstall(Alert);
//     expect(enhancedAlert).toBe(CdAlert);
//   });

//   // 可选
//   it("should apply specific enhance", () => {
//     const enhancedAlert = withInstall(Alert);
//     expect(enhancedAlert).toHaveProperty("install");
//   });
// });