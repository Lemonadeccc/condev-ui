import type { Dayjs } from "dayjs";

export interface MonthType {
  date: Dayjs;
  currentMonth: "prev" | "curr" | "next";
}

// Props for the Calendar component
export interface CalendarProps {
  /**
   *  (Controlled) The currently selected date
   */
  value?: Dayjs;
  /**
   *  (Uncontrolled) The default selected date
   */
  defaultValue?: Dayjs;
  /**
   *  Callback function when the date changes
   */
  onChange?: (date: Dayjs) => void;
  /**
   *  Whether to display details, may affect styling
   */
  isDetail?: boolean;
  /**
   *  Custom rendering function for date cells
   */
  dateRender?: (currentDate: Dayjs) => React.ReactNode;
  /**
   *  Custom rendering function for the header
   */
  headerRender?: (currentDate: Dayjs) => React.ReactNode;
}

// Props for the Header component
export interface HeaderProps {
  /**
   *  The currently displayed month
   */
  currentMonth: Dayjs;
  /**
   *  Callback function when the month changes
   */
  onMonthChange: (date: Dayjs) => void;
}

// Props for the MonthCalendar component
export interface MonthCalendarProps {
  /**
   *  The month currently displayed (for calculating date cells)
   */
  displayMonth: Dayjs;
  /**
   *  The currently selected date
   */
  selectedValue?: Dayjs;
  /**
   *  Callback function when a date is selected
   */
  onSelectDate: (date: Dayjs) => void;
  /**
   *  Whether to display details, may affect styling
   */
  isDetail?: boolean;
}
