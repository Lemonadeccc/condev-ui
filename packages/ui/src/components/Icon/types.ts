import type { CSSProperties, SVGAttributes } from "react";

type baseIconProps = {
  size?: string | string[];
  style?: CSSProperties;
  className?: string;
  useStrokeCurrentColor?: boolean;
  useFillCurrentColor?: boolean;
};

export type IconProps = baseIconProps &
  Omit<SVGAttributes<SVGElement>, keyof baseIconProps>;
