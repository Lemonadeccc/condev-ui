export type Breakpoint = "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
export type BreakpointMap = Partial<Record<Breakpoint, string>>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;
export type SubscribeFunc = (
  screens: ScreenMap,
  breakpointChecked: Breakpoint | null
) => void;

export interface ResponsiveValue {
  // <= 575px
  xs?: number;
  // >= 576px
  sm?: number;
  // >= 768px
  md?: number;
  // >= 992px
  lg?: number;
  // >= 1200px
  xl?: number;
  // >= 1600px
  xxl?: number;
  // >= 2000px
  xxxl?: number;
}
