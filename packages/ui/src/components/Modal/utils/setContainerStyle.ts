import { getScrollBarWidth } from "./getScrollBarWidth";

export const setContainerStyle = ({
  container,
  needResetContainerStyle,
  originContainerStyle,
}) => {
  if (container && container.style.overflow !== "hidden") {
    const originStyle = container.style;
    needResetContainerStyle.current = true;

    const containerScrollBarWidth = getScrollBarWidth(container);
    if (containerScrollBarWidth) {
      originContainerStyle.current.width = originStyle.width;
      container.style.width = `calc(${
        container.style.width || "100%"
      } - ${containerScrollBarWidth}px)`;
    }

    originContainerStyle.current.overflow = originStyle.overflow;
    container.style.overflow = "hidden";
  }
};
