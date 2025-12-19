export const resetContainerStyle = ({
  needResetContainerStyle,
  container,
  originContainerStyle,
}) => {
  if (needResetContainerStyle.current && container) {
    const originStyle = originContainerStyle.current;
    Object.keys(originStyle).forEach(
      (key) => (container.style[key] = originStyle[key])
    );
  }
  needResetContainerStyle.current = false;
  originContainerStyle.current = {};
};
