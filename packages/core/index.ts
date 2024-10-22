import { makeInstaller } from "@condev-element/utils";
import components from "./components";
import '@condev-element/theme/reset.css'

const installer = makeInstaller(components);

export * from "@condev-element/components";
export default installer;
